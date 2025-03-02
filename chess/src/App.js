import { useReducer } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import AppContext from './contexts/Context';
import { Reducer } from './reducer/Reducer';
import { initGameState } from './constant';

function App() {
  const [appState, dispatch] = useReducer(Reducer, initGameState);

  const providerState = {
    appState,
    dispatch
  }

  return (
    <AppContext.Provider value={providerState}>
      <div className="App">
        <Board/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
