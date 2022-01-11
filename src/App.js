import './App.css';
import Users from "./Components/Users/Users";
import Posts from "./Components/Posts/Posts";
import Comments from "./Components/Comments/Comments";

function App() {
  return (
      <div>
          <div className={'wrap'}>
              <div className='users'>
                  <h2>Users</h2>
                  <Users/>
              </div>
              <div className={'posts'}>
                  <h2>Posts</h2>
                  <Posts/>
              </div>
          </div>
          <div>
              <h2>Comments</h2>
              <Comments/>
          </div>
      </div>
  );
}

export default App;
