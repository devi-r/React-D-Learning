import React from "react";
import { MdChat } from "react-icons/md";
import { useConfigData } from "../../../contexts/ConfigContext";
import "./FloatingButton.scss";

const FloatingButton = () => {
  const { config } = useConfigData();

  return (
    <button className="floating-button">
      <MdChat size={20} />
      <span>{config.floating_button_text}</span>
    </button>
  );
};

export default FloatingButton;
