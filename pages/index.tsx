import Wrapper from '../components/wrapper';
import Header from '../components/header';
import About from '../components/about';
import styles from '../styles/pages.module.scss';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <section>
        <Header />
      </section>
      <section id="about" className={styles.about}>
        <About />
      </section>
    </Wrapper>
  )
}

export default Home;