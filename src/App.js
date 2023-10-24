import { useState } from 'react';
import './App.css';
import TodoFooter from './components/TodoFooter';
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { TodoContext } from './context/TodoContext';


function App() {

  const [arrTodoList, setArrTodoList] = useState([]);


  return (
    <TodoContext.Provider value={arrTodoList} >
      <TodoHeader />
      <TodoInput setArrTodoList={setArrTodoList} />
      <TodoList />
      <TodoFooter />
    </TodoContext.Provider>

  );
}

export default App;
