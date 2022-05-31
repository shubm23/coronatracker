import React, { memo } from "react";
import coronaImage from "../../image/image.png";

function Header({ className }) {
  return (
    <>
      {" "}
      <img src={coronaImage} className={className} alt="Corona Header" />
    </>
  );
}

export default memo(Header);
