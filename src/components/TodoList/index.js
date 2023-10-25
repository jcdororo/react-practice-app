import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

const TodoList = ({arrTodoList}) => {
  // const value = useContext(TodoContext);
  // console.log('value',value);
  return (
    <div className='container'>
      <div className='container todoLists'>
        {arrTodoList.map((item, index) => 
          <div key={index} className='container todoList'>
            <div className='list'>{item}</div>
            <input className='input-check' type='checkbox'/>
            <button className='btn btn-delete'>삭제</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TodoList