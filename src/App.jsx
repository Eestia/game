import { useState } from 'react'
import './App.css'
import triangle from './assets/images/bg-triangle.svg'
import Jeton from './components/jeton/jeton'
import paper from './assets/images/icon-paper.svg'
import rock from './assets/images/icon-rock.svg'
import scissors from './assets/images/icon-scissors.svg'
import Cadre from './components/Cadre/cadre'
import Rule from './components/rule/rule'

function App() {
  const [result, setResult] = useState('');
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [score, setScore] = useState(0);

  const themeRouge = {
    main: '#df415b',
    bottom: '#b52b3f'
  }
  const themeBleu ={
    main:'#576ff5',
    bottom: '#2846be'
  }
  const themeJaune ={
    main: '#e8a321',
    bottom: '#c17f00'
  }
  const [isPlaying, setIsPlaying] = useState(false);

  function handleChoice(choice) {
  const options = ["rock", "paper", "scissors"];
  const random = options[Math.floor(Math.random() * options.length)];

  setPlayerChoice(choice);
  setComputerChoice(random);
  setIsPlaying(true);

  const result = determineWinner(choice, random);
  setResult(result);

  if (result === "win") {
    setScore(score + 1);
  } else if (result === "lose") {
    setScore(prev => Math.max(0, prev - 1));
  }
}
  function determineWinner(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    return "win";
  }
  return "lose";
}
  function getIconFromName(name) {
  if (name === "rock") return rock;
  if (name === "paper") return paper;
  if (name === "scissors") return scissors;
}
function getTheme(name) {
  if (name === "rock") return themeRouge;
  if (name === "paper") return themeBleu;
  if (name === "scissors") return themeJaune;
}

  return (
  <>
    <div id="container">
      <section id='cadre-section'>
        <Cadre
        score={score}
        />
      </section>
      <section id='All-jeton' className={isPlaying ? 'playing' : 'not-playing'}>
  {isPlaying ? (
    <section className="duel-view">
      <div className='duel'>
        <div className="player-choice">
          <Jeton
            icon={getIconFromName(playerChoice)}
            mainColor={getTheme(playerChoice)?.main}
            bottomColor={getTheme(playerChoice)?.bottom}
          />
          <p>Vous</p>
        </div>

        <div className="result-text">
          <h2>
            {result === 'win' && "YOU WIN"}
            {result === 'lose' && "YOU LOSE"}
            {result === 'draw' && "DRAW"}
          </h2>
          <button onClick={() => setIsPlaying(false)}>PLAY AGAIN</button>
        </div>

        <div className="computer-choice">
          <Jeton
            icon={getIconFromName(computerChoice)}
            mainColor={getTheme(computerChoice)?.main}
            bottomColor={getTheme(computerChoice)?.bottom}
          />
          <p>Ordinateur</p>
      </div>
      </div>
    </section>
  ) : (
    <>
      <section className='rangé-1'>
        <Jeton
          icon={paper}
          mainColor={themeBleu.main}
          bottomColor={themeBleu.bottom}
          value="paper"
          onClick={() => handleChoice("paper")}
        />
        <Jeton
          icon={scissors}
          mainColor={themeJaune.main}
          bottomColor={themeJaune.bottom}
          value="scissors"
          onClick={() => handleChoice("scissors")}
        />
      </section>
      <section className='rangé-2'>
        <Jeton
          icon={rock}
          mainColor={themeRouge.main}
          bottomColor={themeRouge.bottom}
          value="rock"
          onClick={() => handleChoice("rock")}
        />
      </section>
    </>
  )}
</section>

    <div id='rule-section'>
      <Rule/>
    </div>
    </div>
  </>
)
}

export default App

