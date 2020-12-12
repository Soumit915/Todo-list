import React from "react";
import {v1 as uuid} from "uuid"; 
import "bootstrap/dist/css/bootstrap.css";
import TodoInput from "./components/TodoInput.js";
import Todolist from "./components/Todolist.js";
import TodoItem from "./components/TodoItem.js";

class App extends React.Component
{
  state={
    tododata: [],
    todo_input: "",
    hasText: false,
    editItem: false
  }

  controlInput = (event) => {
    var currentText = event.target.value;
    this.setState({
        todo_input: currentText,
        hasText: (currentText!=="")});
  }

  submit = (event) => {
    event.preventDefault();
    this.id = uuid();
    this.todoitem = this.state.todo_input.charAt(0).toUpperCase() + this.state.todo_input.substring(1)
    this.newtodo = {
        id: this.id,
        item: this.todoitem
    };
    const newtododata = [...this.state.tododata, this.newtodo];

    this.setState({
        tododata: newtododata,
        todo_input: "",
        hasText: false,
        editItem: false
    });
  }

  deleteItem = (id) => {
    this.newtododata = this.state.tododata.filter((item) => {
      if(item.id!==id)return item
      else return null;
    });
    this.setState({tododata: this.newtododata});
  }

  deleteFullList = () => {
    this.setState({tododata: []});
  }

  controlEdit = (id) => {
    this.newinput = this.state.tododata.filter((item) => {
      if(item.id===id)return item
      else return null;
    });
    this.newtododata = this.state.tododata.filter((item) => {
      if(item.id!==id)return item
      else return null;
    });

    this.setState({
      tododata: this.newtododata,
      todo_input: this.newinput[0].item,
      hasText: true,
      editItem: true
    });
  }

  render()
  {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <TodoInput todo_input={this.state.todo_input} 
            hasText={this.state.hasText}
            submit={this.submit}
            editItem={this.state.editItem} 
            controlInput={this.controlInput} ></TodoInput>
            <div>
              <h3 class="text-center text-capitalize mt-5">todo list</h3>
            </div>
            
              {
                this.state.tododata.map((item) => {return <TodoItem item={item}
                                            deleteItem={this.deleteItem}
                                            controlEdit={this.controlEdit}></TodoItem>})
              }
              <Todolist deleteFullList={this.deleteFullList}></Todolist>
            
          </div>
        </div>
      </div>
    );
  }
}

export default App;