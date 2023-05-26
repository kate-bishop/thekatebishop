import Link from "next/link";
import styles from "./portfolio.module.scss";
import utils from "../styles/utils.module.scss";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Portfolio as PortfolioType } from "../utils/constants";
import { portfolioTheme } from "../styles/mui.themes";
import { ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Portfolio(props: {
    allPortfolioData: PortfolioType[];
}) {
    return (
        <ThemeProvider theme={portfolioTheme}>
            <div className={styles.content}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h1">Portfolio</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center">
                            {props.allPortfolioData && (
                                <ul className={styles.list}>
                                    {props.allPortfolioData.map((portfolio: PortfolioType) => (
                                        <>
                                            {portfolio.title && (
                                                <>
                                                    <li className={styles.listItem} key={portfolio.id}>
                                                        <Typography
                                                            variant="h2"
                                                            align="right"
                                                            style={{ marginBottom: ".5rem" }}
                                                        >
                                                            {portfolio.title}
                                                        </Typography>
                                                        <Typography
                                                            variant="h3"
                                                            align="right"
                                                            style={{ marginBottom: ".5rem" }}
                                                        >
                                                            {portfolio.role}
                                                        </Typography>
                                                        <Grid item className={utils.greenspan} style={{ marginTop: '.5rem', marginBottom: '1rem' }} />
                                                        <Typography
                                                            variant="subtitle1"
                                                            style={{ marginBottom: ".75rem" }}
                                                        >
                                                            {portfolio.problem}
                                                        </Typography>
                                                        <Typography
                                                            variant="subtitle2"
                                                            style={{ marginBottom: ".75rem" }}
                                                        >
                                                            <span className={styles.prompt}>
                                                                {portfolio.prompt}
                                                            </span>
                                                        </Typography>
                                                        <Grid container justifyContent="flex-end">
                                                            <Link href={`/portfolio/${portfolio.id}`}>
                                                                <Button
                                                                    disableElevation
                                                                    variant="contained"
                                                                    color="primary"
                                                                    className={styles.button}
                                                                    style={{ borderRadius: 0 }}
                                                                >
                                                                    View Project
                                                                    <ArrowForwardIcon style={{ marginLeft: '1rem' }} />
                                                                </Button>
                                                            </Link>
                                                        </Grid>
                                                    </li>
                                                    <Grid container justifyContent="flex-end" style={{ opacity: '0.5', marginTop: '3rem', marginBottom: '3rem' }}>
                                                        <Grid item className={utils.greenspan} />
                                                    </Grid>
                                                </>
                                            )}
                                        </>
                                    ))}
                                </ul>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    );
}
