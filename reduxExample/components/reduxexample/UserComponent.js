import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserRequest } from "../../redux/reducers/userActions";

const UserComponent = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state);

  return (
    <div>
      <button onClick={() => dispatch(fetchUserRequest())}>Fetch User</button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {user && <p>User: {user.name}</p>}
    </div>
  );
};

export default UserComponent;
