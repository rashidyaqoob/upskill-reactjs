import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("useeffect");
    const fetchData = async () => {
      if (id) {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const user = await res.json();
        setUser(user);
        console.log(user);
      }
    };

    fetchData();
  }, [id]);
  return (
    <div class="container">
      <h1 class="page-title">{user?.name}</h1>
      <div class="page-subtitle">{user?.email}</div>
      <div>
        <b>Company:</b> {user?.company?.name}
      </div>
      <div>
        <b>Website:</b>
        {user?.website}
      </div>
      <div>
        <b>Address:</b> {user?.address?.city} {user?.address?.street}{" "}
        {user?.address?.suite}
      </div>
    </div>
  );
};

export default User;
