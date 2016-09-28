import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, remove}) => {
  // Map through the todos
  const todoNode = todos.map((todo, i) => {
    return (
      <Todo
        todo={todo}
        key={i}
        remove={remove}
      />
    )
  });
  return (
    <ul>{todoNode}</ul>
  );
}

export default TodoList;
