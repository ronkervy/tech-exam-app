import { useGetUserListQuery, userApi } from './user/services'
import { useEffect,useState } from 'react';

function App() {
  
  const {data, isLoading} = useGetUserListQuery();
  const [user,setUser] = useState([]);

  useEffect(()=>{
     const loadUsers = (data)=>{
	 setUser(data);
     }
     console.log(user.length);
     if(data !== undefined){
	 loadUsers(data);
     }
  },[user,data]);

  if(isLoading){
      return(
	 <div>...Loading</div>
      )
  }

  return (
    <div className="App">
      <header className="App-header">
	 {user.length > 0 ? user.map(usr=>(
	    <div key={usr._id}>{usr.uname}</div>
	 )): 'no user found.'}
      </header>
    </div>
  );
}

export default App;

