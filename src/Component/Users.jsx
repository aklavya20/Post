import React from "react";
import { useParams } from "react-router";

const Users = () => {
  const params = useParams();
  const {name} = params
  return <div>Users name is {name}</div>;
};

export default Users;
  