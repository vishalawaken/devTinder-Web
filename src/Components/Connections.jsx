import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

import ConnectionsCard from "./ConnectionsCard";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  console.log(connections);

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });

      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  if (!connections) {
    return;
  }

  if (connections.length === 0) {
    return <h1>No Connections Found</h1>;
  }
  return (
    <div className=" text-center items-center justify-center flex flex-col gap-4">
      <h1 className="text-bold text-2xl">Connections</h1>

      {connections.map((connection) => (
        <ConnectionsCard user={connection} key={connection._id} />
      ))}
    </div>
  );
};

export default Connections;
