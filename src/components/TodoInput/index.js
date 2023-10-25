import React, { useState } from 'react'

  const TodoInput = ({arrTodoList, setArrTodoList}) => {

  const [inputValue, setInputValue] = useState('');


  

  const handleChange = (event) => {  
    setInputValue(event.target.value)
  }
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // 빈칸일 때 리스트에 추가 되면 안된다.
    if(inputValue != ''){
      const newValue = {
        id: Date.now(),
        value: inputValue
      }
      const inputList = [...arrTodoList, newValue]
      setArrTodoList(inputList);
    }
    setInputValue('');
  }


  

  
  const handleKeyDown = (event) => {
    
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
              id='area'
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
            >추가</button>
          
        </div>
      </form>
      </div>
    </div>
  )
}

export default TodoInput

