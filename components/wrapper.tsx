import { useState, useEffect, useCallback, createContext, PropsWithChildren } from "react";
import styles from "./wrapper.module.scss";
import { breakpoint } from "../utils/constants";
import { aboutMe, contact, skills } from '../utils/strings';
import NavigationBar from "./navigationBar";
import Head from "next/head";

export const SmallScreenContext = createContext(true);

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: aboutMe.title,
  jobTitle: aboutMe.position,
  email: contact.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: contact.location,
  },
  sameAs: [contact.linkedIn, contact.github],
  knowsAbout: [
    ...skills.languages.split(', '),
    ...skills.technologies.split(', '),
    ...skills.aiTools.split(', '),
  ],
};

const Wrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [useSmallScreen, setUseSmallScreen] = useState(false);

  const updateScreenSizeLayout = useCallback((e: any) => {
    if (e.matches) {
      setUseSmallScreen(true);
    } else {
      setUseSmallScreen(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint.smedium}px)`);
    media.addEventListener("change", (e) => updateScreenSizeLayout(e));
    if (media.matches) {
      setUseSmallScreen(true);
    }
    return () =>
      media.removeEventListener("change", (e) => updateScreenSizeLayout(e));
  }, [updateScreenSizeLayout]);

  return (
    <SmallScreenContext.Provider value={useSmallScreen}>
      <Head>
        <title>{aboutMe.title}</title>
        <meta name="description" content={`${aboutMe.title}: ${aboutMe.position}`} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </Head>
      <NavigationBar />
      <main className={styles.main}>{children}</main>
    </SmallScreenContext.Provider>
  );
}

export default Wrapper;