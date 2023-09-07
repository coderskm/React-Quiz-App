import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import { Questions } from "../helpers/QuestionBank";
import "../App.css";
function EndScreen() {
  const { score, setScore, setGameState } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState(`menu`);
  }
  return (<div className="endscreen">
    <h1>Quiz Finished</h1>
    <h2>{score}/{Questions.length}</h2>
    <button onClick={restartQuiz}>Restart Quiz</button>
  </div>);
}

export default EndScreen;
