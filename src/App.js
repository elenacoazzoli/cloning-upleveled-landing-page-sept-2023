import styles from './App.module.scss';
import { ReactComponent as Logo } from './images/PolymerLogo.svg';
import { ReactComponent as FileBase } from './images/clients/filebase.svg';

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
          <div className={styles.container}>
            {/* Adding second section content  */}
            <div className={styles.secondSectionContentContainer}>
              <p>Helping to grow the next generation of companies</p>
              <div className={styles.customersContainer}>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
                <div className={styles.companyLogoContainer}>
                  <FileBase />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Example of absolute positioning of the quote */}
        <div className={styles.container}>
          <div className={styles.quoteContainerRelative}>
            <div className={styles.quoteAbsolute}>
              <p>
                Beautifully simple. Incredibly easy to use but can be customized
                to your hiring workflow and needs.
              </p>
            </div>
          </div>
        </div>
        {/* Example of grid layout and svg directly used in code.*/}
        <section className={styles.thirdSection}>
          <div className={styles.container}>
            <div>
              <h2>
                Everything you need <br />
                to grow your team
              </h2>
            </div>
            <div className={styles.gridContainer}>
              <div className={styles.missionItem}>
                <div className={styles.itemLogoContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-178aoyv"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <h3>Instant job board</h3>
                <p>
                  You'll have a branded job board as a centralized place to
                  display all the open positions at your organization.
                </p>
              </div>

              <div className={styles.missionItem}>
                <div className={styles.itemLogoContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-178aoyv"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <h3>Instant job board</h3>
                <p>
                  You'll have a branded job board as a centralized place to
                  display all the open positions at your organization.
                </p>
              </div>
              <div className={styles.missionItem}>
                <div className={styles.itemLogoContainer}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-178aoyv"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <line x1="3" y1="9" x2="21" y2="9" />
                    <line x1="9" y1="21" x2="9" y2="9" />
                  </svg>
                </div>
                <h3>Instant job board</h3>
                <p>
                  You'll have a branded job board as a centralized place to
                  display all the open positions at your organization.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>Footer</footer>
    </>
  );
}
