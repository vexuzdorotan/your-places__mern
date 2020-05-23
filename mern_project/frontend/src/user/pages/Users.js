import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "name1",
      image: `https://picsum.photos/seed/u1/200/300`,
      places: 3,
    },
    {
      id: "u2",
      name: "name2",
      image: "https://picsum.photos/seed/u2/200/300",
      places: 5,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
