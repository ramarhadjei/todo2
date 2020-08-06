import React, {Component} from 'react'

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentToDo:"",
    };
  }

  //This is where the methods go
  handleChange = event => {
    console.log(event.target.value)

  };

  addItem = event => {
    event.preventDefault();
    console.log("addItem Method fired")
  };
  render(){
    return (
      <div className='container'>
        <form onSummit={this.addItem}>
          <label htmlFor="tastName">Task Name:</label>
          <input onChange={this.handleChange} name="taskName"type="text"placeholder="Add todo here!"/>
          <button type="submit">Add Task</button>
        </form>

      </div>
    );
  }
}
export default TodoList;