import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Logout = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.handleLogout();
    navigate("/", { state: { message: "You have been logged out!" } });
  };

  return (
    <>
      <li>
        <Link to={"/profile"} className="dropdown-item">
          Profile
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <button className="dropdown-item" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default Logout;
