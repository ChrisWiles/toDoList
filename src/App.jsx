import React, {Component} from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
    this.handleRemove = this.handleRemove.bind(this)
    this.addTodo = this.addTodo.bind(this)
  }
  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = {
      text: val,
      id: Math.random()
    }
    // Update data
    this.state.data.push(todo);
    // Update state
    this.setState({data: this.state.data});
  }
  // Handle remove
  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if (todo.id !== id)
        return todo;
      }
    );
    // Update state with filter
    this.setState({data: remainder});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>App</h2>
        </div>
        {/* <Title/> */}
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.state.data} remove={this.handleRemove}/>
      </div>
    );
  }
}

export default App;
