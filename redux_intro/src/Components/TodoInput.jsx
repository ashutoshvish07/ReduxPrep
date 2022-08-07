import React, { useState } from 'react'

const TodoInput = ({addTodo}) => {
    const [value, setvalue] = useState('')
    const handleChange = (e)=>{
        setvalue(e.target.value)
    }

const handleClick =()=>{
 const payload={
    title:value,
    status:false
 }
 addTodo(payload)
 setvalue('')
}    
  return (
    <div>

        <input type="text" value={value} onChange={handleChange}/>
        <button onClick={handleClick}>Add Todo</button>
    </div>
  )
}

export default TodoInput