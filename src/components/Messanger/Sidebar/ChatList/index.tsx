import { AxiosResponse } from "axios";
import React, { useCallback, useContext, useEffect } from "react";
import { ContactActionTypes } from "../../../../@types/context/context.type";
import { Contacts } from "../../../../@types/api.types";
import { AXIOS } from "../../../../config/axios.config";
import { ApiRoutes } from "../../../../constants/api.route";
import { AppContext } from "../../../../context/store";
import { ChatItem } from "./ChatItem";

interface ChatListProps extends React.PropsWithChildren { }

export const ChatList: React.FunctionComponent<ChatListProps> = (props) => {
  // const [contacts, setContacts] = useState<Contacts[]>([]);
  const dispatch = useContext(AppContext).dispatch;
  const state = useContext(AppContext).state;
  const fetchContact = useCallback(async () => {
    const response = await AXIOS.get<any, AxiosResponse<Contacts[]>>(
      ApiRoutes.GetContacts
    );
    if (response.status === 200) {
      dispatch({ type: ContactActionTypes.Get_All_Contacts, payload: response.data });
    }
  }, [dispatch]);

  useEffect(() => {
    fetchContact();
  }, [fetchContact]);

  return (
    <>

      {state.length === 0 ? (
        <div>فعلا پیامی وجود ندارد</div>
      ) : (
        <div className="ml-4">
          {state.map((item) => (
            <ChatItem
              key={item.id}
              avatar={item.avatar}
              lastMessage={item.lastMessage}
              time={item.lastMessageSent}
              name={item.name}
            />
          ))}
        </div>
      )}
    </>
  );
};
