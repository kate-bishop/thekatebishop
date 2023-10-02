import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
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
import styles from './navigationBar.module.scss';
import { SmallScreenContext } from './wrapper';
import { pages, aboutMe } from '../utils/strings';

function HideOnScroll(props: { children: any }) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const NavigationBar: React.FC = () => {
    const useSmallScreen = useContext(SmallScreenContext);
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

    const smallScreenView = <>
        <IconButton onClick={toggleDrawer(!drawerIsOpen)}>
            <MenuIcon />
        </IconButton>
        <Drawer
            anchor="right"
            open={drawerIsOpen}
            onClose={toggleDrawer(false)}
        >
            <List>
                {pages.map((page) => (
                    <ListItem key={page.name} disablePadding>
                        <ListItemButton
                            onClick={() => onDrawerNavigate(page.value)}
                        >
                            <ListItemText primary={page.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    </>

    return <HideOnScroll>
        <AppBar color="transparent" elevation={0}>
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    className={styles.navbar}
                >
                    <Grid item>
                        {router.pathname !== '/' &&
                            <Link href={`/`}>
                                <Typography>
                                    <a>{aboutMe.title.toUpperCase()}</a>
                                </Typography>
                            </Link>
                        }
                    </Grid>
                    <Grid item>
                        {useSmallScreen ? smallScreenView : (
                            <Grid container direction="row">
                                {pages.map((page) => {
                                    return (
                                        <Link href={page.value} key={page.name}>
                                            <Typography
                                                variant="subtitle1"
                                                style={{ marginRight: "2rem" }}
                                            >
                                                <a>{page.name}</a>
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
    </HideOnScroll >
}

export default NavigationBar;