import React, {Component} from 'react'
import TaskList from './TaskList';
import ToDoForm from './ToDoForm';

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentToDo:'',
    };
  }

  //This is where I'm going to code the handleChange method the methods go
  handleChange = event => {
    //console.log(event.target.value)
    this.setState({
      currentToDo: event.target.value,

    })
    //console.log(this.state.currentToDo);
  };
//this is where I am going to code the addItem method
  addItem = event => {
    event.preventDefault();
   // console.log("addItem Method fired")
   if(this.state.currentToDo !==''){
     this.setState({
       currentToDo: "",
       //ES6 Workshop-spread operator. Can also push it in
       todos: [...this.state.todos, this.state.currentToDo]

     })

   }
  };

  deleteItem = (idx) => {
    //console.log(idx)
    const filteredItems = this.state.todos.filter((el, index) => {
      return index !== idx
    })
    //console.log(filteredItems)
    this.setState({
      todos: filteredItems,
    })
  }

  render(){
       return (
      <div className='container'>
        <ToDoForm handleChange={this.handleChange} addItem={this.addItem} currentToDo={this.state.currentToDo}/>
<TaskList todos={this.state.todos} deleteItem={this.deleteItem}/>

      </div>
    );
  }
}
export default TodoList;