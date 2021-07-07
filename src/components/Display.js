import React from "react";

import UsersPage from "./UsersPage.js";
import CustomButton from "./CustomButton.js";
import DetailedInfo from "./DetailedInfo.js";

function Display({
  users,
  userDetails,
  getNewUser,
  backToUsers,
  loading,
  setUserDetails,
}) {
  return (
    <div className="container">
      {userDetails ? (
        <>
          <CustomButton name={"Back"} clickHandler={backToUsers} />
          <DetailedInfo user={userDetails} />
        </>
      ) : (
        <>
          <CustomButton name={"Add User"} clickHandler={getNewUser} />
          <UsersPage
            loading={loading}
            users={users}
            setUserDetails={setUserDetails}
          />
        </>
      )}
    </div>
  );
}

export default Display;
