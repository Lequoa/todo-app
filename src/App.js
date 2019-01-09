import React from 'react';

import TodoList from './components/TodoList';
import Header from './components/header';
import Form from './components/Form';

var todoItems = [];

class App extends React.Component {
  
  state = {
    todoItems : [],
    error : undefined
  }


  addItem = async (e) => {
    e.preventDefault();

    const task = e.target.elements.task.value;

    if (task) {
      
      todoItems.unshift({  index: todoItems.length + 1,
                           value: task });

      this.setState({
        todoItems: todoItems,
        error : ""
      });

      e.target.elements.task.value = "";
    
    } else {

        this.setState({
          todoItems: "",
          error : "Please enter the values before adding the task"
        });

    }
  }

  clearForm = async (e) => {
    e.preventDefault();

  }

  doneItem = async (e, itemIndex) => {
    todoItems.splice(itemIndex, 1);
    this.setState({
      todoItems : todoItems,
      error : ""
    });
  }
  
  render() {
    return (
      <div>
        <div className ="wrapper">
          <div className ="main">
            <div className ="container-fluid">
              <div className ="row">
                <div className ="col-md-4 header-container">
                  <Header />
                </div>
                <div className ="col-md-8 todo-container">
                  
                  <Form addItem = { this.addItem  } 
                        clearForm = { this.clearForm } />

                  <TodoList error = {  this.state.error }
                            items = { this.state.todoItems }
                            doneItem = { this.doneItem } />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
};

export default App;