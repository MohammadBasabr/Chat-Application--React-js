export type ContactState = {
  avatar: string;
  name: string;
  id: number;
  lastMessageSent: string;
  lastMessage: string;
};

export type AppContextInitialState = {
  contacts: ContactState[];
};

export enum ContactActionTypes {
  Get_All_Contacts = "Get_All_Contacts",
}

export type ContextAction<T, K> = {
  type: T;
  payload: K;
};

export type CreateContext = {
  state: ContactState[];
  search: ContactState[];
  dispatch: React.Dispatch<ContextAction<any, any>>;
  setSearch: React.Dispatch<React.SetStateAction<ContactState[]>>;
};
