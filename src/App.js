import React from "react";

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from "./Components/Header";
import GameBoard from "./Components/GameBoard";




const App = ()=>{
 
  
   
    return(

      
   
        <div className="App">
          <Header />
          <GameBoard />
      {/* // //   <div className="header">Tic tac toe</div>
      //   <div className="board">
      //     {GridRow}
      //     {GridRow}
      //     {GridRow}
      //   </div>
      //   <div className="turn"></div> */}
       </div>

    );
  
}


export default App;
