import LoginStyle from './Login.module.css'


function Login(){
    return(
        <>
            <div className={LoginStyle.full_container}>

                <div className={LoginStyle.container}>
                <h1>Login</h1>
                    <label>Email</label>
                    <input type='email' />

                    <label>Senha</label>
                    <input type='password' />

                    <button>Entrar</button>

                </div>
            </div>
        </>
    )
}

export default Login