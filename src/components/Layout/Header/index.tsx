import React from "react";

interface HeaderProps extends React.PropsWithChildren {}

export const Header: React.FunctionComponent<HeaderProps> = () => {
  return <h2 className="font-bold self-start">پروژۀ تمرینی پیام رسان تلگرام</h2>;
};
