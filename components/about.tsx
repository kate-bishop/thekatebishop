import styles from './about.module.scss';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { homeTheme } from '../styles/mui.themes'
import { ThemeProvider } from '@mui/material/styles';
import { aboutMe, contact } from '../utils/strings';

const MeetKate: React.FC = () => {
    return (
        <Typography variant="subtitle1" display="inline" className={styles.paragraph}>
            {aboutMe.aboutKateA}
            <span className={styles.highlight}>
                &nbsp;{aboutMe.aboutKateB}
            </span>
            {aboutMe.aboutKateC}
        </Typography>
    )
}

const CallToAction: React.FC = () => {
    return (
        <div className={styles.paragraph}>
            <Typography variant="subtitle1">{aboutMe.callToAction}</Typography>
            <Button href={contact.linkedIn} target="_blank" rel="noreferrer">{contact.linkedInButton}</Button>
        </div>
    )
}

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <ThemeProvider theme={homeTheme}>
                <div className={styles.content}>
                    <Typography variant="h2">{aboutMe.tagline2}</Typography>
                    <MeetKate />
                    <CallToAction />
                </div>
            </ThemeProvider>
        </div>
    )
}

export default About;