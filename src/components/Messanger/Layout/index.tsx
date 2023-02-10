import { ChatHeader } from "../Main/ChatHeader";
import { ChatMessage } from "../Main/ChatMessage";
import { ChatPreview } from "../Main/ChatPreview";
import { ChatSender } from "../Main/ChatSender";
import { ChatList } from "../Sidebar/ChatList";
import { SearchBar } from "../Sidebar/SearchBar";

interface MessangerLayoutProps extends React.PropsWithChildren {}

export const MessangerLayout: React.FunctionComponent<MessangerLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-row bg-white h-full rounded-lg p-3 max-w-5xl mx-auto">
      {/* main bar */}
      <div className="flex-1">
        <div className="flex flex-col h-full">
          {/* <ChatHeader /> */}
          <ChatPreview />
          {/* <ChatMessage /> */}
          {/* <ChatSender /> */}
        </div>
      </div>
      {/* side bar */}
      <div className="flex-[0_0_350px] flex-col">
        <SearchBar />
        <div className="flex flex-col overflow-y-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-none h-[calc(100%-40px)]  border-l-[1px] border-r-[1px] border-gray-200">
          <ChatList />
        </div>
      </div>
    </div>
  );
};
