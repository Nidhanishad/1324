import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/')
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
  <div style={{display:"flex",justifyContent:"center",margin:"100",padding:"10px",backgroundColor:"pink",backgroundImage:`url(/photo-1589810264340-0ce27bfbf751.avif)`}}>
    <div>
      
      <br></br><br></br><br></br><br></br><br></br>
      <h2>LOGIN</h2>
      <div>
        <label>Email:</label>
        <br></br>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
    
      </div>

      <br></br>
      <div>
        <label>Password:</label>
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <br></br>
      <button onClick={handleSubmit}>Login</button> <br></br><br></br>

      <button onClick={redirecter}>Already a user</button> 
</div>
</div>
);
};

export default Login
