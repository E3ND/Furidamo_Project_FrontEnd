import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Post from "../../post/Post"

import Style from './styles.module.scss';
import Header from "../../header/Header";

export default function Home() {


    return (
        <div className={Style.container}>
            <div className={Style.box_post}>
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
                <Post />

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
        </div>
    )
}