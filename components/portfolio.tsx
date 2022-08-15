import Link from 'next/link';
import styles from './portfolio.module.scss';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Portfolio as PortfolioType } from '../utils/constants';
import { portfolioTheme } from '../styles/MuiThemes'
import { ThemeProvider } from '@mui/material/styles';

export default function Portfolio(props: { allPortfolioData: PortfolioType[] }) {
    return (
        <ThemeProvider theme={portfolioTheme}>
            <div className={styles.content}>
                <Typography variant="h1">PORTFOLIO</Typography>
                {props.allPortfolioData &&
                    <ul className={styles.list}>
                        {props.allPortfolioData.map((portfolio: { id: string, title: string, date: any, data: any }) => (
                            <Link href={`/portfolio/${portfolio.id}`}>
                                <li className={styles.listItem} key={portfolio.id}>
                                    <a>
                                        <Typography variant="h2" align="right" style={{ marginBottom: '.5rem' }}>
                                            {portfolio.title}
                                        </Typography>
                                        <Typography variant="h3" align="right" style={{ marginBottom: '.5rem' }}>
                                            {portfolio.role}
                                        </Typography>
                                        <Grid item className={styles.yellowspan} />
                                        <Typography variant="subtitle1" style={{ marginBottom: '.5rem' }}>
                                            {portfolio.problem}
                                        </Typography>
                                        <Typography variant="subtitle2" style={{ marginBottom: '.5rem' }}>
                                            <span className={styles.prompt}>{portfolio.prompt}</span>
                                        </Typography>
                                    </a>
                                </li>
                            </Link>
                        ))}
                    </ul>
                }
            </div>
        </ThemeProvider>
    )
}
