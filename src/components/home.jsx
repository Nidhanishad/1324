import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const logout = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/login')
  }
  const user = useSelector((state) => state.user.user);

  return (
    
    <div>
      <center>
      <h1 style={{backgroundColor:"pink",fontcolor:"lightgrey"}}>HOME PAGE</h1>

      <div style={{fontfamily:"poppins",fontSize:"20px",borderRadius:"2px solid black",borderStyle:"roundestborder",margin:"50px",padding:"30px",backgroundColor:"pink"}}>
      

  
      <h2>Welcome, {user}!</h2>
      <p>This is your home page.</p>
      <button onClick={logout}>logout</button>
    


    
      </div>
      </center>
    </div>
  );
};

export default Home;
