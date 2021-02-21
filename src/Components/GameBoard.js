import { useState } from "react";
import Square from "./Square";

const GameBoard=()=>{

          const [currentPlayer, setCurrentPlayer] = useState("X");

          const [moves, setMoves] = useState(0);

          const [gameActive, setGameActive] = useState("true");

          const [message, setMessage] = useState("");

          const emptyGame = 
            [
            {value: null},
            {value: null},
            {value: null},
            {value: null},
            {value: null},
            {value: null},
            {value: null},
            {value: null},
            {value: null}
            ]
            

          const [gameState,setGameState] = useState(emptyGame);

          const winningCondidtions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
            ]



            const checkWinOrDraw = ()=>{
                  let win = false;

                  for(let i=0; i<winningCondidtions.length; i++){
        
                        const winningCondidtion = winningCondidtions[i];
            
                        let a = gameState[winningCondidtion[0]].value;
                        let b = gameState[winningCondidtion[1]].value;
                        let c = gameState[winningCondidtion[2]].value;
            
                        if( a===null || b===null || c===null){
                            continue;
                        }
                        if(a===b && b===c){
                            win =  true;
                            break;
                        }
            
                    }

                  // if((gameState[0].value === gameState[1].value && 
                  //       gameState[1].value === gameState[2].value) && (gameState[0].value !== null)){
                  //       win = `player ${currentPlayer} won`;
                  // }

                  return win;
            }

            const setvalues=()=>{
                  setMoves(0);
                  setGameState(emptyGame);
                  setCurrentPlayer("X");
                  setMessage("");
                  setGameActive(true);
            }

            const excuteMove = index =>{
                  let newGameState = gameState;
                 
                  if(gameState[index].value === null && gameActive){
                         gameState[index].value = currentPlayer;
                         setGameState(newGameState);
                         let nextPlayer = currentPlayer ===  "X" ? "O" : "X";
                         setCurrentPlayer(nextPlayer);
                         let result = checkWinOrDraw();
                         
                        let currentMoves = moves+1;
                        setMoves(currentMoves);

                        if(result !== false){
                              
                              //alert(result);
                              setMessage(`player ${currentPlayer} won!!!`);
                              
                              setGameActive(false);
                              return ;
                         }

                        if(currentMoves === 9){
                              // alert("draw");
                              setGameActive(false);
                              setMessage(" Match ended with draw!!");
                              
                        }
                   }
                  
                 
                    
            }

    return (
    <>
          <div className="clo-md-12 col-12 
          text-center">
             <h2 > Current Player : {currentPlayer}</h2>
         
          <button onClick={e=>setGameState(emptyGame) } onClick={e=>setvalues()}>Restart</button>
            </div>

          <div className="bg-white col-md-5
          offset-md-4 gameboard shadow-sm row p-4">
           
             {gameState.map((square, key)=>(
              <Square key={key} index={key} excutor={excuteMove} gameState={gameState}/>
             )
              )}
              
            

          </div>
          <h2 className="text-center"> {message}</h2>
    </>
     );
}

export default GameBoard;