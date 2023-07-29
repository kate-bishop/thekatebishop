import Wrapper from '../components/wrapper';
import Header from '../components/header';
import About from '../components/about';
import styles from '../styles/pages.module.scss';
import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kate Bishop</title>
      </Head>
      <Wrapper>
        <section>
          <Header />
        </section>
        <section id="about" className={styles.about}>
          <About />
        </section>
      </Wrapper>
    </>
  )
}

export default Home;