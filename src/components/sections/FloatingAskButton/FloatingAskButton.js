import React from "react";
import { MdChat } from "react-icons/md";
import "./FloatingAskButton.scss";

const FloatingAskButton = () => (
  <button className="floating-ask-button">
    <MdChat size={20} />
    <span>Ask D-Learning</span>
  </button>
);

export default FloatingAskButton;
