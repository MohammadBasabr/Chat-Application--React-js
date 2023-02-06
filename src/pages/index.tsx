import React from "react";
import { Messanger } from "../components/Messanger";

interface HomePageComponent extends React.PropsWithChildren {}
export const HomePage : React.FunctionComponent<HomePageComponent>= (props):JSX.Element => {
  return <Messanger/>;
};