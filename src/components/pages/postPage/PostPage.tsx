import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Style from './styles.module.scss';

export default function PostPage() {
    const tags: string[] = [
        "Games",
        "Elden Ring",
        "Dúvidas"
    ];

    return (
        <div className={Style.container_box}>
            <div className={Style.box}>
                
                <div className={Style.back_page}>
                    <div>
                        <div><FontAwesomeIcon icon={faArrowLeft} /></div>
                        <p>Voltar</p>
                    </div>
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
                </div>
            </div>
        </div>
    )
}