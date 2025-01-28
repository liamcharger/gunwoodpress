import styles from "./styles/App.module.css";
import logo from "./assets/logoHorizontal.png"
import logoStacked from "./assets/logoStacked.png"

function App() {
  return (
    <div className={styles.app}>
    <header>
    {/* We don't want to show a logo when it's already in the body */}
    {/* <img src={logoStacked} alt="Logo"></img> */}
    <div className={styles.spacer}></div>
    {/* A href causes a page refresh; we may want to use a button */}
    <a href="/books" className={styles.btnSecondary}>Our Books</a>
    <a href="mailto:joe@gunwoodpress.com" className={styles.btnPrimary}>Contact</a>
    </header>
    <div className={styles.hero}>
    <img src={logo} alt="Logo"></img>
    {/* <h1>Gunwood Press</h1> */}
    <div className={styles.text}>
    Publisher description should go here...Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat etiam suspendisse nascetur imperdiet himenaeos consequat. Efficitur leo habitant ipsum nam ultricies facilisi. Vestibulum convallis pretium vehicula donec fermentum dis.
    </div>
    </div>
    <footer>© 2025 Gunwood Press — Made with ❤️ by Liam Willey</footer>
    </div>
  );
}

export default App;
