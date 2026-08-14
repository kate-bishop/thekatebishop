import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from './navigationBar.module.scss';
import { SmallScreenContext } from './wrapper';
import { pages, aboutMe, contact } from '../utils/strings';

export const navItems = [{ name: 'Home', value: '/' }, ...pages];

const NavigationBar: React.FC = () => {
    const useSmallScreen = useContext(SmallScreenContext);
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const router = useRouter();

    const closeDrawer = () => setDrawerIsOpen(false);

    const links = (
        <>
            {pages.map((page) => {
                const isActive = router.pathname === page.value;
                return (
                    <Link
                        key={page.name}
                        href={page.value}
                        className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                        onClick={closeDrawer}
                    >
                        {page.name}
                    </Link>
                );
            })}
        </>
    );

    return (
        <nav className={styles.navbar} aria-label={aboutMe.title}>
            <Link href="/" className={styles.logo} aria-label="Home">
                KB
            </Link>

            {useSmallScreen ? (
                <>
                    <button
                        className={styles.menuButton}
                        onClick={() => setDrawerIsOpen(!drawerIsOpen)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={drawerIsOpen}
                    >
                        {drawerIsOpen ? '✕' : '☰'}
                    </button>
                    {drawerIsOpen && (
                        <div className={styles.drawer}>
                            {links}
                            <a
                                className={`${styles.pillButton} ${styles.contactPill}`}
                                href={`mailto:${contact.email}`}
                                onClick={closeDrawer}
                            >
                                💌 Contact
                            </a>
                        </div>
                    )}
                </>
            ) : (
                <>
                    <div className={styles.links}>{links}</div>
                    <div className={styles.social}>
                        <a href={contact.linkedIn} target="_blank" rel="noreferrer" title="Kate's LinkedIn" className={styles.socialIcon}>
                            <Image priority src="/images/linkedinLogo.svg" height={18} width={18} alt="LinkedIn" />
                        </a>
                        <a href={contact.github} target="_blank" rel="noreferrer" title="Kate's GitHub" className={styles.socialIcon}>
                            <Image priority src="/images/githubLogo.svg" height={18} width={18} alt="GitHub" />
                        </a>
                    </div>
                    <a className={`${styles.pillButton} ${styles.contactPill}`} href={`mailto:${contact.email}`}>
                        💌 Contact
                    </a>
                </>
            )}
        </nav>
    )
}

export default NavigationBar;
