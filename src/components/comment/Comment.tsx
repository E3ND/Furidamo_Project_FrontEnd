import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

import Style from './styles.module.scss';
import Reply from "../reply/Reply";
import { useState } from "react";

export default function Comment() {
    const [answerPointer, setAnswerPointer] = useState(false);
    const [answerOfAnswerPointer, setAnswerOfAnswerPointer] = useState(false);
    const [showMenuOption, setShowMenuOption] = useState(false);
    const [showMenuReplyOption, setShowMenuReplyOption] = useState(false);

    const handleClickAnswer = () => {
        setAnswerPointer(!answerPointer);
    }

    const handleClickAnswerOfAnswer = () => {
        setAnswerOfAnswerPointer(!answerOfAnswerPointer);
    }

    const handleClickShowMenu = () => {
        setShowMenuOption(!showMenuOption);
    }

    const handleClickShowMenuReply = () => {
        setShowMenuReplyOption(!showMenuReplyOption);
    }

    return(
        <div className={Style.Comment_container}>
            <div className={Style.Comment_content}>
                <img src="image/profile.png" width={25} height={25} alt="" />
                <p>Nelson Martins</p>
                <p className={Style.date}>1 dia atrás</p>
                <div>
                    <FontAwesomeIcon icon={faEllipsis} onClick={handleClickShowMenu} />
                    {showMenuOption && 
                        <div>
                            <p>Editar</p>
                            <p>Excluír</p>
                        </div>
                    }
                </div>
            </div>

            <div className={Style.comment}>
                Testeeeeee
            </div>
            
            <div className={Style.comment_social}>
                <div><FontAwesomeIcon icon={faThumbsUp} /> 5</div>
                <div><FontAwesomeIcon icon={faThumbsDown} /> 1</div>
                { !answerPointer && 
                    <div onClick={handleClickAnswer}>
                        <FontAwesomeIcon icon={faComment} /> Responder
                    </div> 
                }
            </div>

            {answerPointer && 
                <div className={Style.reply}>
                    <Reply answerPointer={answerPointer} setAnswerPointer={setAnswerPointer} />
                </div>
            }

            {/* Respostas se houver */}
            <div className={Style.comment_answer}>
                <div className={Style.Comment_content}>
                    <img src="image/profile.png" width={25} height={25} alt="" />
                    <div className={Style.reply_user}>
                        <p>Junin Bom de Bala</p>
                        <div className={Style.reply_icon}><FontAwesomeIcon icon={faArrowRightToBracket} /></div>
                        <p>Nelson Martins</p>
                    </div>
                    <p className={Style.date}>1 dia atrás</p>
                    <div><FontAwesomeIcon icon={faEllipsis} onClick={handleClickShowMenuReply} />
                    {showMenuReplyOption && 
                        <div>
                            <p>Editar</p>
                            <p>Excluír</p>
                        </div>
                        }
                    </div>
                </div>

                <div className={Style.comment}>
                    Testeeeeee
                </div>
            
                <div className={Style.comment_social}>
                    <div><FontAwesomeIcon icon={faThumbsUp} /> 5</div>
                    <div><FontAwesomeIcon icon={faThumbsDown} /> 1</div>
                    { !answerOfAnswerPointer && 
                        <div onClick={handleClickAnswerOfAnswer}>
                            <FontAwesomeIcon icon={faComment} /> Responder
                        </div> 
                    }                    
                </div>

                {answerOfAnswerPointer && 
                    <div className={Style.reply}>
                        <Reply answerPointer={answerOfAnswerPointer} setAnswerPointer={setAnswerOfAnswerPointer} />
                    </div>
                }
            </div>
        </div>
    )
}