import Link from 'next/link';
import styles from './portfolio.module.scss';
import utils from '../styles/utils.module.scss';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Portfolio as PortfolioType } from '../utils/constants';
import { portfolioTheme } from '../styles/mui.themes'
import { ThemeProvider } from '@mui/material/styles';

export default function Portfolio(props: { allPortfolioData: PortfolioType[] }) {
    return (
        <ThemeProvider theme={portfolioTheme}>
            <div className={styles.content}>
                <Grid container direction="column">
                    <Grid item>
                        <Typography variant="h1">PORTFOLIO</Typography>
                    </Grid>
                    <Grid item>
                        <Grid container justifyContent="center">
                            {props.allPortfolioData &&
                                <ul className={styles.list}>
                                    {props.allPortfolioData.map((portfolio: PortfolioType) => (
                                        <>
                                            {portfolio.title &&
                                                <>
                                                    <Link href={`/portfolio/${portfolio.id}`}>
                                                        <li className={styles.listItem} key={portfolio.id}>
                                                            <a>
                                                                <Typography variant="h2" align="right" style={{ marginBottom: '.5rem' }}>
                                                                    {portfolio.title.toUpperCase()}
                                                                </Typography>
                                                                <Typography variant="h3" align="right" style={{ marginBottom: '.5rem' }}>
                                                                    {portfolio.role.toUpperCase()}
                                                                </Typography>
                                                                <Grid item className={utils.yellowspan} />
                                                                <Typography variant="subtitle1" style={{ marginBottom: '.75rem' }}>
                                                                    {portfolio.problem}
                                                                </Typography>
                                                                <Typography variant="subtitle2">
                                                                    <span className={styles.prompt}>{portfolio.prompt}</span>
                                                                </Typography>
                                                            </a>
                                                        </li>
                                                    </Link>
                                                    <Grid item className={utils.whitespan} />
                                                </>
                                            }
                                        </>
                                    ))}
                                </ul>
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </ThemeProvider>
    )
}
