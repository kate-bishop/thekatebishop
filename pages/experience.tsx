import React, { useState } from 'react';
import Wrapper from '../components/wrapper';
import { a11yProps } from '../utils/utils';
import Head from 'next/head';
import { Tabs, Tab, Typography, ThemeProvider } from '@mui/material';
import TabPanel from '../components/tabPanel';
import { experience } from '../utils/strings';
import { mainTheme } from '../styles/mui.themes';

// TODO more styling, move inline styles to css file, breakpoints
const Experience: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setActiveTab(newValue);
    };

    return (
        <ThemeProvider theme={mainTheme}>
            <Head>
                <title>Experience</title>
                <meta property="og:title" content="Experience" key="title" />
            </Head>
            <Wrapper>
                <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                    <div style={{ height: '100%', alignItems: 'center' }}>
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={activeTab}
                            onChange={handleChange}
                            aria-label="Experience tabs"
                            sx={{ borderRight: 1, borderColor: 'divider' }}
                        >
                            {experience.map((exp, index) => {
                                return <Tab label={exp.companyName} key={index} {...a11yProps(index)} />;
                            })}
                        </Tabs>
                    </div>
                    <div style={{ width: '85%', height: '90vh', overflow: 'auto' }}>
                        {experience.map((exp, index) => {
                            return <TabPanel value={activeTab} index={index} key={index}>
                                <Typography variant="h1">{exp.jobTitle}</Typography>
                                <Typography variant="h2">{exp.dateSpan}</Typography>
                                <Typography variant="h2">{exp.location}</Typography>
                                <Typography variant="subtitle1">{exp.companyDescription}</Typography>
                                <Typography variant="subtitle1">{exp.description}</Typography>
                                {exp.keyProjects[0].projectName && <Typography variant='h3'>Key Projects</Typography>}
                                {exp.keyProjects.map((proj, index) => {
                                    const projectHeader = proj.projectName &&
                                        <>
                                            <Typography variant='subtitle1'>{proj.projectName}</Typography>
                                            <Typography variant='subtitle1'>{proj.projectRole}</Typography>
                                        </>
                                    return <ul>
                                        {projectHeader}{proj.bulletPoints.map((bul, index) => {
                                            return <li key={index}>
                                                <Typography>{bul}</Typography>
                                            </li>
                                        })}
                                    </ul>;
                                })}
                            </TabPanel>;
                        })}
                    </div>
                </div>
            </Wrapper>
        </ThemeProvider>
    )
}

export default Experience;
