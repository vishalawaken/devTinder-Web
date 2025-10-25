import React, { useEffect} from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequests } from "../utils/requestSlice";


const Requests = () => {
  const requests = useSelector((store) => store.requests);
  console.log(requests);
  

  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  const reviewRequest=async(status,_id)=>{
    try {
        const res = await axios.post(BASE_URL+"/request/review/"+status+"/"+_id,{},{withCredentials:true})
        dispatch(removeRequests(_id));
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) {
    return;
  }

  if (requests.length === 0) {
    return <h1 className="flex justify-center my-10">No Requests Found</h1>;
  }
  return (
    <div className=" text-center items-center justify-center my-10 flex flex-col gap-4">
      <h1 className="text-bold text-4xl">Requests</h1>

      {requests.map((request) => {
        if (!request.fromUserId) return null;
        const { firstName, lastName, photoUrl, age, gender, about, _id } =
          request.fromUserId;
        return (
          <div className="bg-gray-800 p-4 mb-4 rounded-lg shadow-md" key={_id}>
            <div>
              <img
                src={
                  photoUrl ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
                }
                alt={firstName}
              />
              <h2 className="text-xl">
                {firstName} {lastName}
              </h2>

              <p>{about}</p>
              <p>
                {age} {gender}
              </p>
              <div>
                <button onClick={()=>reviewRequest("accepted",request._id)} className="btn btn-soft btn-primary m-2">Accept</button>
                <button onClick={()=>reviewRequest("rejected",request._id)} className="btn btn-soft btn-secondary m-2">Reject</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Requests;
