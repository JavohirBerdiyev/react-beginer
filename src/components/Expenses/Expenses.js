import React from 'react'
import Card from '../UI/Card'
import ExpensesItem from './ExpensesItem'
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className='expenses'>
      {props.items.map(item => {
        let {title, amount, date,id} = item
        return <ExpensesItem
          key={id}
          title={title}
          amount={amount}
          date={date}
       />
      })}
    </Card>
  )
}

export default Expenses