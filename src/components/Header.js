import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  return (
    <>
      <div className="header flex">
        <div className="brand">
          <img src={logo} alt="Logo" className="logo" width="5%" />
          <NavLink className="brand-name" to="/">space travelers&apos; hub</NavLink>
        </div>
        <div className="nav-bar flex">
          <NavLink className="nav-item" to="/">rockets</NavLink>
          <NavLink className="nav-item" to="/dragons">dragons</NavLink>
          <NavLink className="nav-item" to="/missions">missions</NavLink>
          <NavLink className="nav-item" to="/profile">my profile</NavLink>
        </div>
      </div>
    </>
  );
}
