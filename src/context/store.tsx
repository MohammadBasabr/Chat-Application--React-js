import React, { createContext, useReducer } from "react";
import { ContactState, CreateContext } from "../@types/context/context.type";
import { ContactsReducer } from "./contact/contact.reducer"

const InitialState: ContactState[] = [];

const AppContext = createContext<CreateContext>({
    state: [],
    dispatch: () => null
}); //store

interface AppContextProviderProps extends React.PropsWithChildren {
}

const AppContextProvider: React.FC<AppContextProviderProps> = ({
    children,
}): JSX.Element => {
    const [state, dispatch] = useReducer(ContactsReducer, InitialState);
    return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
