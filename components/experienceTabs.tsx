import React, { useState, useEffect, useContext, useMemo } from 'react';
import { a11yProps, useScrollspy } from '../utils/utils';
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { CSSTransition } from 'react-transition-group';
import { transitionTimeout } from '../utils/constants';
import { experience } from '../utils/strings';
import { Experience } from '../utils/types';
import { SmallScreenContext } from './wrapper';
import styles from './experienceTabs.module.scss';

interface ExperienceTabBarProps {
    activeTab: number,
    onTabClick: (index: number) => void,
    useSmallScreen: boolean,
}

const ExperienceTabBar: React.FC<ExperienceTabBarProps> = ({
    activeTab,
    onTabClick,
    useSmallScreen,
}) => {
    return <Tabs
        orientation={useSmallScreen ? "horizontal" : "vertical"}
        variant="scrollable"
        value={activeTab}
        aria-label="Experience tabs"
        sx={{ borderRight: useSmallScreen ? 0 : 1, borderBottom: useSmallScreen ? 1 : 0, borderColor: 'divider' }}
        indicatorColor="secondary"
    >
        {experience.map((exp, index) => {
            return (
                <Tab
                    label={exp.companyName}
                    key={index}
                    {...a11yProps(index)}
                    onClick={() => onTabClick(index)}
                />
            );
        })}
    </Tabs>
}

const ExperienceItem: React.FC<{ exp: Experience, index: number, id: string }> = ({
    exp,
    index,
    id
}) => {
    return (
        <Box
            id={id}
            className={styles.experienceSection}
            sx={{ mb: 10, pt: 2, scrollMarginTop: '100px' }}
        >
            <Typography variant="h1">{exp.jobTitle}</Typography>
            <Typography variant="subtitle1">{exp.location} | {exp.dateSpan}</Typography>
            <Typography variant="subtitle2" className={styles.contentSection}>{exp.companyDescription}</Typography>
            <div id={`experience-details-${index}`} className={styles.contentSection}>
                <Typography variant="body1">{exp.description}</Typography>
                {exp.keyProjects.map((project, pIndex) => {
                    const projectHeader = project.projectName && (
                        <Typography variant='subtitle1' fontStyle='bold' className={styles.projectTitle}>
                            {project.projectName}
                        </Typography>
                    );
                    return (
                        <div key={`key-project-details-${index}-${pIndex}`}>
                            {projectHeader}
                            <ul className={styles.projectBullets}>
                                {project.bulletPoints.map((bullet, bIndex) => (
                                    <li key={`key-project-details-${index}-${pIndex}-${bIndex}`}>
                                        <Typography variant='body1'>{bullet}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </Box>
    );
}

const ExperienceTabs: React.FC = () => {
    const useSmallScreen = useContext(SmallScreenContext);
    const [showContent, setShowContent] = useState(false);

    // Create unique IDs for each section based on company name
    const sectionIds = useMemo(() =>
        experience.map(exp => `exp-${exp.companyName.replace(/\s+/g, '-').toLowerCase()}`),
        []);

    // Map the active string ID back to a numeric index for Tabs
    const activeId = useScrollspy(sectionIds, 120);
    const activeTab = useMemo(() => {
        const index = sectionIds.indexOf(activeId);
        return index === -1 ? 0 : index;
    }, [activeId, sectionIds]);

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
            unmountOnExit
        >
            <div className={`${styles.tabContainer} ${useSmallScreen ? styles.column : ''}`}>
                <div className={`${styles.tabBar} ${useSmallScreen ? styles.column : ''}`}>
                    <ExperienceTabBar
                        activeTab={activeTab}
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
