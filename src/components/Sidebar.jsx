import styles from "./Sidebar.module.css"
import {PencilLine} from "@phosphor-icons/react"

export function Sidebar(){
    
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://plus.unsplash.com/premium_photo-1739198859134-94d2e0135cc0?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="random image" />
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/viturinu.png" alt="" />
                <strong>Victor Oliveira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}