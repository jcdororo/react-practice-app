import React, { useState } from 'react'



const TodoList = ({arrTodoList, setArrTodoList}) => {

  
  const [isWriteable, setisWriteable] = useState(false);
  

  const handleClick = () => {
    
    setisWriteable(true);
  }


  const handleChange = (event, item) => {
    let temp = arrTodoList;
    const index = temp.indexOf(item);    
    temp[index].value = event.target.value;    
    localStorage.setItem('list',JSON.stringify([...arrTodoList]));
    setArrTodoList([...arrTodoList]);
  }

  const handleKeyDown = (event) => {
    
    if(event.key === "Enter") {
      setisWriteable(false); // 매개변수로 event를 넣어줘야 한다.
    }
  }

  // 삭제버튼
  const onRemove = (id) => {
    const filter = arrTodoList.filter(list => list.id !== id)

    localStorage.setItem('list',JSON.stringify(filter));
    setArrTodoList(filter);
  }
  // 최신 순 정렬 버튼
  const onDownset = (arrTodoList) => {
    const temp = [...arrTodoList];
    setArrTodoList(temp.sort((a, b) => b.id - a.id));
  }

  // 오래된 순 정렬 버튼
  const onUpset = (arrTodoList) => {
    const temp = [...arrTodoList];
    setArrTodoList(temp.sort((a, b) => a.id - b.id));
  }
  
  const onFocus = () => {
    const areaEl = document.getElementById('area'); 
    const textEl = document.getElementById('text');
    textEl.addEventListener('click', areaEl.focus());
  }
  // 체크 버튼
  const handleCheck = (event, index, item) => {
    const check = event.target.checked; 
    
    const filter = arrTodoList.filter(list => list.id === item.id)
    filter[0].check = check;
    const temp = [...arrTodoList.slice(0,index),
                  ...arrTodoList.slice(index,index+1),
                  ...arrTodoList.slice(index+1) ]
    localStorage.setItem('list',JSON.stringify(temp));
    setArrTodoList(temp);

    

    
  }



  if(arrTodoList.length === 0) {
    return (
    <div className='container container-notice'>
      <img src="https://jcdororo.github.io/react-practice-app/images/osume.png" alt="osume" />
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
                  spellCheck={false}
                >
                </textarea>
                <div className={`list-Background ${item.check ? 'checked' : ''}`}></div>
              </div>
              <input 
                className= 'input-check'
                type='checkbox' 
                onChange={(e) => handleCheck(e, index, item)} 
                checked={item.check ? true : false }
              />
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

