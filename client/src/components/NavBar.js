import React, { useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

const NavBar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div>{user.email}</div>
      <div className="navbar-links">
        <ul>
          <li className="link">
            <CustomLink to="/">Items</CustomLink>
          </li>
          <li className="link">
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
