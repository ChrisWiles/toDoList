import React from 'react'

const TodoForm = ({addTodo}) => { //  destructured
  // Input tracker
  let input

  const handleClick = () => {
    addTodo(input.value)
    input.value = ''
  }

  return (
    <div className="form-group">
      <input className="form-control" ref={node => input = node}/>
      <span className="input-group-btn">
        <button className="btn btn-default" onClick={handleClick}>Add</button>
      </span>
    </div>
  )
}

export default TodoForm
