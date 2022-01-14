import './App.css';
import Users from "./components/Users/Users";
import {createRef, useState} from "react";

function App() {

    const [formState, setFormState] = useState({name: '', username: '', email: ''})


    const name = createRef();
    const username = createRef();
    const email = createRef();

    function onSubmit(e) {
        e.preventDefault();
        setFormState({name: name.current.value, username: username.current.value, email: email.current.value});
    }


    return (
        <div>
            <form onSubmit={onSubmit} className={'form'}>


                Name: <input type="text" name={'name'} ref={name} className={'input'}/>
                Username: <input type="text" name={'username'} ref={username} className={'input'}/>
                Email: <input type="text" name={'email'} ref={email} className={'input'}/>
                <button className={'btn'}>Find</button>
            </form>


            <Users name={formState.name} username={formState.username} email={formState.email}/>
        </div>
    );
}

export default App;
