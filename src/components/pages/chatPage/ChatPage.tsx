import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Style from './styles.module.scss';

export default function ChatPage() {
    return(
        <div className={Style.container_chat}>
            <div className={Style.chat_friends}>
                <div className={Style.friend}>
                    <div className={Style.friend_container}>
                        <div className={Style.friend_image}>
                            <img src="image/imagem-teste.jpg" alt="" />
                        </div>

                        <div className={Style.friend_title_container}>
                            <div className={Style.friend_title}>
                                <h4>Teste</h4>
                                <p>2h atrás</p>
                            </div>

                            <div className={Style.beginning_message}>
                                <p>começa da frase tex etxxx</p>
                                <div><p>1</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.chat_messages}>
                <div className={Style.friend_information}>
                    <img src="image/imagem-teste.jpg" alt="" />
                    <h3>Teste</h3>
                </div>

                <div className={Style.container_send_message}>
                    <div className={Style.chat}>
                        <div className={Style.friend_message}>
                            <p>GAhjsdaisdhajGAhjsdaisdhajGAhjsdaisdhajGAhjsdaisdhaj</p>
                        </div>

                        <div className={Style.your_message}>
                            <p>GAhjsdaisdhajGAhjsdaisdhajGAhjsdaisdhajGAhjsdaisdhaj</p>
                        </div>

                    </div>

                    <div className={Style.input_box}>
                        <div className={Style.input}>
                            <input type='text' placeholder='Digite sua menssagem...' />
                            <div>
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}