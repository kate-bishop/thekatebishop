import Head from 'next/head';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import styles from '../styles/pages.module.scss'
import { ThemeProvider } from '@mui/material/styles';
import { title } from '../utils/strings';
import { wrapperTheme } from '../styles/mui.themes'

type WrapperProps = {
  children: JSX.Element,
};

function HideOnScroll(props: { children: any }) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Wrapper({ children }: WrapperProps) {
  return (
    <ThemeProvider theme={wrapperTheme}>
      <Head>
        <title>Kate Bishop</title>
        <meta name="description" content="Kate Bishop: Front-End Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HideOnScroll>
        <AppBar color="transparent" elevation={0}>
          <Toolbar>
            <Grid container direction="row" justifyContent="space-between">
              <Grid item>
                <Link href={`/`}>
                  <Typography variant="h5">
                    <a>{title.toUpperCase()}</a>
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Grid container direction="row">
                  <Link href={`/#about`}>
                    <Typography variant="h6" style={{ marginRight: '3rem' }}>
                      <a>About</a>
                    </Typography>
                  </Link>
                  <Link href={`/#portfolio`}>
                    <Typography variant="h6" style={{ marginRight: '3rem' }}>
                      <a>Portfolio</a>
                    </Typography>
                  </Link>
                  <Link href={`/`}>
                    <Typography variant="h6">
                      <a>Resumé</a>
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <main className={styles.main}>
        {children}
      </main>
    </ThemeProvider>
  )
}
