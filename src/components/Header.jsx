import styles from "./Header.module.css";//se fosse só css, não precisava de dar qualquer nome
import igniteLogo from "../assets/ignite-logo.svg"

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logo do ignite" />
            <strong >Ignite Feed</strong>
        </header>
    );
}