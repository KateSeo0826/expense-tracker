import styles from './IncomeExpense.module.css'
const IncomeExpense = ({ transactions }) => {
    let amounts = []
    if (transactions.length > 0) {
        amounts = transactions.map(transaction => transaction.amount)
    }

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const expense = (
        amounts.filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2)

    return (
        <div className={styles['inc-exp-container']}>
            <div className={styles['income-box']}>
                <h4>Income</h4>
                <p id={styles['money-plus']} className={styles.money}>{income}</p>
            </div>
            <div className={styles['expense-box']}>
                <h4>Expense</h4>
                <p id={styles['money-minus']} className={styles.money}>{expense}</p>
            </div>
        </div >
    )
}

export default IncomeExpense