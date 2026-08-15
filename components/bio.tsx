import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './bio.module.scss';
import utils from '../styles/utils.module.scss';
import { transitionTimeout } from '../utils/constants';
import { aboutMe } from '../utils/strings';
import { CSSTransition } from 'react-transition-group';
import Photo from './photo';

const Bio: React.FC = () => {
    const [showContent, setShowContent] = useState(false);

    const ctaLink = (
        <Link href="/experience" className={styles.handwritten}>
            &#8212; Explore work experience
        </Link>
    );

    useEffect(() => {
        setShowContent(true)
    }, [])

    return (
        <div className={styles.bio}>
            <CSSTransition
                in={showContent}
                timeout={transitionTimeout}
                classNames="content-grow">
                <div className={styles.content}>
                    <span className={`${styles.label} ${styles.highlight}`}>the long version</span>
                    <div className={styles.row}>
                        <div className={`${styles.frame} ${utils.handDrawnBox}`}>
                            <h1 className={styles.heading}>Hi, I&apos;m Kate! 👋</h1>
                            <div className={styles.paragraphs}>
                                <p className={styles.paragraph}>{aboutMe.bio.paragraph1}</p>
                                <p className={styles.paragraph}>{aboutMe.bio.paragraph2}</p>
                                <p className={styles.paragraph}>{aboutMe.bio.paragraph3} {ctaLink}</p>
                            </div>
                        </div>
                        <div className={`${styles.photoCard} ${utils.tiltRight}`}>
                            <span className={`${utils.tapeStrip} ${styles.tapeLeft}`} />
                            <span className={`${utils.tapeStrip} ${styles.tapeRight}`} />
                            <Photo alt="Kate" label="photo" src="/images/kate-1.jpg" width={180} height={220} />
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Bio;
