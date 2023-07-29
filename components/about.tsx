import { useContext } from 'react';
import Image from 'next/image';
import styles from './about.module.scss';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { aboutTheme } from '../styles/mui.themes'
import { ThemeProvider } from '@mui/material/styles';
import { title } from '../utils/strings';
import { SmallScreenContext } from './wrapper';

const MeetKate: React.FC = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h1">It's nice to meet you!</Typography>
            </Grid>
            <Grid item className={styles.paragraph} style={{ marginTop: '1rem' }}>
                <Typography variant="subtitle1" display="inline">
                    Kate is a UX-obsessed Front-End Engineer with over 5 years of experience
                </Typography>
                <Typography variant="subtitle1" display="inline" style={{ fontWeight: 700 }}>
                    &nbsp;creating delightful user experiences and translating design into resilient interfaces
                </Typography>
                <Typography variant="subtitle1" display="inline">
                    . She has experience in several industries, including ecommerce, insurance, education, finance, and healthcare.
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="h2" style={{ marginTop: '2rem' }}>
                    Kate&apos;s skills include...
                </Typography>
            </Grid>
            <Grid item className={styles.paragraph} style={{ marginTop: '.5rem' }}>
                <Typography variant="subtitle2">
                    JavaScript, TypeScript, React, PHP, Laravel, Next.js, Node.js, GraphQL, Apollo, Python, C#, Java, SQL, HTML, CSS, Visual Studio, Xamarin, Tableau, MS SQL, MongoDB, Postgres, Azure, AWS, Lucidchart, Figma, Agile, Scrum, Design Think
                </Typography>
            </Grid>
        </Grid>
    )
}

const About: React.FC = () => {
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

export default About;