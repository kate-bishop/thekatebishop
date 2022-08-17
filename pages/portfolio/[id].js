import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Wrapper from '../../components/wrapper';
import { portfolioPageTheme } from '../../styles/mui.themes';
import styles from './id.module.scss';
import utils from '../../styles/utils.module.scss';
import { ThemeProvider } from '@mui/material/styles';
import { CSSTransition } from 'react-transition-group';
import { transitionTimeout } from '../../utils/constants';
import { getAllPortfolioIds, getPortfolioData } from '../../utils/functions';

export default function Portfolio({ portfolioData }) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true)
  }, [])

  return (
    <Wrapper>
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
                    <Grid container justifyContent="flex-end">
                      <Typography variant="h2">{portfolioData.role.toUpperCase()}</Typography>
                    </Grid>
                  </Grid>
                  <Grid item className={styles.paragraphContainer}>
                    <div dangerouslySetInnerHTML={{ __html: portfolioData.contentHtml }} className={styles.paragraph} />
                  </Grid>
                  <Grid item>
                    <Link href={`/`}>
                      <Button disableElevation variant="contained" color="primary" className={styles.button} size="large">
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
    </Wrapper>
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
