import React, { useState } from 'react';
import Wrapper from '../components/wrapper';
import { a11yProps } from '../utils/utils';
import Head from 'next/head';
import { Tabs, Tab, Typography } from '@mui/material';
import TabPanel from '../components/tabPanel';
import { experience } from '../utils/strings';

// TODO more styling, move inline styles to css file, breakpoints
const Experience: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <>
            <Head>
                <title>Experience</title>
                <meta property="og:title" content="Experience" key="title" />
            </Head>
            <Wrapper>
                <div style={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
                    <div >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={activeTab}
                            onChange={handleChange}
                            aria-label="Experience tabs"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            {experience.map((exp, index) => {
                                return <Tab label={exp.companyName} {...a11yProps(index)} />;
                            })}
                        </Tabs>
                    </div>
                    <div style={{ width: '85%', height: '100%', overflow: 'auto' }}>
                        {experience.map((exp, index) => {
                            return <TabPanel value={activeTab} index={index}>
                                <Typography variant="h1">{exp.jobTitle}</Typography>
                                <Typography variant="h2">{exp.dateSpan}</Typography>
                                <Typography variant="h3">{exp.location}</Typography>
                                <Typography variant="body2">{exp.companyDescription}</Typography>
                                <Typography variant="body1">{exp.description}</Typography>
                                {exp.keyProjects[0].projectName && <Typography variant='h3'>Key Projects</Typography>}
                                {exp.keyProjects.map((proj, index) => {
                                    const projectHeader = proj.projectName &&
                                        <>
                                            <Typography variant='h3'>{proj.projectName}</Typography>
                                            <Typography variant='h2'>{proj.projectRole}</Typography>
                                        </>
                                    return <>{projectHeader}{proj.bulletPoints.map((bul, index) => {
                                        return <ul>
                                            <li><Typography>{bul}</Typography></li>
                                        </ul>
                                    })}</>;
                                })}
                            </TabPanel>;
                        })}
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Experience;