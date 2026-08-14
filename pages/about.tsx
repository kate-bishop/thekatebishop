import React from 'react';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import Bio from '../components/bio';


const About: React.FC = () => {
    return (
        <>
            <Head>
                <title>About</title>
                <meta property="og:title" content="About" key="title" />
            </Head>
            <Wrapper>
                <Bio />
            </Wrapper>
        </>
    )
}

export default About;
