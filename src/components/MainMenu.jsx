import { useContext } from "react"
import { QuizContext } from "../helpers/Contexts"
import "../App.css";
function MainMenu() {
    const { setGameState } = useContext(QuizContext);
    return (
      <div className="menu">
          <button onClick={()=>setGameState(`quiz`)}>Start Quiz</button>
    </div>
  )
}

export default MainMenu