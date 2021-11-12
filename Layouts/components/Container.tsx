import React from "react";
type propType = {
  children: any;
  style?: string;
};

function Container({ children, style }: propType) {
  const baseStyle = "container mx-auto";
  let newStyle;
  if (!!style) {
    newStyle = `${baseStyle} ${style}`;
  } else {
    newStyle = baseStyle;
  }

  return <div className={newStyle}>{children}</div>;
}

export default Container;
