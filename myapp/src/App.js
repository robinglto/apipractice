import React from 'react'
import { Getrecursos } from './Components/Getrecursos';

import { Clasificaciones } from './Components/Clasificaciones';

function App() {
  return (
    <div>
        <h1 className="mt-28 mb-28 font-mono subpixel-antialiased text-6xl flex justify-center text-center">The Rick and Morty API</h1>
        <Clasificaciones/>
        <Getrecursos />
    </div>
  );
}

export default App;



// const name = `Saul Perez`;
// const elemento = <h1>Hola, ${name}</h1>
// function App() {
//   return (
//     <div className="text-center ">
//        <h1>Hola a  {name}</h1>
//     </div>
//   );
// }

// export default App;
