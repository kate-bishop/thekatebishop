import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import utils from '../styles/utils.module.scss'
import Image from 'next/image'
import { headerTheme } from '../styles/mui.themes'
import { transitionTimeout } from '../utils/constants';
import {
    title,
    tagline1,
    tagline2,
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
                                        <Typography variant="h2" style={{ marginTop: '1.5rem' }}>{tagline1}</Typography>
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
                                    <Grid item style={{ marginBottom: '1rem', marginTop: '3rem' }}>
                                        <Typography variant="h3">
                                            <span>{tagline2}</span>
                                        </Typography>
                                    </Grid>
                                    <Grid item className={utils.redspan} />
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
                    </Grid>
                </div>
            </ThemeProvider >
        </div >
    )
}
