import styles from "./styles/App.module.css";
import logo from "./assets/logoHorizontal.png"
import { Link } from "react-router-dom";

function App() {
  return (
    <div className={styles.app}>
    <header style={{ borderBottom: "none" }}>
    <div className={styles.spacer}></div>
    <Link to="/books" className={styles.btnSecondary}>Books</Link>
    <a href="mailto:joe@gunwoodpress.com" className={styles.btnPrimary}>Contact</a>
    </header>
    <div className={styles.hero}>
    <img src={logo} alt="Logo"></img>
    <div className={styles.text}>
    Publisher description should go here...Lorem ipsum odor amet, consectetuer adipiscing elit. Volutpat etiam suspendisse nascetur imperdiet himenaeos consequat. Efficitur leo habitant ipsum nam ultricies facilisi. Vestibulum convallis pretium vehicula donec fermentum dis.
    </div>
    </div>
    <footer>© 2025 Gunwood Press — Made with ❤️ by Liam Willey</footer>
    </div>
  );
}

export default App;
