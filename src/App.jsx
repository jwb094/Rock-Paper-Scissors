import { useState } from 'react'
import RockImg from './assets/rock.png'
import PaperImg from './assets/paper.png'
import ScisscorImg from './assets/scissors.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0);
  const [playerChoice, setPlayerChoice] = useState(0)
  const [computerChoice, setComputerChoice] = useState();
  const [resultMessage, setResultMessage] = useState("Make your move!")
  const [result, setResult] = useState("");

  //Matrix array - the possible result from ROCK PAPER SCISSORS  for Player and Computer ; Row then Column
  const whoWonTheBattle = [
            //(Computer)Rock Paper Scissors
       /*(Player)rock */['D', 'C', 'P'],
              /*Paper */['P', 'D', 'C'],
            /*Scissors*/['C', 'P', 'D']
  ];

  function gameFlow(Value) {
    // retrieve the player and computer choice and set state
    const playerChoice = Value;
    const computerChoice = Math.floor(Math.random() * whoWonTheBattle.length);

    setPlayerChoice(playerChoice);
    setComputerChoice(computerChoice);

    //the Matrix position is found using the player and computer choices
    const outcome = whoWonTheBattle[playerChoice][computerChoice];

    setResult(outcome);

    //the winner is found
    (outcome === "P") ? setResultMessage("Player wins") :
      (outcome === "C") ? setResultMessage("Computer wins") :
        setResultMessage("Its a draw");

    //the winner's score is update
    if (outcome === "P") { setPlayerScore((count) => count + 1) }
    if (outcome === "C") { setComputerScore((count) => count + 1) }

    //Reset PlayerChoicee
    setResult("")
    setPlayerChoice("")
    setComputerChoice("")
    // setResultMessage("Make your Move")

    //After 3 seconds outcome different message
    setTimeout(() => {
      setResultMessage("Make your move!");
    }, 3000);
  }





  return (
    <>
      <div className="container-fluid vh-100 vw-100 d-flex align-items-center justify-content-center">

        <div className="container">

          {/* SCORE ROW */}
          <div className="row mb-4 text-center">

            {/* Player Score */}
            <div className="col-6">
              <div className="p-3 border rounded shadow-sm">
                <h5>Player</h5>
                <h2>{playerScore}</h2>
              </div>
            </div>

            {/* Computer Score */}
            <div className="col-6">
              <div className="p-3 border rounded shadow-sm">
                <h5>Computer</h5>
                <h2>{computerScore}</h2>
              </div>
            </div>

          </div>

          {/* MESSAGE ROW */}
          <div className="row mb-4">
            <div className="col text-center">
              <div className="p-3 border rounded shadow-sm">
                <h4>{resultMessage}</h4>
              </div>
            </div>
          </div>

          {/* OPTIONAL GAME AREA ROW (future buttons etc.) */}
          <div className="row text-center">
            <div className="col">
              <button className="btn mx-2" onClick={(e) => gameFlow(0)}>
                <img src={RockImg} alt="rock icon" style={{ width: '100px' }} />
              </button>
              <button className="btn mx-2" onClick={(e) => gameFlow(1)}>
                <img src={PaperImg} alt="paper icon" style={{ width: '100px' }} />
              </button>
              <button className="btn  mx-2" onClick={(e) => gameFlow(2)}>
                <img src={ScisscorImg} alt="scissor icon" style={{ width: '100px' }} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
