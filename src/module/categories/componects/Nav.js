import React from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineAccountCircle } from "react-icons/md";
import { LuClipboardList } from "react-icons/lu";
import { FaSquareFacebook } from "react-icons/fa6";
const Nav = () => {
  const menus = [
    {
      title: "Home",
      link: "/",
      type: "item",
    },
    
    {
      title: "Blog",
      link: "/blog",
      type: "item",
    },
    {
      title: "Shop",
      link: "/shop",
      type: "dropdown", // Change type to dropdown
      subMenus: [
        { title: "Cleansers", link: "/shop/clothing" },
        { title: "Serums", link: "/shop/electronics" },
        { title: "Sunscreen", link: "/shop/accessories" },
      ],
    },
    {
      title: "Contact",
      link: "/contact",
      type: "item",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg" id="nav-header">
      <Link id="logo" className="navbar-brand ms-4 ms-lg-0" to="/">SKINCARE.</Link>
      <div>
        <div id="nav-menu" className="navbar-nav">
          {menus.map((menu, index) => (
            menu.type === "dropdown" ? (
              <div className="nav-item dropdown" key={index}>
                <Link
                  className="nav-link dropdown-toggle"
                  to={menu.link}
                  id={`navbarDropdown${index}`}
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {menu.title}
                </Link>
                <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <li key={subIndex}>
                      <Link className="dropdown-item" to={subMenu.link}>{subMenu.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link className="nav-link" key={index} to={menu.link}>{menu.title}</Link>
            )
          ))}
        </div>
      </div>
      <div className='social'>
        <span><FaSquareFacebook /></span>
        <span><MdOutlineAccountCircle /></span>
        <span><LuClipboardList /></span>
      </div>
    </nav>
  );
}

export default Nav;