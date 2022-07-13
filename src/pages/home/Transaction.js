import { useFirestore } from '../../hooks/useFirestore'
import styles from './Transaction.module.css'
const Transaction = ({ transaction }) => {
    const { deleteDocument } = useFirestore('transactions')

    return (
        <div className={styles.transaction} >
            <li className={transaction.amount < 0 ? styles['minus'] : styles['plus']} >
                <p className={styles.date}> {transaction.date}</p>
                <p className={styles.account}>{transaction.account}</p>
                <p className={styles.name}>{transaction.name}</p>
                <p className={styles.amount}>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</p>
                <button onClick={() => deleteDocument(transaction.id)}>X</button>
            </li>
        </div >
    )
}

export default Transaction