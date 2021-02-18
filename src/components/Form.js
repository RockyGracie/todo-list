import React from 'react';

const Form = () => {
   return (
      <form className="form-container">
         <div className="form-input">
            <input 
               autoFocus
               type="text"
               placeholder="Create todo..."
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