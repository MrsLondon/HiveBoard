import "././Sidbar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Hive Board</div>
      <ul className="sidebar-menu">
        <li className="menu-item">Dashboard</li>
        <li className="menu-item">Tasks</li>
        <li className="menu-item">Teams</li>
        <li className="menu-item">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
