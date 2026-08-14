import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import utils from '../styles/utils.module.scss'
import { transitionTimeout } from '../utils/constants';
import { aboutMe, contact } from '../utils/strings';
import { CSSTransition } from 'react-transition-group';
import PlaceholderPhoto from './placeholderPhoto';

export default function Header() {
    const [showContent, setShowContent] = useState(false);
    const firstName = aboutMe.title.split(' ')[0].toUpperCase();

    useEffect(() => {
        setShowContent(true)
    }, [])

    const identityBlock = (
        <>
            <div className={styles.tagRow}>
                <span className={styles.scriptLabel}>my name is</span>
            </div>

            <div className={`${styles.nameBox} ${utils.handDrawnBox}`}>
                <span className={styles.nameText}>{firstName}</span>
            </div>

            <div className={styles.metaRow}>
                <span className={`${utils.pill} ${utils.pillYellow} ${utils.tiltLeft}`}>{aboutMe.position}</span>
                <span className={styles.statusDot}>
                    <span className={styles.dot} />
                </span>
                <span className={`${utils.pill} ${utils.pillMint} ${utils.tiltRight}`}>{contact.location}</span>
            </div>
        </>
    );

    const headlineBlock = (
        <div className={styles.headlineRow}>
            <Image src="/images/arrow-down-left.svg" alt="" width={64} height={92} className={styles.scrollArrow} />
            {/* TODO: swap in a real circular headshot, e.g. src="/images/kate-headshot.jpg" */}
            {/* <PlaceholderPhoto
                alt="Kate"
                label="photo"
                width={90}
                height={90}
                shape="circle"
                className={`${styles.sticker} ${styles.stickerLeft}`}
            /> */}
            <h1 className={styles.headline}>{aboutMe.tagline1} 🌱</h1>
            <Image src="/images/arrow-down-right.svg" alt="" width={64} height={92} className={styles.scrollArrow} />
            {/* TODO: swap in a second real headshot, e.g. src="/images/kate-headshot-2.jpg" */}
            {/* <PlaceholderPhoto
                alt="Kate"
                label="photo"
                width={90}
                height={90}
                shape="circle"
                src="/images/arrow-down-left.svg"
                className={`${styles.sticker} ${styles.stickerRight}`}
            /> */}
        </div>
    );

    return (
        <div className={styles.header}>
            <CSSTransition
                in={showContent}
                timeout={transitionTimeout}
                classNames="content-grow">
                <div className={styles.content}>
                    {identityBlock}
                    {headlineBlock}
                </div>
            </CSSTransition>
        </div>
    )
}
