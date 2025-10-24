import React, { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';


const Login = () => {
  const [emailId,setEmailId]=useState("GauravKalra@gmail.com");
  const[password,setPassword]=useState("Gaurav@12345678");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const[error,setError]=useState("")

  const handleLogin=async ()=>{
    try {
      const res=await axios.post(BASE_URL+"/login",{
        emailId,
        password,
      },
    {
      withCredentials:true,
    }
    )
      dispatch(addUser(res.data));
      navigate("/");
    } 
    catch (error) {
      setError(error?.response?.data)
      console.log(error);
    }
  
  }
  return (
    <div className='flex justify-center items-center my-10'>
      <div className="card card-border bg-base-300 w-96">
  <div className="card-body">
    <h2 className="card-title justify-center">Login</h2>
    <div className='gap-3 flex flex-col'>
    <label className='form-control w-full max-w-xs my-2'>
      <div className='label'>
        <span className='label-text'>Email Id</span>
      </div>
      <input value={emailId} onChange={(e)=>setEmailId(e.target.value)} type="text" placeholder='Type here' className='input input-bordered w-full max-w-xs' />
    </label>
    <label className='form-control w-full max-w-xs my-2'>
      <div className='label'>
        <span className='label-text'>Password</span>
      </div>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Type here' className='input input-bordered w-full max-w-xs' />
    </label>
    </div>
    <div className="card-actions justify-center my-3 flex flex-col items-center">
      {error && <p className='text-red-600'>{error}</p>}
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login