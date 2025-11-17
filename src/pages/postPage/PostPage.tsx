import { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lightbox, { ZoomRef } from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";

import Style from './styles.module.scss';
import Comment from "../../components/comment/Comment";
import Reply from "../../components/reply/Reply";
import Header from "../../components/header/Header";


export default function PostPage() {
    const [answerPointer, setAnswerPointer] = useState(false);
    const [open, setOpen] = useState(false);
    const zoomRef = useRef<ZoomRef>(null);
    const [index, setIndex] = useState(0);
    
    const tags: string[] = [
        "Games",
        "Elden Ring",
        "Dúvidas"
    ];

    const handleClickAnswer = () => {
        setAnswerPointer(!answerPointer);
    }

    const slides = [
    {
        id: 0,
        src: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/05/29/espectro-qhkkpxe9fsys.jpg",
        alt: "image 1",
        width: 3840,
        height: 2560,
    },
    {
        id: 1,
        src: "https://criticalhits.com.br/wp-content/uploads/2025/05/nightreign-revenant-01.jpg",
        alt: "image 2",
        width: 3840,
        height: 2560,
    },
    {
        id: 2,
        src: "https://static.beebom.com/wp-content/uploads/2025/05/Revenant-Nightreign.jpg?w=1024",
        alt: "image 3",
        width: 3840,
        height: 2560,
    },
    ];

    return (
        <div className={Style.container}>

            <div className={Style.container_box}>
                <div className={Style.box}>
                    
                    <div className={Style.back_page}>
                            <Link to="/forum" className={Style.back_page_link}>
                                <div><FontAwesomeIcon icon={faArrowLeft} /></div>
                                <p>Voltar</p>
                            </Link>
                    </div>

                    <div className={Style.profile_post}>
                        <h3>Título meeeeo</h3>
                        <div>
                            <img src="image/profile.png" width={25} height={25} alt="" />
                            <p>Robert Junior</p>
                            <p className={Style.date}>15 de maio 2025</p>
                        </div>
                    </div>

                    <div className={Style.comment_user}>
                        comentário
                    </div>

                    <div className={Style.carousel}>
                        {/* <button type="button" onClick={() => setOpen(true)}>
                            Open Lightbox
                        </button> */}
                        {slides.map(key => {
                            return <img src={key.src} alt="" draggable={false} onClick={() => (setOpen(true), setIndex(key.id))} />
                        })}
                        <Lightbox open={open} close={() => setOpen(false)} index={index} plugins={[Zoom]} zoom={{ ref: zoomRef }} slides={slides} />
                    </div>

                    <div className={Style.tags}>
                        {tags.map((key: string, index: number) => {
                            return <div className={Style.tags_border} key={index}><p>{key}</p></div>
                        })}
                    </div>

                    <div className={Style.midia_icon}>
                        <div><FontAwesomeIcon icon={faThumbsUp} /></div>
                        <div><FontAwesomeIcon icon={faThumbsDown} /></div>
                        <div><FontAwesomeIcon icon={faHeart} /></div>
                        { !answerPointer && <div className={Style.answer_button} onClick={handleClickAnswer}>Responder</div> }
                    </div>

                    { answerPointer &&  
                        <div className={Style.reply}>
                            <Reply answerPointer={answerPointer} setAnswerPointer={setAnswerPointer} />
                        </div>
                    }
                
                    <h3 className={Style.number_comments}>4 Comentários</h3>
                    
                    <Comment />
                </div>
            </div>
        </div>
    )
}