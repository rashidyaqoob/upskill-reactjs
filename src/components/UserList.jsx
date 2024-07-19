import React, { useEffect, useState } from "react";
import UserListItem from "./UserListItem";

const UserList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {isLoading ? (
        "Loading..."
      ) : (
        <ul>
          {data &&
            data.map((item) => <UserListItem id={item.id} name={item.name} />)}
        </ul>
      )}
    </div>
  );
};

export default UserList;
