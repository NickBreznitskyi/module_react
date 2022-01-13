import './App.css';
import Users from "./components/Users/Users";
import {createRef, useState} from "react";

function App() {
    //control form
    const [formState, setFormState] = useState({name: '', username: '', email:''})

    //not control form
    let name = createRef();
    let username = createRef();
    let email = createRef();

    function onSubmit(e) {
        e.preventDefault();
        setFormState({name: name.current.value, username: username.current.value, email:email.current.value});
    }


    //control form
    // function onChange(e) {
    //     setFormState({...formState,[e.target.name]: e.target.value});
    // }

    return (
   <div>
       <form onSubmit={onSubmit} className={'form'}>

           {/*control form*/}

           {/*Name:<input type="text" name={'name'} value={formState.name} onChange={onChange} className={'input'}/>*/}
           {/*Username:<input type="text" name={'username'} value={formState.username} onChange={onChange}  className={'input'}/>*/}
           {/*Email:<input type="text" name={'email'} value={formState.email} onChange={onChange} className={'input'}/>*/}


           Name: <input type="text" name={'name'} ref={name} className={'input'}/>
           Username: <input type="text" name={'username'} ref={username} className={'input'}/>
           Email: <input type="text" name={'email'} ref={email} className={'input'}/>
           <button className={'btn'}>Find</button>
       </form>



       <Users name ={formState.name} username ={formState.username} email = {formState.email}/>
   </div>
  );
}

export default App;
