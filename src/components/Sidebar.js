import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // To handle navigation
import "./Sidebar.css";
import dashboardIcon from "../icons/dashboard.png";
import caseRegisterIcon from "../icons/caseR.jpg";
import caseListIcon from "../icons/list.png";
import functionIcon from "../icons/function.png";
import summaryIcon from "../icons/summary.png";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate(); // Hook for navigation

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('.sidebar') === null) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSidebarClick = (e) => {
    e.stopPropagation(); // Prevent collapsing when clicking on sidebar itself
  };

  // Function to handle navigation, only when sidebar is expanded
  const handleNavigation = (path) => {
    if (isExpanded) {
      navigate(path); // Navigate only if sidebar is expanded
    } else {
      setIsExpanded(true); // Expand sidebar if it's collapsed
    }
  };

  return (
    <aside
      className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
      onClick={handleSidebarClick} // Prevent collapsing when clicking on sidebar itself
    >
      <ul>
        <li onClick={() => handleNavigation("/")}>
          <img src={dashboardIcon} alt="Dashboard" className="icon" />
          {isExpanded && "Dashboard"}
        </li>
        <li onClick={() => handleNavigation("/customer-negotiation")}>
          <img src={caseRegisterIcon} alt="Case Register" className="icon" />
          {isExpanded && "Case Register"}
        </li>
        {/* Add proper navigation to customer details */}
        <li onClick={() => handleNavigation("/customer")}>
          <img src={caseListIcon} alt="Case List" className="icon" />
          {isExpanded && "Case List"}
        </li>
        <li onClick={() => handleNavigation("/function")}>
          <img src={functionIcon} alt="Function" className="icon" />
          {isExpanded && "Function"}
        </li>
        <li onClick={() => handleNavigation("/summary")}>
          <img src={summaryIcon} alt="Summary" className="icon" />
          {isExpanded && "Summary"}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
