import { ContactActionTypes, ContactState, ContextAction } from "../../@types/context/context.type";

export const ContactsReducer = (
  state: ContactState[],
  action: ContextAction<ContactActionTypes, any>
):ContactState[] => {
  switch (action.type) {
    case ContactActionTypes.Get_All_Contacts:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
