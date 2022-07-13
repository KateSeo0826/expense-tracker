import { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
//styles
import styles from './Login.module.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { login, error, isPending } = useLogin()

    const loginHandler = (e) => {
        e.preventDefault()
        login(email, password)
    }
    return (
        <div className={styles['login-form']}>
            <form onSubmit={loginHandler}>
                <h2>Login</h2>
                <label>
                    <span>Email: </span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Password: </span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {!isPending && <button className="btn">Login</button>}
                {isPending && <button className='btn' disabled>Loading</button>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}

export default Login