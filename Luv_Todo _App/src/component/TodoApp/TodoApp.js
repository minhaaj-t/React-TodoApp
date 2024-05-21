import React, { Component } from "react";
import "./TodoApp.css";
export default class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };

  handleChange = (event) => {
    this.setState({
      input: event.target.value,
    });
    console.log(this.state.input);
  };

  storeitems = (event) => {
    event.preventDefault();
    const { input } = this.state;
    const allitems = this.state.items;

    allitems.push(input);

    this.setState({
      items: allitems,
      input: "",
    });
  };

  deleteItem = (key) => {
    const allitems = this.state.items;

    allitems.splice(key, 1);

    this.setState({
      items: allitems,
    });
  };

  render() {
    const { input, items } = this.state;
    console.log(items);
    return (
      <div className="todo-container">
        <form className="input-section sticky-top" onSubmit={this.storeitems}>
          <h1>Todo App</h1>
          <input
            type="text"
            value={input}
            onChange={this.handleChange}
            placeholder="Enter Items..."
          />
        </form>
        <ul>
          {/* <li>
            Items <i className="fa-regular fa-trash-can"></i>
          </li> */}

          {items.map((data, index) => (
            <li key={index}>
              {data}
              <i
                className="fa-regular fa-trash-can"
                onClick={() => this.deleteItem(index)}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
