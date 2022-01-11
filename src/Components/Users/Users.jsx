import User from "../User/User";
import './Users.css'
import {GetUsers} from "../../services/api";

const Users = () => {

    return (
        <div className='Users'>
            {GetUsers().map(value => <User key = {value.id} id = {value.id} name = {value.name} username = {value.username} email = {value.email} phone = {value.phone} website = {value.website}/>)}
        </div>
    );
};

export default Users;