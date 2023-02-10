import React, { useContext } from "react";
import { AppContext } from "../../../../context/store";
import { Input } from "../../../Base/Forms/Input";

interface SearchBarProps extends React.PropsWithChildren { }

export const SearchBar: React.FunctionComponent<SearchBarProps> = (props) => {
  const state = useContext(AppContext).state;
  const {setSearch} = useContext(AppContext);
  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filterContacts = state.filter(item => item.name.includes(e.target.value));
    setSearch(filterContacts);
  }

  return (
    <div className="p-2 border-[1px] border-gray-200">
      <Input placeholder="جستجو..." onChange={handleFilter} />
    </div>
  );
};
