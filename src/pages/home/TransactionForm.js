import { useState, useEffect } from 'react'
import { BsCreditCard2Back, BsCash } from 'react-icons/bs'
import { RiWallet3Line } from 'react-icons/ri'
import { MdOutlineAccountBalance } from 'react-icons/md'
import Select from 'react-select'
import { useFirestore } from '../../hooks/useFirestore'
import styles from './Home.module.css'

const selectData = [
    {
        value: 'Debit',
        label: 'Debit',
        icon: < RiWallet3Line />
    },
    {
        value: 'Credit',
        label: 'Credit',
        icon: < BsCreditCard2Back />
    },
    {
        value: 'Cash',
        label: 'Cash',
        icon: < BsCash />
    }
]
const selectPlaceholder = <div className={styles['select']}> <MdOutlineAccountBalance /> <span>Account</span></ div>
const TransactionForm = ({ uid }) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [amount, setAmount] = useState('')
    const [account, setAccount] = useState('')

    const { addDocument, response } = useFirestore('transactions')

    const submitHandler = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            name,
            amount: +amount,
            date,
            account
        })
    }

    //reset the form fields
    useEffect(() => {
        if (response.success) {
            setName('')
            setAmount('')
            setDate('')
        }
    }, [response.success])
    return (
        <>
            <h3>Add a Transaction</h3>
            <form onSubmit={submitHandler}>
                <label>
                    <span> Transaction Date: </span>
                    <input
                        type='date'
                        required
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                </label>
                <label>
                    <span> Transaction name: </span>
                    <input
                        type='text'
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                </label>
                <label>
                    <span> Amount: (negative- expense, positive-income) </span>
                    <input
                        type='number'
                        required
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </label>
                <Select
                    placeholder={selectPlaceholder}
                    value={selectData.find(c => c.value === account)}
                    options={selectData}
                    onChange={(e) => setAccount(e.value)}
                    getOptionLabel={e => (
                        <div className={styles.select}>
                            {e.icon}
                            <span>{e.label}</span>
                        </div>
                    )}
                />
                <button >Add Transaction </button>
            </form>
        </>
    )
}

export default TransactionForm  