import React from 'react'
import { Link } from 'react-router-dom'
const List = () => {
  return (
    <div className='list-disc'>
    <Link to="/list/item1" className='list-item'>Item</Link>
    <Link to="/list/item2" className='list-item'>Item</Link>
    <Link to="/list/item3" className='list-item'>Item</Link>

    
    
    </div>
  )
}

export default List