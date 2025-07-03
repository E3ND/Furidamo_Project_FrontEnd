import Post from '../../post/Post';
import Style from './styles.module.scss';

export default function Profile() {
    return(
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
                    <div className={Style.list_type_hover}>
                        <p>Meu posts</p>
                    </div>

                    <div className={Style.list_type}>
                        <p>Likes</p>
                    </div>

                    <div className={Style.list_type}>
                        <p>Amigos</p>
                    </div>
                </div>

                <h4>Informações da conta</h4>
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
                        <p>nome@gmail.com</p>
                        <div className={Style.profile_social}>
                            <p>@atatsa</p>
                            <p>@atatsa</p>
                        </div>
                    </div>
                </div>

                <h4>Meus posts</h4>
                <br /> <br /> <br />
                <div className={Style.box_post}>
                    <Post />
                </div>
            </div>
        </div>
    )
}