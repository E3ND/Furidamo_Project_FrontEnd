import { useEffect, useState } from 'react';
import axios from 'axios';

import './styles.scss';

interface IResponseLoginUser {
    access_token: string;
    user_id: string;
}

function Login() {
    const apiUrl: string = process.env.REACT_APP_API_URL as string;

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [pointerBlocker, setPointerBlocker] = useState('');

    let userToken: IResponseLoginUser;

    useEffect(() => {
        if (!name || !password) {
            setPointerBlocker('pointer-block');
        } else {
            setPointerBlocker('');
        }
    }, [name, password])

    async function loginUser() {
        const response = await axios.post(`${apiUrl}/user/login`,
            {
                email: name,
                password: password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                }
            })

        userToken = response.data

        console.log(userToken);
    }

    return (
        <div className="login-page">
            <div>
                <h1>Entrar</h1>

                <div>
                    <p>Email: {name === '' ? <span>(Obrigatório)</span> : ''}</p>
                    <input type="email" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <p>Senha: {password === '' ? <span>(Obrigatório)</span> : ''}</p>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button id={`${pointerBlocker}`} onClick={loginUser}><p>Logar</p></button>

                <p>Já tem uma conta? <a href="#">Entre</a></p>
            </div>
        </div>
    )
}

export default Login