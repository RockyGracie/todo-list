import React from 'react';

const Form = ({ todoList, setTodoList, value, setValue }) => {

   const createTodoHandler = (e) => {
      e.preventDefault();

      setTodoList([
         ...todoList,
         {text: value, completed: false, id: Math.random() * 1000}
      ]);

      setValue('');
   };

   // const selectHandler = (e) => {
   //    const filter = e.target.value;
      
   //    if(filter === 'completed') 
   // };

   return (
      <form className="form-container" onSubmit={createTodoHandler}>
         <div className="form-input">
            <input 
               autoFocus
               type="text"
               placeholder="Create todo..."
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">
               <i className="fas fa-plus"></i>
            </button>
         </div>
         <div className="form-select">
            <select>
               <option value="all">All</option>
               <option value="completed">Completed</option>
               <option value="uncompleted">Uncompleted</option>
            </select>
         </div>
      </form>
   );
};

export default Form;