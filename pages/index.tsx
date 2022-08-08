import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Image from 'next/image'
import Wrapper from '../components/wrapper';
import styles from '../styles/home.module.scss'
import { headerTheme } from '../styles/MuiThemes'
import { transitionTimeout } from '../utils/constants';
import {
  title,
  tagline1,
  tagline2,
  aboutMe,
  github,
  linkedin
} from '../utils/strings';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CSSTransition } from 'react-transition-group';
import { ThemeProvider } from '@mui/material/styles';

const Home: NextPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true)
  }, [])

  return (
    <Wrapper>
      <div className={styles.header}>
        <ThemeProvider theme={headerTheme}>
          <div className={styles.background} />
          <div className={styles.content}>
            <Grid container direction='row' style={{ height: '100vh', alignItems: 'center' }}>
              <Grid item xs={8} style={{ paddingRight: '1rem' }}>
                <CSSTransition
                  in={showContent}
                  timeout={transitionTimeout}
                  classNames="content-left"
                  unmountOnExit
                  onEnter={() => setShowContent(true)}>
                  <Grid container direction="column">
                    <Grid item>
                      <Typography variant="h6">{tagline1}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h1">{title.toUpperCase()}</Typography>
                    </Grid>
                  </Grid>
                </CSSTransition>
                <CSSTransition
                  in={showContent}
                  timeout={transitionTimeout}
                  classNames="content-bottom"
                  unmountOnExit
                  onEnter={() => setShowContent(true)}>
                  <Grid container direction="column">
                    <Grid item style={{ marginBottom: '2rem', marginTop: '1.5rem' }}>
                      <Typography variant="h5">
                        <span>{tagline2}</span>
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1" style={{ marginBottom: '1rem' }}>{aboutMe}</Typography>
                    </Grid>
                    <Grid item>
                      <Grid container direction="row" spacing={1}>
                        <Grid item>
                          <a href={linkedin}>
                            <Image
                              priority
                              src="/images/linkedinLogo.svg"
                              className={styles.logo}
                              height={30}
                              width={30}
                              alt={title}
                            />
                          </a>
                        </Grid>
                        <Grid item>
                          <a href={github}>
                            <Image
                              priority
                              src="/images/githubLogo.svg"
                              className={styles.logo}
                              height={30}
                              width={30}
                              alt={title}
                            />
                          </a>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </CSSTransition>
              </Grid>
              <Grid item xs={4} style={{ paddingLeft: '1rem' }}>
                <CSSTransition
                  in={showContent}
                  timeout={transitionTimeout}
                  classNames="content-grow"
                  unmountOnExit
                  onEnter={() => setShowContent(true)}>
                  <Image
                    priority
                    src="/images/katebishop.png"
                    className={styles.photo}
                    width={3024}
                    height={4032}
                    alt={title}
                  />
                </CSSTransition>
              </Grid>
            </Grid>
          </div>
        </ThemeProvider >
      </div >
    </Wrapper>
  )
}

export default Home
