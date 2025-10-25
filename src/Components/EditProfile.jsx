import React from "react";
import { useState } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import Alert from "./Alert";
const EditProfile = ({user}) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [error, setError] = useState("");
  const[success,setSuccess]=useState("");
  const dispatch=useDispatch();

  const saveProfile = async()=>{
    setError("")
    try{
        const res=await axios.patch(BASE_URL+"/profile/edit",{
            firstName,
            lastName,
            age,
            gender,
            about,
            photoUrl
        },{withCredentials:true})
        dispatch(addUser(res?.data?.data))
        setSuccess("Data has Been Savedddddddd!")
        setTimeout(()=>{
            setSuccess("")
        },3000)
    }
    catch(err){
        setError(err.message)
    }
  }
  return (
    <>
    {success && <Alert success={success}></Alert>}
    <div className="flex justify-center my-10">
    
    <div className="pb-32">
      <div className="flex justify-center items-center mx-10">
        <div className="card card-border bg-base-300 w-96">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>
            <div className="gap-3 flex flex-col">
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">FirstName</span>
                </div>
                <input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">LastName</span>
                </div>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Age</span>
                </div>
                <input
                  onChange={(e) => setAge(e.target.value)}
                  value={age}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Gender</span>
                </div>
                <input
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <input
                  onChange={(e) => setAbout(e.target.value)}
                  value={about}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  value={photoUrl}
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="card-actions justify-center my-3 flex flex-col items-center">
              {error && <p className="text-red-600">{error}</p>}
              <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   <UserCard user={{firstName,lastName,age,gender,about,photoUrl}}></UserCard>
    </div>
    </>
  );
};

export default EditProfile;
