import type { NextPage } from 'next';
import Link from 'next/link';
import Wrapper from '../components/wrapper';
import Header from '../components/header';
import styles from '../styles/home.module.scss';
import utilStyles from '../styles/utils.module.scss';
import Typography from '@mui/material/Typography'
import { getSortedPortfolioData } from '../utils/functions'

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

export default function Home(props: {allPortfolioData: Portfolio[]}) {
  return (
    <Wrapper>
      <>
        <section>
          <Header />
        </section>
        <section className={styles.portfolio}>
          <Typography variant="h2">Portfolio</Typography>
          {props.allPortfolioData &&
            <ul className={utilStyles.list}>
              {props.allPortfolioData.map((portfolio: { id: string, title: string, date: any, data: any }) => (
                <li className={utilStyles.listItem} key={portfolio.id}>
                  <Link href={`/portfolio/${portfolio.id}`}>
                    <a>{portfolio.title}</a>
                  </Link>
                  <br />
                </li>
              ))}
            </ul>
          }
        </section>
      </>
    </Wrapper>
  )
}
