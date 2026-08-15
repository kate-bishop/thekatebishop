import styles from './about.module.scss';
import utils from '../styles/utils.module.scss';
import { aboutMe, contact } from '../utils/strings';
import Link from 'next/link';
import Photo from './photo';

const skillTags = [
    { label: 'React', emoji: '⚛️', color: utils.pillYellow },
    { label: 'PHP', emoji: '🐘', color: utils.pillMint },
    { label: 'TypeScript', emoji: '🔷', color: utils.pillPink },
    { label: 'Node.js', emoji: '🌿', color: utils.pillBlue },
    { label: 'Claude', emoji: '👾', color: utils.pillYellow },
    { label: 'Claude Code', emoji: '✨', color: utils.pillMint },
    { label: 'Cursor', emoji: '🎯', color: utils.pillPink },
    { label: 'GitHub Copilot', emoji: '🧑‍✈️', color: utils.pillBlue },
    { label: 'ChatGPT', emoji: '💬', color: utils.pillYellow },
];

const About: React.FC = () => {
    const ctaLink = (
        <a href={contact.linkedIn} target="_blank" rel="noreferrer" className={styles.handwritten}>
            &#8212; Let&apos;s connect!
        </a>
    );

    return (
        <div className={styles.about}>
            <div className={styles.content}>
                <span className={styles.label}>about me</span>

                <div className={styles.photosRow}>
                    <div className={`${styles.photoCard} ${utils.tiltLeft}`}>
                        <span className={`${utils.tapeStrip} ${styles.tapeLeft}`} />
                        <span className={`${utils.tapeStrip} ${styles.tapeRight}`} />
                        <Photo alt="Kate" label="photo" src="/images/kate-1.jpg" width={140} height={180} />
                        <span className={styles.caption}>me!</span>
                    </div>
                    <p className={styles.paragraph}>
                        {aboutMe.aboutKateA}
                        <span className={styles.highlight}>&nbsp;{aboutMe.aboutKateB}</span>
                        {aboutMe.aboutKateC} {ctaLink}
                    </p>
                </div>

                <div className={styles.ctasRow}>
                    <Link href="/about" className={`${utils.pill} ${styles.viewWorkPill}`}>
                        Get to know me →
                    </Link>
                    <span className={utils.dot} />
                    <Link href="/experience" className={`${utils.pill} ${styles.viewWorkPill}`}>
                        Explore work experience →
                    </Link>
                </div>

                <div className={styles.skillsGrid}>
                    {skillTags.map((skill) => (
                        <span key={skill.label} className={`${utils.pill} ${skill.color}`}>
                            {skill.label} {skill.emoji}
                        </span>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default About;
