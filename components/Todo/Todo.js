import React from "react";
import Buttons from './Buttons'

const Todo = (props) => 
(<div>
<div style={{
    textDecoration: props.todo.complete ? "line-through" : "",
    backgroundColor: props.todo.complete ? "lime": "red"
}} onClick={props.toggleComplete}>{props.todo.text}

</div>

<Buttons deleteCompletely ={props.deleteCompletely}/>
</div>


);


export default Todo;
