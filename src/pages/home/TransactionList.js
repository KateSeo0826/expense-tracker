import Balance from './Balance'
import Transaction from './Transaction'
import styles from './Home.module.css'
const TransactionList = ({ transactions }) => {
    const amounts = transactions.map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <>
            <Balance total={total} />
            <h4>History</h4>
            <ul className={styles.transactions}>
                {transactions.map((transaction) => (
                    <Transaction transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </>
    )
}

export default TransactionList
