export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};


export function Reducer(state, { type, payload }) {
    switch (type) {
      case ACTIONS.ADD_DIGIT:
        if (payload.digit === "0" && state.currentOperand === "0") return state;
        if (payload.digit === "." && state.currentOperand.includes("."))
          return state;
        return {
          ...state,
          currentOperand: `${state.currentOperand || ""}${payload.digit}`,
        };
  
      case ACTIONS.CLEAR:
        return {}

      
      default:
        console.log("asdasda");
    }
  }