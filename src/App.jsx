import React, { Component } from 'react';
import './App.css';
import { data } from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

console.log('App.js', data);

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={data} />
      </div>
    );
  }
}

export default App;
