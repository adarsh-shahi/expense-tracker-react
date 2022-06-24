import './ExpenseItem.css'

function ExpenseItem(){  // react component must have one root return element
    const expenseDate = new Date(2022, 5, 24);  // returns an object
    const expenseTitle = 'Car Insurance'
    const expenseAmount = 345.45

    return(   // in {} in can run js expressions we have added dynamic values here
        <div className='expense-item'>
            <div>{expenseDate.toISOString()}</div>  
            <div className='expense-item__description'>
                <h2>{expenseTitle}</h2>
                <div className='expense-item__price'>${expenseAmount}</div>
            </div>
        </div> 
    )
}

export default ExpenseItem