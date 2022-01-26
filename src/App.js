import './App.css';
import {useReducer} from "react";
import Count from "./components/Count/Count";
import {reducer} from "./helpers/reducer";


function App() {
    const [state, dispatch] = useReducer(reducer, {count1: 0, count2: 0, count3: 0});

    return (
        <div>
            <Count numberOfCount={'1'} stateCount={state.count1} dispatch={dispatch}/>
            <Count numberOfCount={'2'} stateCount={state.count2} dispatch={dispatch}/>
            <Count numberOfCount={'3'} stateCount={state.count3} dispatch={dispatch}/>
        </div>
    );
}

export default App;
