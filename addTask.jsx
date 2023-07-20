import React from 'react'

const addTask = () => {
  return (
    <div className='add-task-container'>
      <div>
        <h1>Add new task</h1>
        <div>
            <input type="text"placeholder='title' />
        <textarea cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
  )
}

export default addTask
