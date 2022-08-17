import { useState, useEffect, useCallback, createContext } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Slide from "@mui/material/Slide";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "./wrapper.module.scss";
import { ThemeProvider } from "@mui/material/styles";
import { wrapperTheme } from "../styles/mui.themes";
import { title } from "../utils/strings";
import { breakpoint } from "../utils/constants";
import { NavigateBefore } from "@mui/icons-material";

type WrapperProps = {
  children: JSX.Element;
};

function HideOnScroll(props: { children: any }) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const SmallScreenContext = createContext(true);

export default function Wrapper({ children }: WrapperProps) {
  const [useSmallScreen, setUseSmallScreen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const router = useRouter();

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerIsOpen(open);
  };

  const onDrawerNavigate = (url: string) => {
    toggleDrawer(false);
    router.push(url);
  };

  const pages = [
    {
      title: "About",
      url: "/#about",
    },
    {
      title: "Portfolio",
      url: "/#portfolio",
    },
  ];

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
          <title>Kate Bishop</title>
          <meta name="description" content="Kate Bishop: Front-End Engineer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <HideOnScroll>
          <AppBar color="transparent" elevation={0}>
            <Toolbar>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                className={styles.appbar}
              >
                <Grid item>
                  <Link href={`/`}>
                    <Typography variant="h5">
                      <a>{title.toUpperCase()}</a>
                    </Typography>
                  </Link>
                </Grid>
                <Grid item>
                  {useSmallScreen ? (
                    <>
                      <IconButton onClick={toggleDrawer(!drawerIsOpen)}>
                        <MenuIcon />
                      </IconButton>
                      <Drawer
                        anchor="right"
                        open={drawerIsOpen}
                        onClose={toggleDrawer(false)}
                      >
                        <List>
                          <ListItem key='home' disablePadding>
                            <ListItemButton
                              onClick={() => onDrawerNavigate('/')}
                            >
                              <ListItemText primary='Home' />
                            </ListItemButton>
                          </ListItem>
                          {pages.map((page) => (
                            <ListItem key={page.title} disablePadding>
                              <ListItemButton
                                onClick={() => onDrawerNavigate(page.url)}
                              >
                                <ListItemText primary={page.title} />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </List>
                      </Drawer>
                    </>
                  ) : (
                    <Grid container direction="row">
                      {pages.map((page) => {
                        return (
                          <Link href={page.url} key={page.title}>
                            <Typography
                              variant="h6"
                              style={{ marginRight: "3rem" }}
                            >
                              <a>{page.title}</a>
                            </Typography>
                          </Link>
                        );
                      })}
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <main className={styles.main}>{children}</main>
      </ThemeProvider>
    </SmallScreenContext.Provider>
  );
}
