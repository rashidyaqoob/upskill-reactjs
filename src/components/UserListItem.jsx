import React from "react";

const UserListItem = ({ id, name }) => {
  return <li key={id}>{name}</li>;
};

export default UserListItem;
