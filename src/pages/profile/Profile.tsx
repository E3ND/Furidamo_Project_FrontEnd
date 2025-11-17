import { JSX, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Post from '../../components/post/Post';
import Style from './styles.module.scss';
import Pagination from '../../components/pagination/Pagination';

export default function Profile() {
    const [arrayMenu, setArrayMenu] = useState(["list_type", "list_type_hover", "list_type"]);
    let fakeArrayMenu = ["list_type", "list_type_hover", "list_type"];

    const handleClickMyMenu = (id: number) => {
        for (let i = 0; i < fakeArrayMenu.length; i++) {
            if (i === id) {
                fakeArrayMenu[i] = "list_type_hover";
            } else {
                fakeArrayMenu[i] = "list_type";
            }
        }

        setArrayMenu(fakeArrayMenu);
    }

    const getPosts = async (page: number) => {
        console.log("LOG ==> ", page)
    }    

    return (
        <div className={Style.profile_container}>
            <div className={Style.profile_box}>
                <div className={Style.banner}>
                    <img className={Style.banner_image} src="image/banner.jpg" alt="" />
                    <div className={Style.banner_photo}>
                        <img src="image/profile.png" alt="" />
                    </div>
                </div>
                <div className={Style.nickname}>
                    <h3>Nome Teste</h3>
                    <p>@E3ND</p>
                </div>
                <div className={Style.list_profile}>
                    {/* list_type_hover */}
                    <div className={Style.profile_border}>
                        <div className={Style[arrayMenu[0]]}>
                            <p onClick={() => handleClickMyMenu(0)}>Likes</p>
                        </div>

                        <div className={Style[arrayMenu[1]]}>
                            <p onClick={() => handleClickMyMenu(1)}>Minha conta</p>
                        </div>

                        <div className={Style[arrayMenu[2]]}>
                            <p onClick={() => handleClickMyMenu(2)}>Amigos</p>
                        </div>
                    </div>
                </div>

                <div className={Style.profile_information_title}>
                    <h4>Informações da conta</h4>
                </div>

                <div className={Style.profile_information_container}>
                    <div className={Style.profile_information_flex_1}>
                        <p>Nome</p>
                        <p>Nome do usuário</p>
                        <p>Email</p>
                        <p>Redes Sociais</p>
                    </div>
                    <div className={Style.profile_information_flex_2}>
                        <p>Nome Teste</p>
                        <p>@Nome aaa</p>
                        <p>nomenome@gmail.com</p>
                        <div className={Style.profile_social}>
                            <p>@atatsa</p>
                            <p>@atatsa</p>
                        </div>
                    </div>
                </div>

                <div className={Style.profile_information_title}>
                    <h4>Meus posts</h4>
                </div>

                <div className={Style.box_post}>
                    <div className={Style.box_post_component}><Post /></div>
                </div>

                <Pagination onPageChange={getPosts} />  
            </div>
        </div>
    )
}