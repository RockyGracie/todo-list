import React from 'react'

const Todo = ({ text, todo, todoList, setTodoList }) => {
   const completeHandler = () => {

   };

   const deleteHandler = () => {
      setTodoList(todoList.filter(todoEl => todoEl.id !== todo.id));
   };

   return (
      <div className="todo">
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
