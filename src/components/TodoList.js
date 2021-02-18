import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList }) => {

   console.log(todoList);

   return (
      <div className="todo-container">
         <ul className="todo-list">
            {todoList.map(todo => (
               <Todo key={todo.id} text={todo.text} />
            ))}
         </ul>
      </div>
   );
};

export default TodoList;