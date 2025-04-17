function Register() {
    const name: string = '';
    const password: string = '';
    
    return (
        <div className="login-page">
            <div>
                <h1>Entrar</h1>

                <div>
                    <p>Email: <span>(Obrigatório)</span></p>
                    <input type="email" value={name} />
                </div>

                <div>
                    <p>Senha: <span>(Obrigatório)</span></p>
                    <input type="password" value={password} />
                </div>

                <button><p>Logar</p></button>
            </div>
            <div>
                aaaaaaaaaaaaa
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Register