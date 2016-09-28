import React from 'react';

const TodoForm = ({addTodo}) => { //  destructured
  // Input tracker
  let input;

  return (
    <div className="form-group">
      <input className="form-control" ref={node => input = node}/>
      <button className="btn btn-default" onClick={() => {
        addTodo(input.value);
        input.value = '';
      }}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;
