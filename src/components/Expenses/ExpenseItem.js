import { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props){  // react component must have one root return element
  //   const [title, setTitle] = useState(props.title);  // setting inital value of props.title to title variable this is dobe aonly once at the begining
     // type of react hook must be called directly inside a component
     //  useState returns array of exactly two elements
     // 1 element is current state value
     // 2 element is function for updating that value
  
  
  //  const expenseAmount = props.amount

    // const clickHandler = () => {
    //     setTitle('OMKAY') //calling this state updating function not just to change the value (title) but also to rerender (rerun) this component (ExpenseItem) function 
    // }

    return(   // in {} you can run js expressions we have added dynamic values here
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change Title</button> */}
        </Card> 
    )
}

export default ExpenseItem