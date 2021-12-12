import { useReducer } from "react";
import { Reducer, ACTIONS } from "./Reducer";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import "./styles.css";

function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    Reducer,
    {}
  );

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previousOperand} {operation}
        </div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span2" onClick={() => dispatch({ type: ACTIONS.CLEAR})}>AC</button>
      <button>DEL</button>
      <OperationButton operation="/" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch} />
      <OperationButton operation="." dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <button className="span2">=</button>
    </div>
  );
}

export default App;
