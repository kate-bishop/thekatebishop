import { useState, useEffect } from 'react';
import styles from './bio.module.scss';
import { transitionTimeout } from '../utils/constants';
import { aboutMe } from '../utils/strings';
import { CSSTransition } from 'react-transition-group';

const Bio: React.FC = () => {
    const [showContent, setShowContent] = useState(false);

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
                    <span className={styles.label}>the long version</span>
                    <h1 className={styles.heading}>Hi, I&apos;m Kate! 👋</h1>
                    <div className={styles.paragraphs}>
                        <p className={styles.paragraph}>{aboutMe.bio.paragraph1}</p>
                        <p className={styles.paragraph}>{aboutMe.bio.paragraph2}</p>
                        <p className={styles.paragraph}>{aboutMe.bio.paragraph3}</p>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default Bio;
