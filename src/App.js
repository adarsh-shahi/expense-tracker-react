import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react'

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),   // returns an object
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),  
  },
];

function App() {

  const [initialExpenses, setExpenses] = useState(expenses)

  const onAddDataHandler = (newData) => {
    setExpenses((previousStateExpenses) => {
      return [newData, ...previousStateExpenses]
    })
    
  }
    
  return (
    <div>
      <NewExpense onAddData={onAddDataHandler}/>
      <Expenses items={initialExpenses} /> 
    </div>
  );
}

export default App; 
