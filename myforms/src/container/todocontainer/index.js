import  React from 'react';
import Todo from '../components/Todolist';
const todoList=[
    {id:1,title: 'My List',done:true},
    {id:2,title: 'Craete a todo list',done:false},
]
const TodoContainer=()=>{
    return (<div style={{ margin: 20 }}>
       <h4 align="center">Todo List</h4>
       {todoList.map((todo)=><Todo todo={todo} />)}
       {/* <Todo/> */} 
    </div>)
}

export default TodoContainer