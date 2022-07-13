import styles from './Balance.module.css'

const Balance = ({ total }) => {

    return (
        <div className={styles['balance-box']}>
            <h3>YOUR BALANCE</h3>
            <h2>${total}</h2>
        </div>
    )
}

export default Balance