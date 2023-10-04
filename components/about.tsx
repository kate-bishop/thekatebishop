import styles from './about.module.scss';
import Typography from '@mui/material/Typography';
import { homeTheme } from '../styles/mui.themes'
import { ThemeProvider } from '@mui/material/styles';
import { aboutMe, contact } from '../utils/strings';
import Image from 'next/image'
import Link from 'next/link';

const MeetKate: React.FC = () => {
    const ctaLink = <a href={contact.linkedIn} target="_blank" rel="noreferrer">
        Let&apos;s connect!
    </a>

    return (
        <Typography variant="subtitle2" display="inline" className={styles.paragraph}>
            {aboutMe.aboutKateA}
            <span className={styles.highlight}>
                &nbsp;{aboutMe.aboutKateB}
            </span>
            {aboutMe.aboutKateC} {aboutMe.callToAction} &#8212; {ctaLink}
        </Typography>
    )
}

interface ActionCardProps {
    label: string;
    imageName: string;
    link: string;
}
const ActionCard: React.FC<ActionCardProps> = ({ label, imageName, link }) => {
    return <Link href={link}><div className={styles.actionCard}>
        <Image
            priority
            src={`/images/${imageName}.svg`}
            height={100}
            width={100}
            alt={imageName}
        />
        <Typography variant="body1">{label}</Typography>
    </div></Link>
}

const About: React.FC = () => {
    return (
        <div className={styles.about}>
            <ThemeProvider theme={homeTheme}>
                <div className={styles.content}>
                    <Typography variant="h2">{aboutMe.tagline2}</Typography>
                    <MeetKate />
                    <div className={styles.actionCardContainer}>
                        <ActionCard link="/experience" imageName="computer" label="Explore Work Experience" />
                    </div>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default About;
