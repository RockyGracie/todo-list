import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {

  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form 
        todoList={todoList}
        setTodoList={setTodoList}
        value={value}
        setValue={setValue}
      />
      <TodoList
        todoList={todoList}
      />
    </div>
  );
};

export default App;
