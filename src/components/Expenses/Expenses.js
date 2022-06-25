import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020')

    const filterChangeHandler = (selectedYear) => [
        setFilteredYear(selectedYear)
    ]

 
    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {/* title="ps5 "  we could have used hardcored value*/ }
            {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
        </Card>
    )
}

export default Expenses