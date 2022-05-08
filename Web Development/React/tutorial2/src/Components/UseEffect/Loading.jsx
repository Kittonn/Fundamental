import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/lnwtxn";

const Loading = () => {
  const [users, setUsers] = useState("default");
  const [IsLoading, setIsLoading] = useState(true);
  const [IsError, setIsError] = useState(false);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsError(true);
        }
      })
      .then(({ login }) => {
        setUsers(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (IsLoading) {
    return <div>Loading....</div>;
  }
  if (IsError) {
    return <div>Error...</div>;
  }
  return <div>{users}</div>;
};

export default Loading;
