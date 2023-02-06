import React from "react";
import { MessangerLayout } from "./Layout";

interface MessangerProps extends React.PropsWithChildren {}

export const Messanger: React.FunctionComponent<MessangerProps> = () => {
  return (
    <MessangerLayout>
      <h1>hello</h1>
    </MessangerLayout>
  );
};
