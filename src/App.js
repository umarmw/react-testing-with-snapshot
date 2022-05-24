import React, { Component } from 'react';
import Books from './books';

class App extends Component {
  render() {
    const books = [
      'Harry Potter',
      'The Lord of the Rings',
      'The City of Dreaming Books'
    ];
    return (
      <div className="App">
        <Books books={books} />
      </div>
    );
  }
}

export default App;