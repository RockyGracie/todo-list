import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

const App = () => {

  const [value, setValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    filteredTodoHandler();
  }, [filter, todoList]);

  const filteredTodoHandler = () => {
    if (filter === 'completed') 
      return setFilteredList(todoList.filter(todoEl => todoEl.completed === true ));
    
    if (filter === 'uncompleted')
      return setFilteredList(todoList.filter(todoEl => todoEl.completed === false ));
    
    return setFilteredList(todoList);
  };

  return (
    <div className="App">
      <Header />
      <Form 
        value={value}
        filter={filter}
        todoList={todoList}
        setValue={setValue}
        setFilter={setFilter}
        setTodoList={setTodoList}
        setFilteredList={setFilteredList}
      />
      <TodoList
        todoList={todoList}
        filteredList={filteredList}
        setTodoList={setTodoList}
      />
    </div>
  );
};

export default App;
