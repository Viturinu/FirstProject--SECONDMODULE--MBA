import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        1,
        2,
    ]); //dentro da função Post. Attention!

    // const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',
    // }).format(publishedAt)

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publushedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(){
        event.preventDefault();
        setComments([...comments, comments.length+1]);
        console.log(comments);
    }

    return (
        <article className={styles.post}>
            <header>

                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="12 de fevereiro de 2025" dateTime={publishedAt.toISOString()}>{publushedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {
                        if (line.type === "paragraph") {
                            return <p>{line.content}</p>;
                        } else if (line.type === "link") {
                            return <p><a href="#">{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário" />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment/>
                    })
                }
            </div>
        </article>
    )
}