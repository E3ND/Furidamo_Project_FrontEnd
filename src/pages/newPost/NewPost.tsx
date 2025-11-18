import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Style from './styles.module.scss';

//TODO fazer o html ser semantico
export default function NewPost() {
    return (
        <div className={Style.container}>
            <main className={Style.container_box}>
                <h1>Criar nova postagem</h1>

                <section>
                    <nav>
                        <Link to="/forum" className={Style.back_page_link}>
                            <div><FontAwesomeIcon icon={faArrowLeft} /></div>
                            <p>Voltar</p>
                        </Link>
                    </nav>

                    <form>
                        <div className={Style.input_new_title}>
                            <input type="text" placeholder='Digite o título de sua postagem...' />
                        </div>

                        <div className={Style.input_new_description}>
                            <textarea placeholder='Escreva aqui o conteúdo da sua postagem'></textarea>
                        </div>

                        <div className={Style.input_new_file}>
                            <input type="file" id="fileInput" />
                            <label htmlFor="fileInput">
                                <FontAwesomeIcon icon={faPlus} />
                                Selecionar arquivo
                            </label>
                        </div>

                        <figure>
                            <img src="https://criticalhits.com.br/wp-content/uploads/2025/05/nightreign-revenant-01.jpg" alt="" />
                            <img src="https://criticalhits.com.br/wp-content/uploads/2025/05/nightreign-revenant-01.jpg" alt="" />
                            <img src="https://criticalhits.com.br/wp-content/uploads/2025/05/nightreign-revenant-01.jpg" alt="" />
                        </figure>

                        <div className={Style.tags}>
                            <p>Tags</p>
                            <div className={Style.tags_container}>
                                <input type="text" placeholder='Buscar tags' />
                                <div>
                                    
                                    <p> <FontAwesomeIcon icon={faPlus} />Adicionar</p>
                                </div>
                            </div>
                        </div>

                        <fieldset>
                            <div>
                                <p>Elden Ring</p>
                            </div>

                            <div>
                                <p>Dúvidas</p>
                            </div>
                        </fieldset>

                        <div className={Style.submit_buttons}>
                            <div>
                                <p>Cancelar</p>
                            </div>
                            <div>Publicar post</div>
                        </div>
                    </form>
                </section>
            </main>
        </div>
    )
}