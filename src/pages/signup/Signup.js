import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'
//styles
import styles from './Signup.module.css'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const { signup, error, isPending } = useSignup()

    const signupHandler = (e) => {
        e.preventDefault()
        signup(email, password, name)
    }
    return (
        <div className={styles['signup-form']}>
            <form onSubmit={signupHandler}>
                <h2>Signup</h2>
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
                <label>
                    <span>Your Name: </span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                {!isPending && <button className="btn">Signup</button>}
                {isPending && <button className='btn' disabled>loading</button>}
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}


export default Signup