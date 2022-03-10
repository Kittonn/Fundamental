import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const Data = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch(url);
    const users = await res.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <h3>Github Users</h3>
      <ul>
        {users.map(({ id, login, html_url, avatar_url }) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Data;
