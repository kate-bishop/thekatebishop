import type { NextPage } from 'next';
import Image from 'next/image';
import Wrapper from '../components/wrapper';
import Header from '../components/header';
import styles from '../styles/home.module.scss';
import ComingSoon from '../components/comingsoon';

const Home: NextPage = () => {
  return (
    <Wrapper>
      <>
        <section>
          <Header />
          {/* <Image
            src="/images/wave.svg"
            className={styles.wave}
            layout="responsive"
            height={10}
            width={100}
            alt="wave border"
          /> */}
        </section>
        {/* <section className={styles.portfolio}>
          <ComingSoon />
        </section> */}
      </>
    </Wrapper>
  )
}

export default Home
