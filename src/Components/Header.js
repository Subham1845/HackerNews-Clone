import react from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>Hacker News Clone</h1>
      <div className="nav-link">
        <NavLink to="/top" activeClassName="active">
          Top Stories
        </NavLink>
        {/* <NavLink to="/latest" activeClassName="active">
          Latest Stories
        </NavLink> */}
        <NavLink to="/best" activeClassName="active">
          Best Stories
        </NavLink>
      </div>
    </>
  );
};
export default Header;
