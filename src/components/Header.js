import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/Header.css';

export default function Header() {
  return (
    <>
      <div className="header flex">
        <div className="brand flex">
          <img src={logo} alt="Logo" className="logo" width="5%" />
          <NavLink className="brand-name" to="/">Space Travelers&apos; Hub</NavLink>
        </div>
        <div className="nav-bar flex">
          <NavLink className="nav-item" to="/">Rockets</NavLink>
          <NavLink className="nav-item" to="/dragons">Dragons</NavLink>
          <NavLink className="nav-item" to="/missions">Missions</NavLink>
          <hr />
          <NavLink className="nav-item" to="/profile">My Profile</NavLink>
        </div>
      </div>
      <hr className="body-hr" />
    </>
  );
}
