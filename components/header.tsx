import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import Image from 'next/image'
import { headerTheme } from '../styles/MuiThemes'
import { transitionTimeout } from '../utils/constants';
import {
    title,
    tagline1,
    tagline2,
    aboutMe1,
    aboutMe2,
    aboutMe3,
    github,
    linkedin
} from '../utils/strings';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CSSTransition } from 'react-transition-group';
import { ThemeProvider } from '@mui/material/styles';

export default function Header() {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true)
    }, [])

    return (
        <div className={styles.header}>
            <ThemeProvider theme={headerTheme}>
                <div className={styles.content}>
                    <Grid container direction='row' style={{ alignItems: 'center' }}>
                        <Grid item xs={12} style={{ paddingRight: '1rem' }}>
                            <CSSTransition
                                in={showContent}
                                timeout={transitionTimeout}
                                classNames="content-left"
                                unmountOnExit
                                onEnter={() => setShowContent(true)}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography variant="h1">{title.toUpperCase()}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" style={{ marginTop: '1rem' }}>{tagline1}</Typography>
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
                                    <Grid item style={{ marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                                        <Typography variant="h5">
                                            <span>{tagline2}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <div className={styles.paragraph}>
                                            <Typography variant="body1" display="inline" paragraph>
                                                {aboutMe1}
                                            </Typography>
                                            <Typography variant="body1" display="inline" paragraph className={styles.highlight}>
                                                {aboutMe2}
                                            </Typography>
                                            <Typography variant="body1" display="inline" paragraph>
                                                {aboutMe3}
                                            </Typography>
                                        </div>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction="row" spacing={1}>
                                            <Grid item>
                                                <a href={linkedin}>
                                                    <Image
                                                        priority
                                                        src="/images/linkedinLogo.svg"
                                                        className={styles.logo}
                                                        height={25}
                                                        width={25}
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
                                                        height={25}
                                                        width={25}
                                                        alt={title}
                                                    />
                                                </a>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item className={styles.bluespan}>
                                    </Grid>
                                </Grid>
                            </CSSTransition>
                        </Grid>
                    </Grid>
                    {/* <Grid container direction='row' style={{ alignItems: 'center' }}>
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
                                                        height={25}
                                                        width={25}
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
                                                        height={25}
                                                        width={25}
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
                    </Grid> */}
                </div>
            </ThemeProvider >
        </div >
    )
}
