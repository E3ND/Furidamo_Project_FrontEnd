import { useState } from 'react';
import Style from './styles.module.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu() {
        setIsOpen(!isOpen);
    }
    return(
        <div className={Style.nav_bar_box}>
            <div className={Style.bar_div}>
                <p>Furidamo</p>
                <p>Home</p>
                <p>Comunidade</p>
                <p>Amigos</p>
                <p>
                    <span>Criar conta</span>
                </p>
            </div>

            <div className={Style.nav_menu_mobile}>
                <span />
                <span />
                <span />
            </div>

            <div className={Style.bar_div_mobile}>
                <p>Furidamo</p>
                <p>Home</p>
                <p>Comunidade</p>
                <p>Amigos</p>
                <p>
                    <span>Criar conta</span>
                </p>
            </div>
        </div>
    )
}

export default Header