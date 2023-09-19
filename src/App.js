import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/PolymerLogo.svg';

export default function App() {
  return (
    <>
      <main>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <header>
              <nav>
                <a href="/#" className={styles.logoLink}>
                  <Logo />
                  <span>Polymer</span>
                </a>
                <ul>
                  <li>
                    <a href="/#">Features</a>
                  </li>
                  <li>
                    <a href="/#">Pricing</a>
                  </li>
                  <li>
                    <a href="/#">Blog</a>
                  </li>
                  <li>
                    <a href="/#">Changelog</a>
                  </li>
                </ul>
                <div className={styles.linksContainer}>
                  <a href="/#" className={styles.baseButton}>
                    Log in
                  </a>
                  <a
                    href="/#"
                    className={`${styles.baseButton} ${styles.buttonBlack}`}
                  >
                    Sign up
                  </a>
                </div>
              </nav>
            </header>
            <div className={styles.heroContent}>
              <span>Introducing Polymer</span>
              <h1>Hiring made simple</h1>
              <p>
                Polymer gives you a beautiful site to display your job openings
                and a powerful dashboard to manage applicants.
              </p>
              <div className={styles.linksContainer}>
                <a
                  href="/#"
                  className={`${styles.baseButton} ${styles.buttonBlack}`}
                >
                  Sign up for free
                </a>
                <a href="/#" className={styles.baseButton}>
                  Contact us
                </a>
              </div>
            </div>
            <div className={styles.heroImageContainer}>
              <img
                src="/billboard.png"
                alt="hero section example of the product"
              />
            </div>
          </div>
        </section>
        <section className={styles.secondSection}>
          <div className={styles.container}>Section 2</div>
        </section>
        <section className={styles.thirdSection}>Section 3</section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
