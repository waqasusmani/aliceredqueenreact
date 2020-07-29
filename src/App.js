import React, {useState} from 'react';
import './App.css';
import Main from './components/Main.js'

function App() {
  const pbRate = useState(1);
  return (
    <div className='wrapper'>
      <Main pbRate={pbRate}/>
    </div>
  );
}

export default App;
