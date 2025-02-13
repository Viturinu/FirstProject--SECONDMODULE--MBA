import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import {Post} from "./components/Post"
import "./global.css"

import styles from "./App.module.css"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/viturinu.png",
      name: "Victor Oliveira",
      role: "Servidor"
    },
    content: [
                {type: "paragraph", content:"Fala galeraa 👋"},
                {type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
                {type: "link", content: "jane.design/doctorcare"},
              ],
    publishedAt: new Date("2025-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/thales.png",
      name: "Thales Oliveira",
      role: "Programador"
    },
    content: [
                {type: "paragraph", content:"Fala galeraa 👋"},
                {type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
                {type: "link", content: "jane.design/doctorcare"},
              ],
    publishedAt: new Date("2025-05-10 10:00:00"),
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://github.com/amauri.png",
      name: "Amauri Soares",
      role: "Servidor"
    },
    content: [
                {type: "paragraph", content:"Fala galeraa 👋"},
                {type:"paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
                {type: "link", content: "jane.design/doctorcare"},
              ],
    publishedAt: new Date("2025-05-10 10:00:00"),
  },
  
];

function App() {
  return (
    <>
      <div>
        <Header />
        <div className={styles.wrapper}>
          <Sidebar/>
          <main>
            {posts.map(post => {
              return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            })}
          </main>
        </div>
      </div>
    </>
  )
}

export default App
