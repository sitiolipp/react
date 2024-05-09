// import logo from './piyak.png';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>OEEEE EXOLL !!!</h1>
//         <img src={logo} className="App-piyak" alt="logo"></img>
//         <img src={logo} className="App-piyak" alt="logo"></img>
//         <p>
//           We Are One SARANGHAJA
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import ToDo from "./containers/ToDo";

const App = () => {
  return (
    <div className='App'>
      <ToDo />
    </div>
  );
}

export default App;