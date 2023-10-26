import React, { useState } from 'react'



const TodoList = ({arrTodoList, setArrTodoList}) => {

  
  const [isWriteable, setisWriteable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  

  const handleClick = () => {
    
    setisWriteable(true);
  }


  const handleChange = (event, item) => {
    let temp = arrTodoList;
    const index = temp.indexOf(item);    
    temp[index].value = event.target.value;
    setArrTodoList([...arrTodoList]);
    console.log('item',item)
  }

  const handleKeyDown = (event) => {
    
    if(event.key === "Enter") {
      setisWriteable(false); // 매개변수로 event를 넣어줘야 한다.
    }
  }


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

  const handleCheck = (event) => {
    setIsChecked(event.target.checked);
    const listAreaCheckEl = document.querySelector('.listArea');
    
    if(!isChecked ? listAreaCheckEl.classList.add('checked') : listAreaCheckEl.classList.remove('checked'));
    
  }



  if(arrTodoList.length === 0) {
    return (
    <div className='container container-notice'>
      <img src="/images/osume.png" alt="osume" />
      <div id='text' className='container text-notice' onClick={() => onFocus()}>할일을 입력하세요...</div>
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
              <div className='list'>
                <textarea 
                  className='listArea' 
                  disabled={false}
                  value={item.value}
                  readOnly={!isWriteable}
                  onClick={() => handleClick(item)}
                  onChange={(e) =>handleChange(e, item)}    
                  onKeyDown={handleKeyDown}   
                >
                </textarea>
              </div>
              <input className='input-check' type='checkbox' onChange={handleCheck} />
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

