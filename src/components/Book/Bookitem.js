import React from 'react'
import './Book.css'
export default function Bookitem(props) {
  return (
    <li className='Book'>
      {props.itemName}
    </li>
  )
}
