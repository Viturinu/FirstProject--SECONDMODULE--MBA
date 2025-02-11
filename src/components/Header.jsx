import styles from "./Header.module.css";//se fosse só css, não precisava de dar qualquer nome

export function Header() {
    return (
        <header className={styles.Header}>
            <strong >Ignite Feed</strong>
        </header>
    );
}