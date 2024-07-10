const initialState = {
  value: 0
}
export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, value: state.value + 1 };
        case "INCREMENT_TEN":
            return { ...state, value: state.value + 10 };
        case "DECREMENT":
            return { ...state, value: Math.max(state.value - 1, 0) };
        case "DECREMENT_TEN":
            return { ...state, value: Math.max(state.value - 10, 0) };
        case "RESET":
            return { ...state, value: 0 };
        default:
            return state;
    }
}