import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';
import utils from '../styles/utils.module.scss';
import { aboutMe, contact } from '../utils/strings';
import { navItems } from './navigationBar';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <svg
                className={styles.wave}
                viewBox="0 0 800 40"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    d="M0,25 C200,-5 500,45 800,10"
                    fill="none"
                    stroke="rgba(17, 17, 17, .3)"
                    strokeWidth="2"
                />
            </svg>

            <div className={styles.content}>
                <div className={styles.identity}>
                    <span className={styles.name}>{aboutMe.title.toUpperCase()}</span>
                    <span className={styles.role}>
                        <span className={utils.dot} />
                        {aboutMe.position.toUpperCase()}
                    </span>
                </div>

                <div className={styles.linksAndSocial}>
                    <nav className={styles.links} aria-label="Footer">
                        {navItems.map((page) => (
                            <Link key={page.name} href={page.value} className={styles.navLink}>
                                {page.name}
                            </Link>
                        ))}
                    </nav>
                    <div className={styles.social}>
                        <a href={contact.linkedIn} target="_blank" rel="noreferrer" title="Kate's LinkedIn" className={`${styles.socialIcon} ${styles.socialIconYellow}`}>
                            <Image src="/images/linkedinLogo.svg" height={18} width={18} alt="LinkedIn" />
                        </a>
                        <a href={contact.github} target="_blank" rel="noreferrer" title="Kate's GitHub" className={`${styles.socialIcon} ${styles.socialIconBlue}`}>
                            <Image src="/images/githubLogo.svg" height={18} width={18} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
