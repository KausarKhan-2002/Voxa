import React from "react";
import LeftLayout from "./Leftpanel/LeftLayout";
import RightLayout from "./RightPanel/RightLayout";

const PanelContainer = () => {
  return (
    <div className="flex h-[94vh] shadow-2xl">
      <LeftLayout />
      <RightLayout />
    </div>
  );
};

export default PanelContainer;
