import React, { Component } from 'react';
import "./App.css";
import Expenses from './components/Expenses/Expenses';
import expenses from './expenses';
// rcfc
class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className='App'>
        <Expenses items={expenses} />
      </div>
    );
  }

}
export default App;
