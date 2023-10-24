import React, { useContext, useState } from 'react'
import { TodoContext } from '../../context/TodoContext';

  const TodoInput = ({setArrTodoList}) => {

  const [inputValue, setInputValue] = useState('');

  
  const value = useContext(TodoContext);

  console.log(value)
  

  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setArrTodoList([...value, inputValue]);
  
    setInputValue('');
  }

  return (
    <div>
      <div className='container'>        
      <form onSubmit={handleSubmit}>

        <div className='container areaField'>
          
            <textarea 
              placeholder='할일 입력하기...' 
              className='container area'
              value={inputValue}
              onChange={handleChange}
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