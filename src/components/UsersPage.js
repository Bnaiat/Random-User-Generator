import React from "react";

import Card from "./Card.js";
import LoadingPage from "./LoadingPage.js";

function UsersPage({ users, loading, setUserDetails }) {
  return (
    <div className="display-wrapper">
      {loading ? (
        <LoadingPage />
      ) : (
        users.map((user) => (
          <Card key={user.cell} user={user} setUserDetails={setUserDetails} />
        ))
      )}
    </div>
  );
}

export default UsersPage;
