import Wrapper from '../components/wrapper';
import Portfolio from '../components/portfolio';
import Header from '../components/header';
import { getSortedPortfolioData } from '../utils/functions';
import { Portfolio as PortfolioType } from '../utils/constants';
import styles from '../styles/home.module.scss';

export async function getStaticProps() {
  const allPortfolioData = getSortedPortfolioData()
  return {
    props: {
      allPortfolioData
    }
  }
}

export default function Home(props: {allPortfolioData: PortfolioType[]}) {
  return (
    <Wrapper>
      <>
        <section>
          <Header />
        </section>
        <section className={styles.portfolio}>
          <Portfolio allPortfolioData={props.allPortfolioData} />
        </section>
      </>
    </Wrapper>
  )
}
