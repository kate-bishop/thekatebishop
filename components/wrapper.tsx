import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/pages.module.scss'

type WrapperProps = {
  children: JSX.Element,
};

export default function Wrapper({ children }: WrapperProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true)
  }, [])

  return (
    <div>
      <Head>
        <title>Kate Bishop</title>
        <meta name="description" content="Kate Bishop: Front-End Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}
