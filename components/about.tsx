import styles from './about.module.scss';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { aboutTheme } from '../styles/mui.themes'
import { ThemeProvider } from '@mui/material/styles';
import { linkedin } from '../utils/strings';

const MeetKate: React.FC = () => {
    return (
        <Typography variant="subtitle1" display="inline" className={styles.paragraph}>
            Kate is a UX-obsessed Front-End Engineer with over 5 years of experience
            <span className={styles.highlight}>
                &nbsp;creating delightful user experiences and translating design into resilient interfaces
            </span>. She has experience in several industries, including ecommerce, insurance, education, finance, and healthcare.
        </Typography>
    )
}

const CallToAction: React.FC = () => {
    return (
        <div className={styles.paragraph}>
            <Typography variant="subtitle1">Explore Kate&apos;s Skills & Experience on LinkedIn.</Typography>
            <Button href={linkedin} target="_blank" rel="noreferrer" variant="contained" className={styles.actionbutton}>Let&apos;s Connect!</Button>
        </div>
    )
}

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <ThemeProvider theme={aboutTheme}>
                <div className={styles.content}>
                    <Typography variant="h1">It&apos;s nice to meet you!</Typography>
                    <MeetKate />
                    <CallToAction />
                </div>
            </ThemeProvider>
        </div>
    )
}

export default About;