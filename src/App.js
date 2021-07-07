import React, { useState, useEffect } from "react";

import Display from "./components/Display.js";
import { fetChUser } from "./api/fetch.js";

function App() {
  const [users, setUsers] = useState([]);
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetChUser(counter)
      .then((data) => setUsers((prev) => [...prev, data.results[0]]))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [counter]);

  const getNewUser = () => {
    setCounter((prev) => prev + 1);
    setLoading((prev) => !prev);
  };

  const backToUsers = () => {
    setUserDetails("");
  };

  return (
    <>
      {error ? (
        <div className="flex-wrapper">
          <h1>{error}...</h1>
        </div>
      ) : (
        <Display
          users={users}
          userDetails={userDetails}
          getNewUser={getNewUser}
          loading={loading}
          setUserDetails={setUserDetails}
          backToUsers={backToUsers}
        />
      )}
    </>
  );
}

export default App;
