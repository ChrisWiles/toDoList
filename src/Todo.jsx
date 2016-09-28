import React from 'react';

const Todo = ({todo, remove}) => {
  // Each Todo
  return (
    <h5>
      <p className="text-info">
        <li onClick={() => remove(todo.id)}>
          {todo.text}
        </li>
      </p>
    </h5>
  );
}

export default Todo;
