import React, { memo } from "react";
import coronaImage from "../../image/image.png";

function Header({ className }) {
  console.log("Rendering the Header");
  return (
    <>
      {" "}
      <img src={coronaImage} className={className} alt="Corona Header" />
    </>
  );
}

export default memo(Header);
