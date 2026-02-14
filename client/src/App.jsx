import { useState } from "react";

function generatePuzzle() {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  return {
    question: a + " + " + b,
    answer: a + b
  };
}

export default function App() {
  const [puzzle] = useState(generatePuzzle());
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function checkAnswer() {
    if (parseInt(input) === puzzle.answer) {
      setResult("Correct answer");
    } else {
      setResult("Wrong answer");
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h1>Daily Puzzle Game</h1>
      <h2>{puzzle.question}</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <br /><br />

      <button onClick={checkAnswer}>
        Submit
      </button>

      <p>{result}</p>
    </div>
  );
}

