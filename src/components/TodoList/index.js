import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

const TodoList = () => {
  const value = useContext(TodoContext);
  console.log('value',value);
  return (
    <div className='container'>
      <div className='container todoList'>
        {value.map(item => <div className='lists'>{item}</div>)}
      </div>
    </div>
  )
}

export default TodoList