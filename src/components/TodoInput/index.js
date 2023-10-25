import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../../context/TodoContext';

  const TodoInput = ({arrTodoList, setArrTodoList}) => {

  const [inputValue, setInputValue] = useState('');

  
  const value = useContext(TodoContext);

  

  const handleChange = (event) => {  
    console.log('handleChange 클릭됨')
    setInputValue(event.target.value)
  }
  
  
  const handleSubmit = (event) => {
    console.log('handleSubmit 클릭됨')
    event.preventDefault();
    // 빈칸일 때 리스트에 추가 되면 안된다.
    if(inputValue != ''){
      setArrTodoList([...arrTodoList, inputValue]);
    }
    setInputValue('');
  }


  

  const handleClick = () => {
    console.log('handleClick 클릭됨')
  }

  const handleKeyDown = (event) => {
    console.log('handleKeyDown 클릭됨')
    
    if(event.key === "Enter") {
      handleSubmit(event); // 매개변수로 event를 넣어줘야 한다.
    }
  }

  return (
    <div>
      <div className='container'>        
      <form 
        onSubmit={handleSubmit}
      >

        <div className='container areaField'>
          
            <textarea 
              placeholder='할일 입력하기...' 
              className='container area'
              value={inputValue}
              onChange={handleChange}   
              onKeyDown={handleKeyDown}    
              rows='1'
            >
              
            </textarea>
            <button 
              className='btn'
              onClick={handleClick}
            >추가</button>
          
        </div>
      </form>
      </div>
    </div>
  )
}

export default TodoInput