import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"
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
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei1 de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
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
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei2 de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
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
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei3 de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
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
          <Sidebar />
          <main>
            {
              posts.map(post => {
                return (
                  <Post /*Each child in a list should have a unique "key" prop.

                  Check the render method of `App`. => Isso significa que no metodo render de app, ou seja, no return que é onde se renderiza as coisas, tem uma lista que tem elementos sem a propriedade key exigida pelo React, pra facilitar a identificação de cada elemento post dessa lista de map */
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                  />
                )
              })
            }
          </main>
        </div>
      </div>
    </>
  )
}

export default App
