import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


function Forgetpassword(){
    const [email, setEmail]=useState('');
    const [newPassword,setPassword]=useState('');
    const navigator= useNavigate()
    useEffect(() =>{
        console.log('email is',email);
        console.log('password is',newPassword);

    
    },[email,newPassword])
    const handleSubmit=async() => {
        const response=await axios.post('http://localhost:2000/forget',{email, newPassword})
        if (response.data){
            navigator('/login')
        }

    }
 return(
    <center>
        
        

        <div style={{display:"flex", flexDirection:"column" , justifyContent:"center",gap:"10px",alignItems:"center"}}>
        <h1>FORGET PASSWORD</h1>
        </div>
        <input onChange={(e)=>setEmail(e.target.value)}type="email"style={{width:"500px",padding:"10px"}}placeholder="Enter email" />
        <br></br><br></br>
    
       <div>

        <input onChange={(e) =>setPassword(e.target.value)} type="password" style={{width:"500px", padding:"10px"}} placeholder="Enter new password" />
        <br></br><br></br>
        </div>  
        <div>
    
            <input onChange={(e) =>setPassword(e.target.value)} type="password" style={{width:"500px",padding:"10px",}} placeholder="confirm password"/>
            <br></br><br></br>
            <div><button onClick={handleSubmit }>UPDATE PASSWORD</button></div>
    

    
            </div>

    </center>
 );
};
export default Forgetpassword;




