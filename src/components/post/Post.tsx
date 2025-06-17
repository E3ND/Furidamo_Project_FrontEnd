import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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

        <div className={Style.filter}>
            <select name="teste" id="teste2">
                <option value="a">Mais recentes</option>
                <option value="b">Mais antigo</option>
                <option value="c">Mais curtido</option>
                <option value="d">Mais comentados</option>
            </select>

            <div>
                <input type="search" placeholder="Pesquisar" name="" id="" />
            </div>
        </div>

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

        <div className={Style.pagination}>
            <div className={Style.pagination_box}>
                <div className={Style.arrow_left}><FontAwesomeIcon icon={faArrowLeft} /></div>

                <div className={Style.pagination_numbers}>
                    <span className={Style.span}>1</span>
                    <span className={Style.span}>2</span>
                    <span className={Style.span_selected}>3</span>
                    <span className={Style.span}>4</span>
                    <span className={Style.span}>5</span>
                    <span className={Style.span}>6</span>
                    <span className={Style.span}>7</span>
                    <span className={Style.span}>8</span>
                    <span className={Style.span}>9</span>
                    <span className={Style.span}>10</span>
                </div>
                <div className={Style.arrow_right}><FontAwesomeIcon icon={faArrowRight} /></div>
            </div>
        </div>

        </div>
    )
}