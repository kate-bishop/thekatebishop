import { useState, useEffect } from 'react';
import styles from './header.module.scss';
import utils from '../styles/utils.module.scss'
import Image from 'next/image'
import { headerTheme } from '../styles/mui.themes'
import { transitionTimeout } from '../utils/constants';
import {
    title,
    tagline1,
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
                    <CSSTransition
                        in={showContent}
                        timeout={transitionTimeout}
                        classNames="content-left"
                        unmountOnExit
                        onEnter={() => setShowContent(true)}>
                        <div className={styles.content}>
                            <div className={styles.text}>
                                <Typography variant="subtitle1">{tagline1}</Typography>
                                <Typography variant="h1">{title}</Typography>
                            </div>
                            <Grid item className={utils.greenspan} />
                            <div className={styles.logolinks}>
                                <a href={linkedin} className={styles.logo}>
                                    <Image
                                        priority
                                        src="/images/linkedinLogo.svg"
                                        height={25}
                                        width={25}
                                        alt="LinkedIn"
                                    />
                                </a>
                                <a href={github} className={styles.logo}>
                                    <Image
                                        priority
                                        src="/images/githubLogo.svg"
                                        height={25}
                                        width={25}
                                        alt="GitHub"
                                    />
                                </a>
                            </div>
                        </div>
                    </CSSTransition>
                </div>
            </ThemeProvider >
        </div >
    )
}
