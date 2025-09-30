import React from "react";
import { MdStars } from "react-icons/md";
import { useConfigData } from "../../../contexts/ConfigContext";
import Skeleton from "../../skeleton/Skeleton";
import "./SectionE.scss";

const SectionE = () => {
  const { config, loading: configLoading } = useConfigData();

  if (configLoading || !config) {
    return (
      <div className="section-e">
        <div className="section-e__header">
          <div className="section-e__icon">
            <MdStars className="section-e__icon-svg" size={21} />
          </div>
          <Skeleton width="120px" height="18px" />
        </div>
        <Skeleton width="100%" height="40px" />
        <Skeleton width="100%" height="44px" />
      </div>
    );
  }

  return (
    <>
      <div className="section-e">
        <div className="section-e__header">
          <div className="section-e__icon">
            <MdStars className="section-e__icon-svg" size={21} />
          </div>
          <h3 className="section-e__title">{config.section_e_title}</h3>
        </div>
        <p className="section-e__description">{config.section_e_description}</p>

        <button className="section-e__cta">{config.section_e_cta_text}</button>
      </div>
    </>
  );
};

export default SectionE;
