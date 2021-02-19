import React from 'react';

const Form = ({ value, todoList, setValue, setFilter, setTodoList, setFilteredList }) => {

   const createTodoHandler = (e) => {
      e.preventDefault();

      if (value.length !== 0) {
         setTodoList([
            ...todoList,
            {text: value, completed: false, id: Math.random() * 1000}
         ]);
      }      
      
      setFilteredList(todoList);

      setValue('');
   };

   const selectHandler = (e) => setFilter(e.target.value);

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
            <select onChange={selectHandler}>
               <option value="all">All</option>
               <option value="completed">Completed</option>
               <option value="uncompleted">Uncompleted</option>
            </select>
         </div>
      </form>
   );
};

export default Form;