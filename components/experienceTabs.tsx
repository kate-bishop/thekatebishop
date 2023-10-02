import React, { useState, useEffect } from 'react';
import { a11yProps } from '../utils/utils';
import { Tabs, Tab, Typography } from '@mui/material';
import TabPanel from './tabPanel';
import { CSSTransition } from 'react-transition-group';
import { palette, transitionTimeout } from '../utils/constants';
import { experience } from '../utils/strings';
import { Experience } from '../utils/types';

// TODO move inline styles to css file, support for narrow screens

interface ExperienceTabBarProps {
    activeTab: number,
    handleChange: (event: React.SyntheticEvent, newValue: number) => void,
}
const ExperienceTabBar: React.FC<ExperienceTabBarProps> = ({
    activeTab,
    handleChange,
}) => {
    return <Tabs
        orientation="vertical"
        variant="scrollable"
        value={activeTab}
        onChange={handleChange}
        aria-label="Experience tabs"
        sx={{ borderRight: 1, borderColor: 'divider' }}
        indicatorColor="secondary"
    >
        {experience.map((exp, index) => {
            return <Tab label={exp.companyName} key={index} {...a11yProps(index)} />;
        })}
    </Tabs>
}

interface ExperienceTabPanelProps {
    activeTab: number,
    experience: Experience,
    index: number,
}
const ExperienceTabPanel: React.FC<ExperienceTabPanelProps> = ({
    activeTab,
    experience,
    index,
}) => {
    return <TabPanel value={activeTab} index={index} key={index}>
        <div style={{ height: '100%', overflow: 'auto' }}>
            <div id="experience-title">
                <Typography variant="h1">{experience.jobTitle}</Typography>
                <Typography variant="subtitle1">{experience.location} | {experience.dateSpan}</Typography>
            </div>
            <div id="experience-company-details" style={{ marginTop: '1rem' }}>
                <Typography variant="subtitle2">{experience.companyDescription}</Typography>
            </div>
            <div id="experience-position-details" style={{ marginTop: '1rem' }}>
                <Typography variant="body1">{experience.description}</Typography>
                {experience.keyProjects[0].projectName && <Typography variant='subtitle2' style={{ marginTop: '1rem' }}>Key Projects</Typography>}
                {experience.keyProjects.map((project, pIndex) => {
                    const projectHeader = project.projectName && <Typography variant='subtitle1'>{project.projectRole} | {project.projectName}</Typography>
                    return <div key={`key-project-details-${index}-${pIndex}`}>
                        {projectHeader}
                        <ul>{project.bulletPoints.map((bullet, bIndex) => {
                            return <li key={`key-project-details-${index}-${pIndex}-${bIndex}`}>
                                <Typography variant='body1'>{bullet}</Typography>
                            </li>
                        })}
                        </ul></div>;
                })}
            </div>
        </div>
    </TabPanel>;
}

const ExperienceTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(true)
    }, [])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return <CSSTransition
        in={showContent}
        timeout={transitionTimeout}
        classNames="content-left"
        unmountOnExit
        onEnter={() => setShowContent(true)}>
        <div style={{ height: '100%', overflow: 'hidden', marginTop: '10vh' }}>
            <div style={{ position: 'fixed', height: '100%', marginTop: '1.5rem' }}>
                <ExperienceTabBar activeTab={activeTab} handleChange={handleChange} />
            </div>
            <div style={{ marginLeft: '15%', height: '100%', overflow: 'auto' }}>
                {experience.map((exp, index) => {
                    return <ExperienceTabPanel activeTab={activeTab} experience={exp} index={index} />
                })}
            </div>
        </div>
    </CSSTransition>
}

export default ExperienceTabs;
