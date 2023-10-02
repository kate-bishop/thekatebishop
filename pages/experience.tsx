import React from 'react';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import ExperienceTabs from '../components/experienceTabs';


const Experience: React.FC = () => {
    return (
        <>
            <Head>
                <title>Experience</title>
                <meta property="og:title" content="Experience" key="title" />
            </Head>
            <Wrapper>
                <ExperienceTabs />
            </Wrapper>
        </>
    )
}

export default Experience;
