import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

export function Comment(props) { //podemos desestruturar também {content, deleteComment} e colocar lá embaixo content e deleteComment ao invés de props.comment e props.deleteComment

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        props.onDeleteComment(props.content); //melhor seria o id, mas não temos neste caso
    }

    function handleLikeContent() {
        setLikeCount(likeCount + 1); //cuidado com pós-fixado count++ e pré fixado ++count, pois eles têm passos até chegar no resultado, armazenando valores indesejaveis na realização do calculo
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/viturinu.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor Oliveira</strong>
                            <time title="12 de fevereiro de 2025" dateTime="2025-02-12 12:54:30">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{props.content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeContent}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}