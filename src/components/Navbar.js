import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'
import { useTheme } from '../hooks/useTheme'

//styles 
import styles from './Navbar.module.css'

const Navbar = () => {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const { color, changeColor } = useTheme()
    return (
        <div className={styles.navbar} style={{ background: color }}>
            <nav onClick={() => changeColor('pink')}>
                <ul>
                    <li className={styles.title}>Expense Tracker</li>
                    {!user && (
                        <>
                            <li><Link to='login'>Login</Link></li>
                            <li><Link to='signup'>Signup</Link></li>
                        </>
                    )}
                    {user && (
                        <>
                            <li>hello, {user.name}</li>
                            <li><button className='btn' onClick={logout}>Logout</button></li>
                        </>
                    )}
                </ul>
            </nav>
        </div >
    )
}

export default Navbar