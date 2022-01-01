import React, { useState } from 'react'
import './App.css';
import Header from './components/Header';
import BFS from './components/BFS';
import DFS from './components/DFS';
import Dijkstra from './components/Dijkstra';

function App() {
  const [focus, setFocus] = useState(1)

  return (
    <div className="App">
      <Header setFocus={setFocus} />
      <div className="App-body">
        <AlgoToggle focus={focus} />
      </div>
    </div>
  );
}

const AlgoToggle = ({ focus }) => {
  switch (focus) {
    case 1:
      return <BFS />
    case 2:
      return <DFS />
    case 3:
      return <Dijkstra />
    default:
      return null
  }
}

export default App;
