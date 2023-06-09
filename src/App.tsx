import EffectHook from './hooks/useEffect'
import RefHook from './hooks/useRef'
import StateHook from './hooks/useState'
import ReducerHook from './hooks/useReducer'
import MemoHook from './hooks/useMemo'
import CallbackHook from './hooks/useCallback'

import Message from './components/Message'

const App = () => {  
  return (
    <div>
      <h1>React Hooks - Deep Dive</h1>

      <h2>useState</h2><StateHook /><hr />
      <h2>useEffect</h2><EffectHook /><hr />
      <h2>useRef</h2><RefHook /><hr />
      <h2>useReducer</h2><ReducerHook /><hr />
      <h2>useContext</h2><Message /><hr />
      <h2>useMemo</h2><MemoHook /><hr />
      <h2>useCallback</h2><CallbackHook /><hr />
    </div>
  );
};

export default App;
