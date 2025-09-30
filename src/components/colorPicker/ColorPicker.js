import React from "react";
import "./ColorPicker.scss";

const ColorPicker = ({ isOpen, onClose, onColorSelect }) => {
  // Dark colors not in the subject color map
  const darkColors = [
    { name: "Default", value: "#a12850", hex: "#a12850" },
    { name: "Midnight Blue", value: "#191970", hex: "#191970" },
    { name: "Dark Slate", value: "#2F4F4F", hex: "#2F4F4F" },
    { name: "Maroon", value: "#800000", hex: "#800000" },
    { name: "Dark Green", value: "#006400", hex: "#006400" },
    { name: "Navy", value: "#000080", hex: "#000080" },
    { name: "Dark Red", value: "#8B0000", hex: "#8B0000" },
    { name: "Forest Green", value: "#228B22", hex: "#228B22" },
    { name: "Dark Purple", value: "#4B0082", hex: "#4B0082" },
    { name: "Indigo", value: "#4B0082", hex: "#4B0082" },
    { name: "Dark Olive", value: "#556B2F", hex: "#556B2F" },
    { name: "Dark Cyan", value: "#008B8B", hex: "#008B8B" },
    { name: "Dark Magenta", value: "#8B008B", hex: "#8B008B" },
    { name: "Saddle Brown", value: "#8B4513", hex: "#8B4513" },
    { name: "Dark Goldenrod", value: "#B8860B", hex: "#B8860B" },
    { name: "Dark Orchid", value: "#9932CC", hex: "#9932CC" },
    { name: "Dark Khaki", value: "#BDB76B", hex: "#BDB76B" },
    { name: "Dark Salmon", value: "#E9967A", hex: "#E9967A" },
    { name: "Dark Turquoise", value: "#00CED1", hex: "#00CED1" },
    { name: "Dark Violet", value: "#9400D3", hex: "#9400D3" },
    { name: "Firebrick", value: "#B22222", hex: "#B22222" },
  ];

  const handleColorClick = (color) => {
    onColorSelect(color.value);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="color-picker-overlay" onClick={onClose}>
      <div className="color-picker" onClick={(e) => e.stopPropagation()}>
        <div className="color-picker__header">
          <h3 className="color-picker__title">Choose Primary Color</h3>
          <button className="color-picker__close" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="color-picker__grid">
          {darkColors.map((color, index) => (
            <button
              key={index}
              className="color-picker__color-btn"
              style={{ backgroundColor: color.value }}
              onClick={() => handleColorClick(color)}
              title={color.name}
              aria-label={`Select ${color.name} color`}
            >
              <span className="color-picker__color-name">{color.name}</span>
            </button>
          ))}
        </div>

        <div className="color-picker__footer">
          <p className="color-picker__note">
            Select a color to change the primary theme color
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
