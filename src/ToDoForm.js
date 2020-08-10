import React from 'react';

const ToDoForm = ({addItem, handleChange, currentTodo} ) => {
   // const {addItem, handleChange, currentTodo} = props;
  return(
    <form onSumit={addItem}>
    <label htmlFor="tastName">Task Name:</label>
    <input 
    onChange={handleChange}
     name="taskName"
     type="text"
     value={currentTodo}
     placeholder="Add todo here!"
     />
    <button type="submit">Add Task</button>
  </form>
  )  

}
export default ToDoForm;