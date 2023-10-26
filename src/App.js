import { useState } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


function App() {

  const [arrTodoList, setArrTodoList] = useState([]);


  return (
    <div>
      <TodoHeader />
      <TodoInput arrTodoList={arrTodoList} setArrTodoList={setArrTodoList} />
      <TodoList arrTodoList={arrTodoList} setArrTodoList={setArrTodoList} />
      <TodoFooter />
    </div>

  );
}

export default App;
