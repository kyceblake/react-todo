import { FaBars } from "react-icons/fa";
import s from './Navbar.module.css';
import Search from "shared/components/Search/Search";

export default function Navbar() {
  return (
    <div className={s.Navbar}>
      <div className={s.NavbarHeader}>
        <FaBars />
        <h1>React ToDo</h1>
      </div>
      <Search />
    </div>
  );
}
