import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Style from './style.module.scss';
import { IResponseLoginUser } from '../interfaces/loginRegister';
import WarningBar from '../../warningBar/WarningBar';
import { AuthContext } from '../../../context/UserProvider';
import { Link } from 'react-router-dom';

export default function Login() {
    const { authToken } = useContext(AuthContext);
    const apiUrl: string = process.env.REACT_APP_API_URL as string;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pointerBlocker, setPointerBlocker] = useState('');
    const [alert, setAlert] = useState<{ type: 'error' | 'success' | null, message: string }>({ type: null, message: '' });

    let userToken: IResponseLoginUser;

    useEffect(() => {
        if (!email || !password) {
            setPointerBlocker('pointer_block');
        } else {
            setPointerBlocker('pointer_free');
        }

    }, [email, password])

    async function loginUser() {
        if(pointerBlocker === 'pointer_block') return

        setAlert({ type: null, message: '' });
        
        //TODO gambiarra fudida, resolver isso aqui depois, não rederiza ao clicar denovo no botão com um email inválido
        if(!email.endsWith('@gmail.com')) {
            await new Promise(resolve => setTimeout(resolve, 50));
            setAlert({ type: 'error', message: 'Este não é um email válido' });
            return
        }

        const response = await axios.post(`${apiUrl}/user/login`,
            {
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

        authToken(userToken.access_token);

        console.log(userToken);
    }

    return (
        <div className={Style.login_container}>
            { alert.type && <WarningBar type={alert.type} message={alert.message} /> }
            
            <div className={Style.login_box}>
                <div className={Style.logo_site}>
                    <img src="image/furidamo_logo.png" alt="Furidamo logo" />
                </div>

                <div className={Style.title_site}>
                    <h2>Furidamo</h2>
                </div>

                <div className={Style.login_input}>
                    <p>Email: {email === '' ? <span>(Obrigatório)</span> : ''}</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className={Style.login_input}>
                    <p>Senha: {password === '' ? <span>(Obrigatório)</span> : ''}</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={Style.login_button}>
                    <button className={Style[pointerBlocker]} onClick={loginUser}>Logar</button>
                </div>

                <div className={Style.remember_me}>
                    <input type="checkbox" name="" id="" />
                    <p>Lembrar de mim</p>

                    <p><Link to='/' className={Style.forgot_password}>Esqueci minha senha</Link></p>
                </div>

                <div className={Style.have_count}>
                    <p>Não tem uma conta? <Link to='register' className={Style.count_link}>Cadastre-se</Link></p>
                </div>
            </div>
        </div>
    )
}