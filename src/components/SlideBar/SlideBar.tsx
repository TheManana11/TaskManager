
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { LiaTasksSolid } from "react-icons/lia";
import { IoIosAddCircleOutline, IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import './styles.css'

const SlideBar = () => {
  return (
    <aside className="side-bar-container">
      <div className="top-container">
        <header className="sidebar-header">
          <h2 className="sidebar-logo">
            <IoCheckmarkDoneCircleSharp />
            <span>TaskManager</span>
          </h2>
        </header>

        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
                <IoMdHome />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/tasks" className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
                <LiaTasksSolid />
                <span>All Tasks</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/create-task" className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
                <IoIosAddCircleOutline />
                <span>Create Task</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="bottom-container">
        <div className="user-profile">
          <div className="user-avatar">AM</div>
          <div className="user-info">
            <span className="user-name">Ahmad Manana</span>
            <span className="user-email">manana.ahmad.17@gmail.com</span>
          </div>
        </div>

        <button className="logout-button" type="button">
          <IoIosLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SlideBar;
