import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";


import Style from './styles.module.scss';
import { Link } from "react-router-dom";

export default function Post() {
    const tags: string[] = [
        "Games",
        "Elden Ring",
        "Dúvidas"
    ];

    return (
        <div>



        <div className={Style.post_box}>
            <div className={Style.box_1}>
                <p>7 <FontAwesomeIcon icon={faChevronUp} /> </p>
            </div>

            <div className={Style.box_2}>
                <div className={Style.title}>
                    <h3>
                        <Link className={Style.title_link} to="/post">Título do comentário</Link>
                    </h3>
                    <p>2 dias atrás</p>
                </div>

                <div className={Style.comment}><p>Cometáraio</p></div>

                <div className={Style.tags}>
                    
                    {tags.map((key: string) => {
                        return <div className={Style.tags_border}><p>{key}</p></div>
                    })}
                                        
                    <div>
                        <p><FontAwesomeIcon icon={faComment} /> 1</p>
                    </div>
                </div>
            </div>
        </div>



        </div>
    )
}