import React, { useState } from 'react'

const TodoInput = () => {

  const [inputValue, setInputValue] = useState('');


  const handleChange = (event) => {
    setInputValue(event.target.value);
  }


  return (
    <div>
      <div className='container'>        
        <div className='container areaField'>
          <textarea 
            placeholder='할일 입력하기...' 
            className='container area'
            value={inputValue}
            onChange={handleChange}
          >
            
          </textarea>
          <button className='btn'>추가</button>
        </div>
      </div>
    </div>
  )
}

export default TodoInput