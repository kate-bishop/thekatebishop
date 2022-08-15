import type { NextPage } from 'next';
import Link from 'next/link';
import Wrapper from './wrapper';
import styles from './portfolio.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Typography from '@mui/material/Typography';
import { getSortedPortfolioData } from '../utils/functions';

export async function getStaticProps() {
    const allPortfolioData = getSortedPortfolioData()
    return {
        props: {
            allPortfolioData
        }
    }
}

type Portfolio = {
    id: string,
    title: string,
    date: any,
    data: any
}

export default function Home(props: { allPortfolioData: Portfolio[] }) {
    return (
        <Wrapper>
            <div className={styles.content}>
                <Typography variant="h2">Portfolio</Typography>
                {props.allPortfolioData &&
                    <ul className={utilStyles.list}>
                        {props.allPortfolioData.map((portfolio: { id: string, title: string, date: any, data: any }) => (
                            <li className={utilStyles.listItem} key={portfolio.id}>
                                <Link href={`/portfolio/${portfolio.id}`}>
                                    <a>
                                        <Typography variant="body1">
                                            {portfolio.title}
                                        </Typography>
                                    </a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                }
            </div>
        </Wrapper>
    )
}
