import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {


    return (
        <div className="App">
          <header>
            <form id="to-do-form" onSubmit={this.addItem}>
              <input type="text" placeholder="Enter task"  ></input>
              <button type="submit">Add</button>
            </form>
          </header>
        </div>
      );
    }
  }

export default App;
