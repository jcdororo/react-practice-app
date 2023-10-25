import React from 'react'



const TodoList = ({arrTodoList, setArrTodoList}) => {

  

  const onRemove = (id) => {

    setArrTodoList(arrTodoList.filter(list => list.id !== id));
  }


  if(arrTodoList.length === 0) {
    return (
    <div className='container'>
      <img src="/images/osume.png" alt="osume" />
      <div className='container'>할일을 입력하세요...</div>
    </div>
    ) 
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

