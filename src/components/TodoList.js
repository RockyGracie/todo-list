import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, filteredList, setTodoList }) => {

   return (
      <div className="todo-container">
         <ul className="todo-list">
            {filteredList.map(todo => (
               <Todo 
                  key={todo.id} 
                  todo={todo} 
                  todoList={todoList}
                  setTodoList={setTodoList}    
               />
            ))}
         </ul>
      </div>
   );
};

export default TodoList;