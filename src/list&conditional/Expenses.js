import React, { useState} from 'react';

import { ExpenseItem } from './ExpenseUpdate'
import { Card} from './Card';
import { ExpensesFilter } from './NewExpense/ExpensesFilter';
import './Expenses.css';
import { ExpensesChart } from './ExpensesChart';
import { ExpensesList} from './ExpensesList';

export const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
   return expense.date.getFullYear().toString() === filteredYear
  })

  // let expensesContent = <p>No expenses found.</p>
  // if (filteredExpenses.length > 0){
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem 
  //             key={expense.id}
  //             title={expense.title} 
  //             amount={expense.amount} 
  //             date={expense.date}
  //     />
  //   ))
  // }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />

        {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {filteredExpenses.length > 0 && 
          filteredExpenses.map((expense) => (
            <ExpenseItem 
              key={expense.id}
              title={expense.title} 
              amount={expense.amount} 
              date={expense.date}
          />
        ))
      } */}
      
      <ExpensesList items={filteredExpenses}/>
      <ExpensesChart expenses={filteredExpenses} />
        
      </Card>
    </div>
  );
};


export default Expenses;