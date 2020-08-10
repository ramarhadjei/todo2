import React from 'react';

const TaskList = ({todos, deleteItem}) => {
    //const {todos, deleteItem} = props;
return(
    <ul>
  {todos.map((el,idx) => {
    return(
      <li key={idx}>
        {el}
        <button type="button" onClick={() => this.deleteItem(idx)} ></button>
      </li>
    )
  })}
</ul>
)


}
export default TaskList;