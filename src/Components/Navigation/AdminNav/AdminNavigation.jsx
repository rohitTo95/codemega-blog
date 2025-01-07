import "./admin_navigation.css";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Site_URL = (import.meta.env.VITE_BASE_URL.replace(/\/+$/, "")).toString();

const AdminNavigation = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);

  const icons = [
    { default: "ri-home-4-line", active: "ri-home-4-fill", linkURL: `/admin/dashboard/overview` },
    { default: "ri-user-community-line", active: "ri-user-community-fill", linkURL: `/admin/dashboard/users` },
    { default: "ri-book-2-line", active: "ri-book-2-fill", linkURL: `/admin/dashboard/category-tag-list` },
    { default: "ri-quill-pen-ai-line", active: "ri-quill-pen-ai-fill", linkURL: `/admin/dashboard/posts` },
    { default: "ri-settings-3-line", active: "ri-settings-3-fill", linkURL: `/admin/dashboard/settings` },
  ];

  // Synchronize the activeIndex with the current route
  useEffect(() => {
    const currentPath = location.pathname;
    const activeTabIndex = icons.findIndex((icon) => icon.linkURL === currentPath);
    setActiveIndex(activeTabIndex);
  }, [location.pathname, icons]);

  const handleTabClick = (index) => {
    setActiveIndex(index); // Optional: Updates immediately on click
  };

  return (
    <div className="admin-navigation w-full h-fit mt-12">
      <ul className="w-1/2 flex items-center justify-between text-4xl bg-[var(--secondary-color)] px-20 py-6 rounded-full mx-auto">
        {icons.map((icon, index) => (
          <li
            key={index}
            className={index === activeIndex ? "active-tab" : ""}
            onClick={() => handleTabClick(index)}
          >
            <Link to={icon.linkURL}>
              <i className={index === activeIndex ? icon.active : icon.default}></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminNavigation;
