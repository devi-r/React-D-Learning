import React from "react";
import "./ColorPicker.scss";
import { DarkHexColorPicker } from "./hexagonalColorPicker/HexagonalColorPicker";

const ColorPicker = ({ isOpen, onClose, onColorSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="color-picker-overlay" onClick={onClose}>
      <div className="color-picker-container">
        <div className="color-picker" onClick={(e) => e.stopPropagation()}>
          <div className="color-picker__header">
            <h3 className="color-picker__title">Choose Primary Color</h3>
            <button className="color-picker__close" onClick={onClose}>
              ×
            </button>
          </div>
          <div className="color-picker__content">
            <DarkHexColorPicker
              radius={4}
              onColorSelect={onColorSelect}
              selectedColor="#a12850"
            />
          </div>
          <div className="color-picker__footer">
            <p className="color-picker__note">
              Select a color to change the primary theme color
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
