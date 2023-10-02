import { useState, useEffect, useCallback, createContext, PropsWithChildren } from "react";
import styles from "./wrapper.module.scss";
import { ThemeProvider } from "@mui/material/styles";
import { wrapperTheme } from "../styles/mui.themes";
import { breakpoint } from "../utils/constants";
import { aboutMe } from '../utils/strings';
import NavigationBar from "./navigationBar";
import Head from "next/head";

export const SmallScreenContext = createContext(true);

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
    const media = window.matchMedia(`(max-width: ${breakpoint.small}px)`);
    media.addEventListener("change", (e) => updateScreenSizeLayout(e));
    if (media.matches) {
      setUseSmallScreen(true);
    }
    return () =>
      media.removeEventListener("change", (e) => updateScreenSizeLayout(e));
  }, [updateScreenSizeLayout]);

  return (
    <SmallScreenContext.Provider value={useSmallScreen}>
      <ThemeProvider theme={wrapperTheme}>
        <Head>
          <title>{aboutMe.title}</title>
          <meta name="description" content={`${aboutMe.title}: ${aboutMe.position}`} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavigationBar />
        <main className={styles.main}>{children}</main>
      </ThemeProvider>
    </SmallScreenContext.Provider>
  );
}

export default Wrapper;