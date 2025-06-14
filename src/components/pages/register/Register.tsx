import { useEffect, useState } from "react";
import axios from 'axios';

import { IResponseLoginUser } from "../interfaces/loginRegister";
import WarningBar from "../../warningBar/WarningBar";

import Style from './style.module.scss';

export default function Register() {
    const apiUrl: string = process.env.REACT_APP_API_URL as string;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [pointerBlocker, setPointerBlocker] = useState('');
    const [alert, setAlert] = useState<{ type: 'error' | 'success' | null, message: string }>({ type: null, message: '' });

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

        setAlert({ type: null, message: '' });
        
        //TODO gambiarra fudida, resolver isso aqui depois, não rederiza ao clicar denovo no botão com um email inválido
        if(!email.endsWith('@gmail.com')) {
            await new Promise(resolve => setTimeout(resolve, 50));
            setAlert({ type: 'error', message: 'Este não é um email válido' });
            return
        }

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

        userToken = response.data

        if(userToken.status) {
            setAlert({ type: 'error', message: userToken.message as string });
        }

        console.log(userToken);
    }
    
    return (
        <div className={Style.register_page}>
            { alert.type && <WarningBar type={alert.type} message={alert.message} /> }

            <div className={Style.register_box_form}>
                <div className={Style.border_box}>
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