import React from 'react'

const Todo=({todo})=>{
    console.log(todo)
    return (<div>
        <input type="checkbox" />
        <span>{todo.title}</span>
        <span style={{position:"fixed",
        right:20,
        padding:"0 10px",
        cursor:"pointer",
        fontWeight:600}}>
            X</span>
        Todo component
    </div>)
}

export default Todo