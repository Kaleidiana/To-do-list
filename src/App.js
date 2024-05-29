import React from 'react';
import './App.css';
import List from './components/List.js';
import Editt from './components/Editt.js';
import Todo from './components/Todo.js';

function App() {
  return (
    <div className="App">
      <List />
      <Editt />
      <Todo />
    </div>
  );
}

export default App;

