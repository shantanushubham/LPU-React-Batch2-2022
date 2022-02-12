export const [INCREMENT, DECREMENT, RESET] = [
  "INCREMENT",
  "DECREMENT",
  "RESET",
];

export const increment = (payload) => ({ type: INCREMENT, payload });
export const decrement = (payload) => ({ type: DECREMENT, payload });
export const reset = () => ({ type: RESET });
