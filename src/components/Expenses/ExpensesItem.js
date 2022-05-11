import React from 'react'
import Card from '../UI/Card'
import './ExpenseItem.css'
import ExpensesDate from './ExpensesDate'

function ExpensesItem(props) {
  let {title, amount, date } = props;
  return (
    <Card className="expense-item">
      <ExpensesDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </Card>
  )
}

export default ExpensesItem