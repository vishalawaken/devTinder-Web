import React from 'react'
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeFeed } from '../utils/feedSlice';

const UserCard = ({user}) => {
    const dispatch=useDispatch();
    console.log(user);
    const handleSendRequest=async (status,userId)=>{
        try {
            const res = await axios.post(BASE_URL+"/request/send/"+status+"/"+userId ,{},{withCredentials:true})
            dispatch(removeFeed(userId));
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <div>
        <div className="card bg-gray-800 w-96 shadow-sm">
  <figure>
    <img
      src={user.photoUrl}
      alt={user.firstName} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
    <p>{user.about}</p>
    <div className="card-actions justify-center my-4">
      <button onClick={()=>handleSendRequest("ignored",user._id)} className="btn btn-primary">Ignore</button>
      <button onClick={()=>handleSendRequest("interested",user._id)} className="btn btn-secondary">Interested</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard