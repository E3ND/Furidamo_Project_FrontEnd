import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faOutdent } from "@fortawesome/free-solid-svg-icons";
import { faIndent } from "@fortawesome/free-solid-svg-icons";
import { faTimeline } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";

import Post from "../../post/Post"

import Style from './styles.module.scss';
import { useEffect, useState } from "react";

export default function Home() {
    const [ disabledMenu, setDisabledMenu ] = useState(false);

    const handleClickMenu = () => {
        setDisabledMenu(!disabledMenu);
    }

    return (
        <div className={Style.container}>
            <div className={Style.menu_header}>
                <div className={`${disabledMenu == true ? Style['menu_open_icon'] : Style['menu_disabled']}`} onClick={handleClickMenu}><FontAwesomeIcon icon={faIndent} /></div>
                <div className={Style.menu_page}>Forum</div>
            </div>

            <div className={`${disabledMenu == false ? Style['box_menu'] : Style['menu_disabled']}`}>
                <div className={Style.site_ui}>
                    {/* <img src="" alt="" /> */}
                    <h3>Furidamo UI</h3>
                    <div onClick={handleClickMenu}><FontAwesomeIcon icon={faOutdent} /></div>
                    {/* <div><FontAwesomeIcon icon={faIndent} /></div> */}
                </div>

                <div className={Style.input_profile}>
                    <input type="search" placeholder="Pesquisar" name="" id="" />
                </div>

                <div className={Style.list}>
                    <p className={Style.content_title}>Home</p>
                    <div className={Style.dashboard}>
                        <div><FontAwesomeIcon icon={faTableCellsLarge} /></div>
                        <p>Dashboard</p>
                    </div>

                    <p className={Style.content_title}>Aplicações</p>
                    <div className={Style.dashboard}>
                        <div><FontAwesomeIcon icon={faEnvelope} /></div>
                        <p>Email</p>
                    </div>

                    <div className={Style.dashboard}>
                        <div><FontAwesomeIcon icon={faBell} /></div>
                        <p>Notificações</p>
                        <div className={Style.number_ocorrency}>7</div>
                    </div>

                    <div className={Style.dashboard}>
                        <div><FontAwesomeIcon icon={faTimeline} /></div>
                        <p>Timeline</p>
                    </div>

                    <div className={Style.dashboard}>
                        <div><FontAwesomeIcon icon={faMessage} /></div>
                        <p>Menssagens</p>
                        <div className={Style.number_ocorrency}>10</div>
                    </div>

                    <div className={Style.dashboard}>
                        <div><FontAwesomeIcon icon={faPeopleGroup} /></div>
                        <p>Comunidade</p>
                    </div>

                    <p className={Style.content_title}>Ferramentas</p>
                    <div className={Style.dashboard}>
                        <div><FontAwesomeIcon icon={faGear} /></div>
                        <p>Configuração</p>
                    </div>

                    <div className={Style.color_site}>
                        <div className={Style.color_site_container}>
                            <div className={Style.light_theme}>
                                <div><FontAwesomeIcon icon={faSun} /></div>
                                <p>Claro</p>
                            </div>
                            <div className={Style.dark_theme}>
                                <div><FontAwesomeIcon icon={faMoon} /></div>
                                <p>Escuro</p>
                            </div>
                        </div>
                    </div>

                    <div className={Style.profile}>
                        <img src="image/profile.png" width={25} height={25} alt="" />
                        <p>Nome Teste</p>
                        <div><FontAwesomeIcon icon={faArrowRightFromBracket} /></div>
                    </div>
                </div>
            </div>
            <div className={Style.box_post}>
                <Post />
            </div>
        </div>
    )
}