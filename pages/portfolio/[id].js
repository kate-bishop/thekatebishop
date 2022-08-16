import { useState, useEffect } from 'react'
import { getAllPortfolioIds, getPortfolioData } from '../../utils/functions'
import Head from 'next/head'
import Typography from '@mui/material/Typography'
import styles from './id.module.scss';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { portfolioPageTheme } from '../../styles/mui.themes'
import utils from '../../styles/utils.module.scss'
import { ThemeProvider } from '@mui/material/styles';
import { transitionTimeout } from '../../utils/constants';
import { CSSTransition } from 'react-transition-group';
import Link from 'next/link';

export default function Portfolio({ portfolioData }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true)
  }, [])

  return (
    <>
      <Head>
        <title>{portfolioData.title}</title>
      </Head>
      <article>
        <ThemeProvider theme={portfolioPageTheme}>
          <div className={styles.portfolioPage}>
            <CSSTransition
              in={showContent}
              timeout={transitionTimeout}
              classNames="content-left"
              unmountOnExit
              onEnter={() => setShowContent(true)}>
              <Grid container direction="column" className={styles.content}>
                <Grid item className={styles.title}>
                  <Typography variant="h1">{portfolioData.title.toUpperCase()}</Typography>
                  <div className={utils.redspan} />
                </Grid>
                <Grid item className={styles.paragraphContainer}>
                  <div dangerouslySetInnerHTML={{ __html: portfolioData.contentHtml }} className={styles.paragraph} />
                </Grid>
                <Grid item>
                  <Link href={`/`}>
                    <Button variant="contained" color="primary" className={styles.button}>
                      Back to Home
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </CSSTransition>
          </div>
        </ThemeProvider>
      </article>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPortfolioIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const portfolioData = await getPortfolioData(params.id)
  return {
    props: {
      portfolioData
    }
  }
}
