import { useState } from 'react';
import MoleContainer from './MoleContainer';
import './App.css'


function App() {

  let [score,setScore] = useState(0)

  const createMoleHill = () => {
    let hills = [];
    for(let i = 0; i < 9; i++){
      hills.push(
      <MoleContainer
      key={i}
      setScore={setScore}
      score={score}
      />
      )
    }

    return (
      <div>
        {hills}
      </div>
    )
  }
  return (
    <div className="App">
      <h1>Click-a-Mole!</h1>
      <b>   {score}</b>
      {createMoleHill()}
    </div>
  );
}

export default App;
