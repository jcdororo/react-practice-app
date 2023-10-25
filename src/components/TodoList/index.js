import React from 'react'



const TodoList = ({arrTodoList, setArrTodoList}) => {

  

  const onRemove = (id) => {

    setArrTodoList(arrTodoList.filter(list => list.id !== id));
  }

  const onDownset = (arrTodoList) => {
    const temp = [...arrTodoList];
    

    setArrTodoList(temp.sort((a, b) => b.id - a.id));

  }


  const onUpset = (arrTodoList) => {
    
    const temp = [...arrTodoList];
    setArrTodoList(temp.sort((a, b) => a.id - b.id));
  }
  
  const onFocus = () => {
    const areaEl = document.getElementById('area'); 
    const textEl = document.getElementById('text');
    textEl.addEventListener('click', areaEl.focus());
  }

  if(arrTodoList.length === 0) {
    return (
    <div className='container'>
      <img src="/images/osume.png" alt="osume" />
      <div id='text' className='container' onClick={() => onFocus()}>할일을 입력하세요...</div>
    </div>
    ) 
  }


  return (
    <div>
      <div className='sortButtons'>
        <button 
          className='btn'
          onClick={() => onDownset(arrTodoList)}
        >
          최신 순 정렬</button>
        <button 
          className='btn'
          onClick={() => onUpset(arrTodoList)}
        >
          오래된 순 정렬</button>
      </div>
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
    </div>
  )
}

export default TodoList

