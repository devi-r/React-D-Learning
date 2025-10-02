import React, { useMemo } from "react";

// --- Helper Function: HSL to HEX Conversion ---
const hslToHex = (h, s, l) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

// --- Hexagon Component ---
const Hexagon = ({
  q,
  r,
  size,
  color,
  selectedColor,
  onColorSelect,
  unselectedStrokeColor,
}) => {
  const points = useMemo(() => {
    const corners = [];
    const center = { x: 0, y: 0 };
    for (let i = 0; i < 6; i++) {
      const angle_deg = 60 * i - 30;
      const angle_rad = (Math.PI / 180) * angle_deg;
      corners.push(
        `${center.x + size * Math.cos(angle_rad)},${
          center.y + size * Math.sin(angle_rad)
        }`
      );
    }
    return corners.join(" ");
  }, [size]);

  const x = size * Math.sqrt(3) * (q + r / 2);
  const y = size * (3 / 2) * r;
  const isSelected = color === selectedColor;

  const getSelectedStrokeColor = (fillColor) => {
    try {
      // Add a guard clause to handle potential undefined values during render.
      if (typeof fillColor !== "string") {
        return "#ffffff"; // Return a default color if the input is invalid
      }
      const hex = fillColor.replace("#", "");
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      return luminance > 0.85 ? "#d1d5db" : "#ffffff";
    } catch (e) {
      console.error("Invalid color format:", e);
      return "#ffffff";
    }
  };

  const selectedStroke = getSelectedStrokeColor(color);

  return (
    <g
      transform={`translate(${x}, ${y})`}
      className="hexagon-wrapper"
      onClick={() => onColorSelect(color)}
    >
      <polygon
        points={points}
        fill={color}
        stroke={isSelected ? selectedStroke : unselectedStrokeColor}
        strokeWidth={isSelected ? size / 5 : size / 10}
        className="hexagon-polygon"
      />
    </g>
  );
};

// --- Color Picker Components ---
export const HexColorPicker = ({
  radius = 8,
  onColorSelect,
  selectedColor,
}) => {
  const HEX_SIZE = 18;
  const hexagons = useMemo(() => {
    const hexes = [];
    for (let q = -radius; q <= radius; q++) {
      for (let r = -radius; r <= radius; r++) {
        const s = -q - r;
        if (Math.abs(q) + Math.abs(r) + Math.abs(s) <= radius * 2) {
          const hexDist = (Math.abs(q) + Math.abs(r) + Math.abs(s)) / 2;
          const angle = (Math.atan2(r, q) * 180) / Math.PI + 180;
          const hue = angle;
          const saturation = (hexDist / radius) * 100;
          let lightness = 95 - (hexDist / radius) * 45;
          if (q === 0 && r === 0) lightness = 100;
          hexes.push({ q, r, s, color: hslToHex(hue, saturation, lightness) });
        }
      }
    }
    return hexes;
  }, [radius]);

  const svgWidth = (radius * 2 + 1) * HEX_SIZE * Math.sqrt(3);
  const svgHeight = (radius * 2 + 1) * HEX_SIZE * 1.5;

  return (
    <div className="picker-container">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`-${svgWidth / 2} -${svgHeight / 2} ${svgWidth} ${svgHeight}`}
        className="color-picker-svg"
      >
        <g>
          {hexagons.map((hex, index) => (
            <Hexagon
              key={index}
              {...hex}
              size={HEX_SIZE}
              selectedColor={selectedColor}
              onColorSelect={onColorSelect}
              unselectedStrokeColor="#f8fafc"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export const DarkHexColorPicker = ({
  radius = 8,
  onColorSelect,
  selectedColor,
}) => {
  const HEX_SIZE = 18;
  const hexagons = useMemo(() => {
    const hexes = [];
    for (let q = -radius; q <= radius; q++) {
      for (let r = -radius; r <= radius; r++) {
        const s = -q - r;
        if (Math.abs(q) + Math.abs(r) + Math.abs(s) <= radius * 2) {
          try {
            const hexDist = (Math.abs(q) + Math.abs(r) + Math.abs(s)) / 2;
            const angle = (Math.atan2(r, q) * 180) / Math.PI + 180;
            const hue = angle;
            const saturation = (hexDist / radius) * 100;
            // By increasing the base lightness from 50 to 65 and adjusting the range,
            // we get more vibrant, saturated dark colors instead of very deep shades.
            let lightness = 65 - (hexDist / radius) * 40;
            const color = hslToHex(hue, saturation, lightness);
            // Ensure color is a valid string before pushing
            if (typeof color === "string") {
              hexes.push({ q, r, s, color });
            }
          } catch (e) {
            console.error(
              `Failed to calculate dark color for hexagon at (q:${q}, r:${r})`,
              e
            );
          }
        }
      }
    }
    return hexes;
  }, [radius]);

  const svgWidth = (radius * 2 + 1) * HEX_SIZE * Math.sqrt(3);
  const svgHeight = (radius * 2 + 1) * HEX_SIZE * 1.5;

  return (
    <div className="picker-container">
      <svg
        width={svgWidth}
        height={svgHeight}
        viewBox={`-${svgWidth / 2} -${svgHeight / 2} ${svgWidth} ${svgHeight}`}
        className="color-picker-svg"
      >
        <g>
          {hexagons.map((hex, index) => (
            <Hexagon
              key={index}
              {...hex}
              size={HEX_SIZE}
              selectedColor={selectedColor}
              onColorSelect={onColorSelect}
              unselectedStrokeColor="#f8fafc"
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
