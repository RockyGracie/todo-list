import React from 'react'

const Todo = ({ todo, todoList, setTodoList }) => {
   
   const completeHandler = () => {
      setTodoList(todoList.map((todoEl) => {
         if (todoEl.id === todo.id) {
            return {
               ...todo, completed: !todo.completed
            };
         };

         return todoEl;
      }));
   };

   const deleteHandler = () => {
      setTodoList(todoList.filter(todoEl => todoEl.id !== todo.id));
   };

   return (
      <div className={todo.completed ? 'todo completed' : 'todo'}>
         <li>{todo.text}</li>
         <button className="complete-btn" onClick={completeHandler}>
            <i className="fas fa-check"></i>
         </button>
         <button className="trash-btn" onClick={deleteHandler}>
            <i className="fas fa-trash"></i>
         </button>
      </div>
   )
}

export default Todo;
