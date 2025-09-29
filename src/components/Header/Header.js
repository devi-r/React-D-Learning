import React, { useState } from "react";
import {
  MdNotifications,
  MdStars,
  MdPerson,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { navigationItems } from "../../constants/mockData";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__left">
          <h1 className="header__logo">D-Learning</h1>
          <nav className="header__nav">
            {navigationItems.map((item, index) => (
              <a key={index} href="#" className="header__nav-item">
                {item}
              </a>
            ))}
          </nav>
        </div>
        <div className="header__right">
          <button className="header__wallet-btn">
            <MdStars size={20} />
            <span>2,450 Points</span>
          </button>
          <MdNotifications className="header__notification-icon" size={24} />
          <div className="header__user">
            <MdPerson className="header__user-icon" size={28} />
          </div>
          <div className="header__burger-container">
            <button className="header__burger" onClick={toggleMenu}>
              {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
            </button>

            {/* Mobile Navigation Dropdown */}
            <div
              className={`header__mobile-dropdown ${
                isMenuOpen ? "header__mobile-dropdown--open" : ""
              }`}
              onClick={closeMenu}
            >
              <div
                className="header__mobile-dropdown-content"
                onClick={(e) => e.stopPropagation()}
              >
                {/* User Profile Section */}
                <div className="header__mobile-dropdown-user">
                  <div className="header__mobile-dropdown-user-info">
                    <MdPerson
                      className="header__mobile-dropdown-user-icon"
                      size={24}
                    />
                    <span className="header__mobile-dropdown-user-name">
                      Devi
                    </span>
                  </div>
                  <button className="header__mobile-dropdown-points-btn">
                    <MdStars size={16} />
                    <span>2,450 Points</span>
                  </button>
                </div>

                {/* Navigation Items */}
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="header__mobile-dropdown-item"
                    onClick={closeMenu}
                  >
                    {item}
                  </a>
                ))}

                {/* Notifications */}
                <div className="header__mobile-dropdown-notifications">
                  <button className="header__mobile-dropdown-notification-btn">
                    <MdNotifications size={18} />
                    <span>Notifications</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
