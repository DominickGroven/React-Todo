import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css';


const list = [
  {
    task: "workout",
    id: 1235,
    completed:false
  }
]
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      list: list
    }
  }

  addTask = taskName => {
    this.setState({
      list:[...this.state.list, {task: taskName, id: Date.now(), completed:false}]
    })
  }

  toggleList = taskId => {
    this.setState({
      list: this.state.list.map(task => {
        if (task.id === taskId){
          return{
            ...task, 
            completed: !task.completed
          }
        }
      })
    })
  }

  clearCompleted = e =>{
    this.setState({
      list:this.state.list.filter(task=>{
        return !task.completed
      })
    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask}/>
        <TodoList clearCompleted={this.clearCompleted} toggleList={this.toggleList} list={this.state.list}/>
      </div>
    );
  }
}

export default App;
