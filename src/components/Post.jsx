import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR"
import styles from "./Post.module.css";
import { useState } from "react";

export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState(["Post muito bacana, hein?!"]); //dentro da função Post. Attention!

    // const publishedDateFormat = new Intl.DateTimeFormat('pt-BR', {
    //     day: '2-digit',
    //     month: 'long',
    //     hour: '2-digit',
    //     minute: '2-digit',
    // }).format(publishedAt)

    const [newCommentText, setNewCommentText] = useState("");

    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publushedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment() {
        event.preventDefault();

        //const newCommentText = event.target.comment.value; //podemos acessar o valor de um item do target apenas pelo seu 'name' //Isso é programação imperativa (passo a passo), mas estamos tentando sempre via programação declarativa

        setComments([...comments, newCommentText]);

        //event.target.comment.value = "";

        setNewCommentText(""); //isso é diferente porque estou setando o estado que está sendo usado lá no elemento textArea, no entanto eu não mudei via target nada lá. Isso é programação declarada, e não imperativa (ou seja, o que nós queremos)
    }

    function handleNewCommentChange() {
        // console.log(event.target); //aqui ele me retorna a textArea no target, pois foi lá que foi adicionado o evento com o atributo onChange
        event.target.setCustomValidity(""); //Pois se o usuário digitar algo, essa função será chamada, logo tem que zerar o custumValidity, caso contrário, não deixará clicar, sempre dandoa quele alertar de campo vazio.
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter((comment) => comment !== commentToDelete);
        console.log(commentsWithoutDeletedOne)
        setComments(commentsWithoutDeletedOne);

        // alert("Testando se chamou");
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Este campo é obrigatório!"); //essa é a propriedade que tem seu display quando required não é atendido (fica dentro do target, que no caso é um TextArea)

    }

    const isNewCommentEmpty = newCommentText.length === 0;

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
                            return <p key={line.content}>{line.content}</p>; /*key é sempre no primeiro elemento retornado de dentro do método map */
                        } else if (line.type === "link") {
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map(comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={() => deleteComment(comment)} />
                    })
                }
            </div>
        </article>
    )
}
