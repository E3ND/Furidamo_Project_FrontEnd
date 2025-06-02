import { useEffect, useState } from 'react';
import axios from 'axios';

import Style from './Login.module.scss';
import { IResponseLoginUser } from '../interfaces/loginRegister';
import WarningBar from '../../warningBar/WarningBar';

function Login() {
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

        console.log(userToken);
    }

    return (
        <div className={Style.login_page}>
            { alert.type && <WarningBar type={alert.type} message={alert.message} /> }

            <div className={Style.login_box}>
                <h1>Entrar</h1>

                <div>
                    {/* <p>{emailMessage !== '' ? <span>{emailMessage}</span> : ''}</p> */}
                    <p>Email: {email === '' ? <span>(Obrigatório)</span> : ''}</p>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <p>Senha: {password === '' ? <span>(Obrigatório)</span> : ''}</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button className={Style[pointerBlocker]} onClick={loginUser}><p>Logar</p></button>

                <p className={Style.register_link}>Já tem uma conta? <a href="#">Entre</a></p>
            </div>
        </div>
    )
}

export default Login