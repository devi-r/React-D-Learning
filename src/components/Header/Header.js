import React, { useState, useEffect, useRef } from "react";
import {
  MdNotifications,
  MdStars,
  MdPerson,
  MdMenu,
  MdClose,
  MdViewModule,
  MdPalette,
  MdShoppingCart,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { useConfigData } from "../../contexts/ConfigContext";
import ColorPicker from "../colorPicker/ColorPicker";
import ProductTypeSelector from "../productTypeSelector/ProductTypeSelector";
import Skeleton from "../skeleton/Skeleton";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChangeViewDropdownOpen, setIsChangeViewDropdownOpen] =
    useState(false);
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [isProductTypeSelectorOpen, setIsProductTypeSelectorOpen] =
    useState(false);
  const {
    config,
    currentProductType,
    changeProductType,
    productTypes,
    loading,
  } = useConfigData();
  const changeViewRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleChangeViewDropdown = () => {
    setIsChangeViewDropdownOpen(!isChangeViewDropdownOpen);
  };

  const closeChangeViewDropdown = () => {
    setIsChangeViewDropdownOpen(false);
  };

  const handleChangeColor = () => {
    closeChangeViewDropdown();
    setIsColorPickerOpen(true);
  };

  const handleColorSelect = (color) => {
    // Update the primary color CSS variable in the root
    document.documentElement.style.setProperty("--primary-color", color);
    console.log("Primary color updated to:", color);
  };

  const closeColorPicker = () => {
    setIsColorPickerOpen(false);
  };

  const handleChangeProduct = () => {
    closeChangeViewDropdown();
    setIsProductTypeSelectorOpen(true);
  };

  const handleProductTypeSelect = (productType) => {
    changeProductType(productType);
    setIsProductTypeSelectorOpen(false);
    // The dashboard will automatically refresh due to the product type change in context
  };

  const closeProductTypeSelector = () => {
    setIsProductTypeSelectorOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        changeViewRef.current &&
        !changeViewRef.current.contains(event.target)
      ) {
        setIsChangeViewDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Show loading state or return early if config is not loaded
  if (loading || !config) {
    return (
      <header className="header">
        <div className="header__left">
          <Skeleton
            width="120px"
            height="28px"
            className="header__logo-skeleton"
          />
          <nav className="header__nav">
            <Skeleton width="200px" height="20px" />
          </nav>
        </div>
        <div className="header__right">
          <div className="header__user">
            <MdPerson className="header__user-icon" size={28} />
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="header">
        <div className="header__left">
          <h1 className="header__logo">{config.brand || "Dashboard"}</h1>
          <nav className="header__nav">
            {config.nav &&
              config.nav.map((item, index) => (
                <a key={index} href="#" className="header__nav-item">
                  {item.title}
                </a>
              ))}
          </nav>
        </div>
        <div className="header__right">
          {/* Change View Dropdown */}
          <div className="header__change-view-container" ref={changeViewRef}>
            <button
              className="header__change-view-btn"
              onClick={toggleChangeViewDropdown}
            >
              <MdViewModule size={20} />
              <span>Change View</span>
              {isChangeViewDropdownOpen ? (
                <MdExpandLess size={20} />
              ) : (
                <MdExpandMore size={20} />
              )}
            </button>

            {/* Change View Dropdown Menu */}
            {isChangeViewDropdownOpen && (
              <div className="header__change-view-dropdown">
                <button
                  className="header__change-view-dropdown-item"
                  onClick={handleChangeColor}
                >
                  <MdPalette size={18} />
                  <span>Change Color</span>
                </button>
                {productTypes.length > 1 && (
                  <button
                    className="header__change-view-dropdown-item"
                    onClick={handleChangeProduct}
                  >
                    <MdShoppingCart size={18} />
                    <span>Change Product</span>
                  </button>
                )}
              </div>
            )}
          </div>

          <button className="header__wallet-btn">
            <MdStars size={20} />
            <span>
              {config.nav_button && config.nav_button[0]
                ? config.nav_button[0].label
                : "Points"}
            </span>
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
                    <span>
                      {config.nav_button && config.nav_button[0]
                        ? config.nav_button[0].label
                        : "Points"}
                    </span>
                  </button>
                </div>

                {/* Navigation Items */}
                {config.nav &&
                  config.nav.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="header__mobile-dropdown-item"
                      onClick={closeMenu}
                    >
                      {item.title}
                    </a>
                  ))}

                {/* Change View Options */}
                <div className="header__mobile-dropdown-change-view">
                  <button
                    className="header__mobile-dropdown-change-view-btn"
                    onClick={handleChangeColor}
                  >
                    <MdPalette size={18} />
                    <span>Change Color</span>
                  </button>
                  {productTypes.length > 1 && (
                    <button
                      className="header__mobile-dropdown-change-view-btn"
                      onClick={handleChangeProduct}
                    >
                      <MdShoppingCart size={18} />
                      <span>Change Product</span>
                    </button>
                  )}
                </div>

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

      {/* Color Picker Modal */}
      <ColorPicker
        isOpen={isColorPickerOpen}
        onClose={closeColorPicker}
        onColorSelect={handleColorSelect}
      />

      {/* Product Type Selector Modal */}
      <ProductTypeSelector
        isOpen={isProductTypeSelectorOpen}
        onClose={closeProductTypeSelector}
        productTypes={productTypes}
        onProductTypeSelect={handleProductTypeSelect}
        currentProductType={currentProductType}
      />
    </>
  );
};

export default Header;
