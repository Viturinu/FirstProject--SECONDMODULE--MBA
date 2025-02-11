import { Header } from "./components/Header"
import "./global.css"

import styles from "./App.module.css"

function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <aside>
            sidebar
          </aside>
          <main></main>
        </div>
      </div>
    </>
  )
}

export default App
