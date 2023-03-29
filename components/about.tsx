import { useContext } from 'react';
import Image from 'next/image';
import styles from './about.module.scss';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { aboutTheme } from '../styles/mui.themes'
import { ThemeProvider } from '@mui/material/styles';
import { title } from '../utils/strings';
import { SmallScreenContext } from './wrapper';
function MeetKate() {
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h1">MEET KATE</Typography>
            </Grid>
            <Grid item className={styles.paragraph}>
                <Typography variant="subtitle1" display="inline">
                    Kate is a UX-obsessed Front-End Engineer with over 5 years of experience
                </Typography>
                <Typography variant="subtitle1" display="inline">
                    &nbsp;creating delightful user experiences and translating design into resilient interfaces
                </Typography>
                <Typography variant="subtitle1" display="inline">
                    . She has experience in several industries, including ecommerce, insurance, education, finance, and healthcare.
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h2" style={{ marginTop: '2rem' }}>
                    KATE&apos;S SKILLS INCLUDE...
                </Typography>
            </Grid>
            <Grid item className={styles.paragraph}>
                <Typography variant="subtitle1">
                    React (JavaScript & TypeScript), Next.js, User Experience Design, Design Thinking Frameworks, Sketch, Figma
                </Typography>
            </Grid>
        </Grid>
    )
}

export default function About() {
    const useSmallScreen = useContext(SmallScreenContext);
    return (
        <ThemeProvider theme={aboutTheme}>
            <div className={styles.about}>
                {useSmallScreen ?
                    <Grid container direction="column" className={styles.content}>
                        <Grid item>
                            <Image
                                priority
                                src="/images/katebishopcropped.png"
                                className={styles.photo}
                                height={101}
                                width={108}
                                alt={title}
                            />
                        </Grid>
                        <Grid item>
                            <MeetKate />
                        </Grid>
                    </Grid>
                    : <Grid container direction="row" justifyContent="space-between" className={styles.content}>
                        <Grid item xs={6}>
                            <MeetKate />
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container justifyContent="flex-end">
                                <Image
                                    priority
                                    src="/images/katebishop.png"
                                    className={styles.photo}
                                    height={567}
                                    width={425.25}
                                    alt={title}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                }
            </div>
        </ThemeProvider>
    )
}
