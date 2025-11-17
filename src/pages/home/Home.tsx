import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Post from "../../components/post/Post";

import Style from './styles.module.scss';
import Pagination from "../../components/pagination/Pagination";
import { Link } from "react-router-dom";

export default function Home() {
    const getPosts = async (page: number) => {
        console.log("LOG ==> ", page)
    }

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

                    <Link className={Style.new_post} to='/nova-postagem'>
                        <p>
                            Adicionar nova postagem
                            <div>
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                        </p>
                    </Link>

                    <div className={Style.input_search}>
                        <input type="search" placeholder="Pesquisar" name="" id="" />
                    </div>
                </div>
                <Post />

                <Pagination onPageChange={getPosts} />
            </div>
        </div>
    )
}