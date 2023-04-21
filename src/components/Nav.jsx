import {NavLink} from "react-router-dom";

export default function Nav() {
  return (
    <nav id="main-nav" aria-label="Main navigation">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/about">Experience</NavLink>
        </li>
      </ul>
    </nav>
    
  );
}