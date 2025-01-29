import styles from "./styles/App.module.css";
import logoStacked from "./assets/logoStacked.png"

function Books() {
    return (
        <div className={styles.app}>
        <header>
        <img src={logoStacked} alt="Logo"></img>
        <div className={styles.spacer}></div>
        <a href="mailto:joe@gunwoodpress.com" className={styles.btnPrimary}>Contact</a>
        </header>
        <div className={styles.hero}>
        When we publish some books, they'll show up here.
        </div>
        <footer>© 2025 Gunwood Press — Made with ❤️ by Liam Willey</footer>
        </div>
    )
}

export default Books;