import React, { useEffect, useState } from "react";
import PostData from "./PostData";

const Card = () => {
  const [userData, setUserData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const getUserData = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const data = await fetch(url);
    const res = await data.json();
    setUserData(res);
  };

  const getPostData = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const data = await fetch(url);
    const res = await data.json();
    setPostData(res);
  };

  useEffect(() => {
    getUserData();
    getPostData();
  }, []);

  return (
    <div>
      {userData.map((ud) => (
        <div
          key={ud.id}
          className="bg-white m-3 p-3 border rounded-lg shadow-lg"
        >
          <div className="text-lg font-medium">User ID: {ud.id}</div>
          <div className="text-base font-light flex flex-row">
            <div className="font-medium">Name:</div> {ud.name}
          </div>
          <div className="text-base font-light flex flex-row">
            <div className="font-medium">Username:</div> {ud.username}
          </div>
          <div className="text-base font-light flex flex-row">
            <div className="font-medium">Email:</div> {ud.email}
          </div>
          <div className="text-base font-light flex flex-row">
            <div className="font-medium">Street:</div> {ud.address.street}
          </div>
          <div className="text-base font-light flex flex-row">
            <div className="font-medium">Suite:</div> {ud.address.suite}
          </div>
          <div className="text-base font-light flex flex-row">
            <div className="font-medium">City:</div> {ud.address.city}
          </div>
          <div className="text-base font-light flex flex-row justify-between mt-2">
            <div className="flex flex-row">
              <div className="font-medium">ZipCode:</div> {ud.address.zipcode}
            </div>
            <button
              className="text-white bg-black border rounded-lg text-base font-normal px-3 py-1"
              onClick={() =>
                setSelectedUserId((prev) => (prev === ud.id ? null : ud.id))
              }
            >
              {selectedUserId === ud.id ? "Hide Posts" : "Show Posts"}
            </button>
          </div>
          {selectedUserId === ud.id && (
            <PostData send={postData} userId={ud.id} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
