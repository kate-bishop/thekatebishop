import { useState, useEffect, useContext } from 'react';
import styles from './header.module.scss';
import utils from '../styles/utils.module.scss'
import Image from 'next/image'
import { homeTheme } from '../styles/mui.themes'
import { transitionTimeout } from '../utils/constants';
import { SmallScreenContext } from './wrapper';
import { aboutMe, contact } from '../utils/strings';
import Typography from '@mui/material/Typography';
import { CSSTransition } from 'react-transition-group';
import { ThemeProvider } from '@mui/material/styles';

export default function Header() {
    const useSmallScreen = useContext(SmallScreenContext);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true)
    }, [])

    return (
        <div className={styles.header}>
            <ThemeProvider theme={homeTheme}>
                <div className={styles.content}>
                    <CSSTransition
                        in={showContent}
                        timeout={transitionTimeout}
                        classNames="content-left"
                        unmountOnExit
                        onEnter={() => setShowContent(true)}>
                        <div className={styles.content}>
                            <div className={styles.text}>
                                {!useSmallScreen && <Typography variant="subtitle1">{aboutMe.tagline1}</Typography>}
                                <Typography variant="h1">{aboutMe.title}</Typography>
                            </div>
                            <div className={utils.greenspan} />
                            {useSmallScreen && <Typography variant="subtitle1">{aboutMe.tagline1}</Typography>}
                            <div className={styles.logolinks}>
                                <a href={contact.linkedIn} target="_blank" rel="noreferrer" className={styles.logo}>
                                    <Image
                                        priority
                                        src="/images/linkedinLogo.svg"
                                        height={25}
                                        width={25}
                                        alt="LinkedIn"
                                    />
                                </a>
                                <a href={contact.github} target="_blank" rel="noreferrer" className={styles.logo}>
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
