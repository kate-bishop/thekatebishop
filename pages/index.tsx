import Wrapper from '../components/wrapper';
import Header from '../components/header';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import { getSortedPortfolioData } from '../utils/functions';
import { Portfolio as PortfolioType } from '../utils/constants';
import styles from '../styles/pages.module.scss';

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
        <section className={styles.header}>
          <Header />
        </section>
        <section id="about" className={styles.about}>
          <About />
        </section>
        <section id="portfolio" className={styles.portfolio}>
          <Portfolio allPortfolioData={props.allPortfolioData} />
        </section>
      </>
    </Wrapper>
  )
}
