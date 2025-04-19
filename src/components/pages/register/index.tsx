import { useEffect, useState } from "react";
import axios from 'axios';

import { IResponseLoginUser } from "../interfaces/loginRegister";
import WarningBar from "../../warningBar/WarningBar";

import Style from './Register.module.scss';

function Register() {
    const apiUrl: string = process.env.REACT_APP_API_URL as string;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pointerBlocker, setPointerBlocker] = useState('');

    let userToken: IResponseLoginUser;

    useEffect(() => {
        if (!name || !email || !password || !password || password !== confirmPassword) {
            setPointerBlocker('pointer_block');
        } else {
            setPointerBlocker('pointer_free');
        }
    }, [name, email, password, confirmPassword])

    async function registerUser() {
        if(pointerBlocker === 'pointer_block') return

        const response = await axios.post(`${apiUrl}/user/create`,
            {
                name: name,
                email: email,
                password: password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
        })

        if(response.data.message) {
            //TODO chamar componente de aviso
        }

        userToken = response.data

        console.log(userToken);
    }
    
    return (
        <div className={Style.register_page}>
            <WarningBar type="error" message="testeeeeeeee" />

            <div className={Style.register_box_form}>
                <div className={Style.border}>
                    <h1>Crie sua conta</h1>

                    <div>
                        <p>Nome: {name === '' ? <span>(Obrigatório)</span> : ''}</p>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <p>Email: {email === '' ? <span>(Obrigatório)</span> : ''}</p>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div>
                        <p>Senha: {password === '' ? <span>(Obrigatório)</span> : ''}</p>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <p>Confirmar senha: {confirmPassword !== password ? <span>(As senhas não coincidem)</span> : ''}</p>
                        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    <button className={Style[pointerBlocker]} onClick={registerUser}><p>Criar conta</p></button>
                </div>
            </div>
            <div className={Style.register_box_image}>
                {/*TODO Mudar pra uma imagem que combine com o site(fazer uma) */}
                <img src="image/imagem-teste.jpg" alt="Website cover photo" />
            </div>
        </div>
    )
}

export default Register