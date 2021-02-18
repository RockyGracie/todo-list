import React, { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header';
import Form from './components/Form';

const App = () => {

  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
};

export default App;
