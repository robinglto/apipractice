import React from 'react'
import { Getrecursos } from './Components/Getrecursos';
import { Clasificaciones } from './Components/Clasificaciones';
import { Data } from './Components/Data';

function App() {
  return (
    <div>
        <Data/>
        <Clasificaciones/>
        <Getrecursos />
    </div>
  );
}

export default App;