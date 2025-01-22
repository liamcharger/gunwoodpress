import styles from "./styles/App.module.css";
import logo from "./assets/logoHorizontal.png"
// import logoStacked from "./assets/logoStacked.png"

function App() {
  return (
    <div className={styles.app}>
    <header>
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
    Gunwood press is a majorly big publishing house, and needs YOUR MONEY!!! Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat etiam suspendisse nascetur imperdiet himenaeos consequat. Efficitur leo habitant ipsum nam ultricies facilisi. Vestibulum convallis pretium vehicula donec fermentum dis.
    </div>
    </div>
    <footer>© 2025 Gunwood Press — Made with ❤️ by Liam Willey</footer>
    </div>
  );
}

export default App;
