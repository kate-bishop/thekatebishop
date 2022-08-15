import Link from 'next/link';
import styles from './portfolio.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Portfolio as PortfolioType } from '../utils/constants';
import { portfolioTheme } from '../styles/MuiThemes'
import { ThemeProvider } from '@mui/material/styles';

export default function Portfolio(props: { allPortfolioData: PortfolioType[] }) {
    return (
        <ThemeProvider theme={portfolioTheme}>
            <div className={styles.content}>
                <Grid container direction="row">
                    <Typography variant="h2">Portfolio</Typography>
                    {props.allPortfolioData &&
                        <ul className={utilStyles.list}>
                            <section>
                                {props.allPortfolioData.map((portfolio: { id: string, title: string, date: any, data: any }) => (
                                    <Link href={`/portfolio/${portfolio.id}`}>
                                        <li className={utilStyles.listItem} key={portfolio.id}>
                                            <a>
                                                <Typography variant="h5">
                                                    {portfolio.title}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    {portfolio.problem}
                                                </Typography>
                                                <Typography variant="subtitle1">
                                                    {portfolio.prompt}
                                                </Typography>
                                            </a>
                                        </li>
                                    </Link>
                                ))}
                            </section>
                        </ul>
                    }
                </Grid>
            </div>
        </ThemeProvider>
    )
}
