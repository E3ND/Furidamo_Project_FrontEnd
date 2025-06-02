import { useState } from 'react';
import Style from './styles.module.scss';

function Header() {
    const [isOpen, setIsOpen] = useState(true);
    const [active, setActive] = useState('mobile_menu_desabled');

        const handleClick = () => {
            setIsOpen(!isOpen);
            console.log("oyeee => ", isOpen)
            if(!isOpen) {
                setActive('mobile_menu_desabled');
            } else {
                setActive('bar_div_mobile');
            }
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
                <div className={Style.nav_menu_mobile_box} onClick={handleClick}>
                    <span />
                    <span />
                    <span />
                </div>
            </div>

            <div className={Style[active]}>
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