import './ExpenseItem.css'

function ExpenseItem(props){  // react component must have one root return element
    const expenseDate = props.date.toISOString()  // props.data -> returns an object
    const expenseTitle = props.title
    const expenseAmount = props.amount

    return(   // in {} in can run js expressions we have added dynamic values here
        <div className='expense-item'>
            <div>{expenseDate}</div>  
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div> 
    )
}

export default ExpenseItem