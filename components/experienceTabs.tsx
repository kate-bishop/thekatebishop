import React, { useState, useEffect, useContext, useMemo } from 'react';
import { useScrollspy } from '../utils/utils';
import { CSSTransition } from 'react-transition-group';
import { transitionTimeout } from '../utils/constants';
import { experience } from '../utils/strings';
import { Experience } from '../utils/types';
import { SmallScreenContext } from './wrapper';
import styles from './experienceTabs.module.scss';
import utils from '../styles/utils.module.scss';

interface ExperienceTabBarProps {
    sectionIds: string[],
    activeId: string,
    onTabClick: (index: number) => void,
    useSmallScreen: boolean,
}

const ExperienceTabBar: React.FC<ExperienceTabBarProps> = ({
    sectionIds,
    activeId,
    onTabClick,
    useSmallScreen,
}) => {
    return (
        <div
            className={`${styles.tabs} ${useSmallScreen ? styles.column : ''}`}
            role="tablist"
            aria-label="Experience tabs"
        >
            {experience.map((exp, index) => {
                const isActive = sectionIds[index] === activeId;
                return (
                    <button
                        key={index}
                        role="tab"
                        aria-selected={isActive}
                        className={`${styles.tab} ${isActive ? styles.tabActive : ''}`}
                        onClick={() => onTabClick(index)}
                    >
                        {exp.companyName}
                    </button>
                );
            })}
        </div>
    );
}

const ExperienceItem: React.FC<{ exp: Experience, index: number, id: string }> = ({
    exp,
    index,
    id
}) => {
    return (
        <div
            id={id}
            className={styles.experienceSection}
        >
            <h1 className={styles.jobTitle}>{exp.jobTitle}</h1>
            <div className={styles.metaRow}>
                <span className={`${utils.pill} ${utils.pillMint}`}>{exp.companyName}</span>
                <span className={`${utils.pill} ${utils.pillYellow}`}>{exp.location}</span>
                <span className={`${utils.pill} ${utils.pillBlue}`}>{exp.dateSpan}</span>
            </div>
            <p className={styles.contentSection}>{exp.companyDescription}</p>
            <div id={`experience-details-${index}`} className={styles.contentSection}>
                <p>{exp.description}</p>
                {exp.keyProjects.map((project, pIndex) => {
                    const projectHeader = project.projectName && (
                        <p className={styles.projectTitle}>
                            {project.projectName}
                        </p>
                    );
                    return (
                        <div key={`key-project-details-${index}-${pIndex}`}>
                            {projectHeader}
                            <ul className={styles.projectBullets}>
                                {project.bulletPoints.map((bullet, bIndex) => (
                                    <li key={`key-project-details-${index}-${pIndex}-${bIndex}`}>
                                        {bullet}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const ExperienceTabs: React.FC = () => {
    const useSmallScreen = useContext(SmallScreenContext);
    const [showContent, setShowContent] = useState(false);

    const sectionIds = useMemo(() =>
        experience.map(exp => `exp-${exp.companyName.replace(/\s+/g, '-').toLowerCase()}`),
        []);

    const activeId = useScrollspy(sectionIds, 120);

    const handleTabClick = (index: number) => {
        const element = document.getElementById(sectionIds[index]);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        setShowContent(true);
    }, []);

    return (
        <CSSTransition
            in={showContent}
            timeout={transitionTimeout}
            classNames="content-left"
        >
            <div className={`${styles.tabContainer} ${useSmallScreen ? styles.column : ''}`}>
                <div className={`${styles.tabBar} ${useSmallScreen ? styles.column : ''}`}>
                    <ExperienceTabBar
                        sectionIds={sectionIds}
                        activeId={activeId}
                        onTabClick={handleTabClick}
                        useSmallScreen={useSmallScreen}
                    />
                </div>
                <div className={`${styles.tabPanelScrollable} ${useSmallScreen ? styles.column : ''}`}>
                    {experience.map((exp, index) => (
                        <ExperienceItem
                            key={index}
                            exp={exp}
                            index={index}
                            id={sectionIds[index]}
                        />
                    ))}
                </div>
            </div>
        </CSSTransition>
    );
}

export default ExperienceTabs;
