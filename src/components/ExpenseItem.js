import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props){  // react component must have one root return element
    const expenseTitle = props.title
    const expenseAmount = props.amount

    return(   // in {} you can run js expressions we have added dynamic values here
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div> 
    )
}

export default ExpenseItem