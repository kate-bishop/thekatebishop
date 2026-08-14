import styles from './about.module.scss';
import utils from '../styles/utils.module.scss';
import { aboutMe, contact } from '../utils/strings';
import Link from 'next/link';
import PlaceholderPhoto from './placeholderPhoto';

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
                <span className={`${utils.pill} ${styles.niceToMeetYouTab}`}>{aboutMe.tagline2}</span>

                <div className={styles.photosRow}>
                    <div className={`${styles.photoCard} ${utils.tiltLeft}`}>
                        <span className={`${utils.tapeStrip} ${styles.tapeLeft}`} />
                        <span className={`${utils.tapeStrip} ${styles.tapeRight}`} />
                        <PlaceholderPhoto alt="Kate" label="photo" src="/images/kate-1.jpg" width={140} height={180} />
                        <span className={styles.caption}>me!</span>
                    </div>
                    <p className={styles.paragraph}>
                        {aboutMe.aboutKateA}
                        <span className={styles.highlight}>&nbsp;{aboutMe.aboutKateB}</span>
                        {aboutMe.aboutKateC} {ctaLink}
                    </p>

                    {/* <div className={`${styles.photoCard} ${utils.tiltRight}`}>
                        <span className={`${utils.tapeStrip} ${styles.tapeLeft}`} />
                        <span className={`${utils.tapeStrip} ${styles.tapeRight}`} />
                        // TODO: swap in a real photo, e.g. src="/images/kate-workspace.jpg"
                        <PlaceholderPhoto alt="Kate's workspace" label="photo" width={140} height={180} />
                        <span className={styles.caption}>my workspace</span>
                    </div>
                     */}
                </div>

                <div className={styles.skillsGrid}>
                    {skillTags.map((skill) => (
                        <span key={skill.label} className={`${utils.pill} ${skill.color}`}>
                            {skill.label} {skill.emoji}
                        </span>
                    ))}
                </div>

                <Link href="/experience" className={`${utils.pill} ${styles.viewWorkPill}`}>
                    Explore work experience →
                </Link>
            </div>
        </div>
    )
}

export default About;
