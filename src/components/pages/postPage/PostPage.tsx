import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Style from './styles.module.scss';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function PostPage() {
    const [answerPointer, setAnswerPointer] = useState(false);
    const tags: string[] = [
        "Games",
        "Elden Ring",
        "Dúvidas"
    ];

    const handleClickAnswer = () => {
        setAnswerPointer(!answerPointer);
    }

    return (
        <div className={Style.container_box}>
            <div className={Style.box}>
                
                <div className={Style.back_page}>
                        <Link to="/" className={Style.back_page_link}>
                            <div><FontAwesomeIcon icon={faArrowLeft} /></div>
                            <p>Voltar</p>
                        </Link>
                </div>

                <div className={Style.profile_post}>
                    <h3>Título meeeeo</h3>
                    <div>
                        <img src="image/profile.png" width={25} height={25} alt="" />
                        <p>Robert Junior</p>
                        <p>15 de maio 2025</p>
                    </div>
                </div>

                <div className={Style.comment_user}>
                    comentário
                </div>

                <div className={Style.tags}>
                    {tags.map((key: string) => {
                        return <div className={Style.tags_border}><p>{key}</p></div>
                    })}
                </div>

                <div className={Style.midia_icon}>
                    <div><FontAwesomeIcon icon={faThumbsUp} /></div>
                    <div><FontAwesomeIcon icon={faThumbsDown} /></div>
                    <div><FontAwesomeIcon icon={faHeart} /></div>
                    { !answerPointer && <div className={Style.answer_button} onClick={handleClickAnswer}>Responder</div> }
                </div>

                { answerPointer &&  
                <div className={Style.answer}>
                    <div>
                        <textarea className={Style.textarea_comment} />
                    </div>

                    <div>
                        <div>
                            <FontAwesomeIcon icon={faComment} />
                            <p onClick={handleClickAnswer}>Cancelar</p>
                        </div>
                        <button>Comentar</button>
                    </div>
                </div>
                }

            </div>
        </div>
    )
}