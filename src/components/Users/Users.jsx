import User from "../User/User";
import './Users.css'


const Users = ({users, getUserId}) => {
    return (
        <>
            <div className={'users'}>
                <h2>Users</h2>
                {users.map(value => <User
                    key={value.id}
                    user={value}
                    getUserId={getUserId}/>)}
            </div>
        </>

    );
};

export default Users;