import React from 'react'

const TodoList = ({arrTodoList, setArrTodoList}) => {

  

  const onRemove = (id) => {

    setArrTodoList(arrTodoList.filter(list => list.id !== id));
  }


  return (
    <div className='container'>
      <ul className='container todoLists'>
        {arrTodoList.map((item, index) => 
          <li key={item.id} className='container todoList'>
            <div className='list'>{item.value}</div>
            <input className='input-check' type='checkbox'/>
            <button className='btn btn-delete' 
              onClick={() => onRemove(item.id)}>삭제</button>
          </li>
        )}
      </ul>
    </div>
  )
}

export default TodoList