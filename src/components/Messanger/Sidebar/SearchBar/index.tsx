import React from "react";
import { Input } from "../../../Base/Forms/Input";

interface SearchBarProps extends React.PropsWithChildren {}

export const SearchBar: React.FunctionComponent<SearchBarProps> = () => {
  return (
    <div className="p-2 border-[1px] border-gray-200">
      <Input placeholder="جستجو..."/>
    </div>
  );
};
