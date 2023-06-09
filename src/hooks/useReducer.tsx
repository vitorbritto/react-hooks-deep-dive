import { useReducer } from 'react';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement': 
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const initialState = { count: 0 };

const ReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h4>Count: {state.count}</h4>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
};

export default ReducerHook;
