import React from "react";

import { CopyText } from "./CopyText";
import { MyImage } from "./MyImage";
import { Information } from "./Information";

export const Content: React.FC = () => {
  return (
    <div className="header__content">
      <div className="container">
        <div className="header__wrap">
          <Information />
          <MyImage />
        </div>

        <CopyText text="Лучшему учителю и прекрасному человеку!" />
      </div>
    </div>
  );
};
