import React from 'react';
import Wrapper from '../components/wrapper';
import Head from 'next/head';
import SpriteGame from '../components/spriteGame';


const Game: React.FC = () => {
    return (
        <>
            <Head>
                <title>Game</title>
                <meta property="og:title" content="Game" key="title" />
            </Head>
            <Wrapper>
                <SpriteGame />
            </Wrapper>
        </>
    )
}

export default Game;
