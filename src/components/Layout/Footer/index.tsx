import React from "react";

interface FooterProps extends React.PropsWithChildren { }

export const Footer : React.FunctionComponent<FooterProps>= () => {
  return <h6 className="text-xs">ساخته شده با &#10084; در کوئرا بوت کمپ</h6>;
};