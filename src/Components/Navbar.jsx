import React from "react";
import { FaCodeFork } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";

const Navbar = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);
  const handleLogout=async()=>{
    try {
      await axios.post(BASE_URL+"/logout",{},{
        withCredentials:true,
      })
      dispatch(removeUser());
      navigate("/login")
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="flex-1">
        <span className="flex items-center text-2xl">
          <FaCodeFork />
          {/* <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link> */}
          {user ? (
  <Link to="/" className="btn btn-ghost text-xl">DevTinder</Link>
) : (
  <Link to="/login" className="btn btn-ghost text-xl">DevTinder</Link>
)}
        </span>
      </div>
      <div className="flex gap-2">
        {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
        <div className="dropdown dropdown-end mx-4">
          {user && (
            <span className="mr-2">
              {user.firstName} {user.lastName}
            </span>
          )}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            {user && (
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoUrl}
                />
              </div>
            )}
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link to="/connections">Connections</Link>
            </li>
            <li>
              <Link to="/requests">Requests</Link>
            </li>
            <li>
              <Link onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
