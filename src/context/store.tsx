import React, { createContext, useReducer, useState } from "react";
import { ContactState, CreateContext } from "../@types/context/context.type";
import { ContactsReducer } from "./contact/contact.reducer"

const InitialState: ContactState[] = [];

const AppContext = createContext<CreateContext>({
    state: [],
    search: [],
    dispatch: () => null,
    setSearch: () => null,
}); //store

interface AppContextProviderProps extends React.PropsWithChildren {
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
    children,
}): JSX.Element => {
    const [state, dispatch] = useReducer(ContactsReducer, InitialState);
    const [search, setSearch] = useState<ContactState[]>([])
    return <AppContext.Provider value={{ state, dispatch, search, setSearch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
