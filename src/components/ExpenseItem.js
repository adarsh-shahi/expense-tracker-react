import './ExpenseItem.css'

function ExpenseItem(){  // react component must have one root return element
    return(
        <div className='expense-item'>
            <div>Oct 25 2001</div>
            <div className='expense-item__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>$345.45</div>
            </div>
        </div> 
    )
}

export default ExpenseItem