import {useReducer, useState} from "react";

import './App.css';
import Cat from "./components/Cat/Cat";
import Dog from "./components/Dog/Dog";
import {reducer} from "./helpers/reducer";



function App() {
    const [formState, setFormState] = useState({cat: '', dog: ''});
    const [state, dispatch] = useReducer(reducer, {cats: [], dogs: []});

    const formHandler = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: e.target[0].name, formState: formState})
    }

    const deleteItem = (e, type, index) => {
        e.preventDefault()
        dispatch({type: type, index: index})
    }
    return (
        <div>
            <div className={'forms__wrap'}>
                <form onSubmit={handleSubmit}>
                    <label>Add Cat: <input type="text" name={'cat'} value={formState.cat}
                                           onChange={formHandler}/></label>
                    <button>Save</button>

                </form>
                <form onSubmit={handleSubmit}>
                    <label>Add Dog: <input type="text" name={'dog'} value={formState.dog}
                                           onChange={formHandler}/></label>
                    <button>Save</button>
                </form>
            </div>
            <hr/>
            <div className={'content__wrap'}>
                <div>
                    <h2>Cats</h2>
                    {
                        state.cats && state.cats.map((value, index) =>
                            <Cat key={index} value={value} index={index} deleteItem={deleteItem}/>)
                    }
                </div>

                <div>
                    <h2>Dogs</h2>
                    {
                        state.dogs.map((value, index) =>
                            <Dog key={index} value={value} index={index} deleteItem={deleteItem}/>)
                    }
                </div>
            </div>
        </div>
    );
}

export default App;
