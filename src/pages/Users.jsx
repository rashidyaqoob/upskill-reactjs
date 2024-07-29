import React from "react";

const Users = ({ data }) => {
  console.log(data);
  return (
    <div class="container">
      <h1 class="page-title">Users</h1>
      <div class="card-grid">
        {data?.map((user) => (
          <div className="card" key={user.id}>
            <div className="card-header">{user.name}</div>
            <div className="card-body">
              <div>
                {user?.address?.street} {user?.address?.suite}
              </div>
              <div>{user.address.city}</div>
              <div>{user.email}</div>
            </div>
            <div className="card-footer">
              <a className="btn" href={`users/${user.id}`}>
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
