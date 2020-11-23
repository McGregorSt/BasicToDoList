import React from 'react'
import './NewToDo.css'

export default function NewToDo({ btnClicked, name, desc }) {

    

    return (
        <div className='newToDo'>
            <h3>New To Do</h3>
            <label>Name</label>
            <input onChange={name}/>
            <label>Description</label>
            <textarea className='desc' onChange={desc}/>
            <button onClick={btnClicked}>Add this To Do</button>
        </div>
    )
}
