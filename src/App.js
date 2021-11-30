import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class App extends React.Component {
  //STEP 2::: TO CREATE STATE = MAKE A CONSTRUCTOR
  constructor() {
    super();

    this.state = {
      todos: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  //STEP 1::: BUILD BASIC PAGE APP FOR THE DOM

  handleClear = () =>{
    //1 - set state!
    //2 - loop thru the todos 
    //3 - remove all todos that completed === true 
    //4 - save filtered to state
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return (todo.completed === false);
      })
    });
  }

  handleAdd = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    });
  }

  handleToggle = (myId) => {
    //1 set state 
    //2 change todos 
    //3 find the todo that we clicked on 
    //4 flip the value of completed 
    //5 keep all other todos the same
    this.setState({
      ...this.state, 
      todos: this.state.todos.map(todo=> {
        if (todo.id === myId){
          return {
            ...todo, 
            completed: !todo.completed
          }
        }
        return todo
      })
    })

  }

  render() {
    
    const { todos } = this.state;
    console.log(todos)
    return (
      <div>

        <h1>To Do</h1>
        <TodoList handleToggle={this.handleToggle} todos={todos}/>
        <TodoForm handleAdd={this.handleAdd}/>
        <button onClick={this.handleClear}>Delete All</button>
        
      </div>
    );
  }
}

export default App;
