import React from "react";

interface ChatItemProps extends React.PropsWithChildren {
  name: string;
  time: string;
  lastMessage: string;
  avatar: string;
}

export const ChatItem: React.FunctionComponent<ChatItemProps> = ({
  name,
  time,
  lastMessage,
  avatar,
}) => {
  return (
    <div className="flex cursor-pointer ease-in duration-200 hover:bg-blue-300 p-2">
      <div className="w-full">
        <div className="flex [&_h6]:text-sm justify-between items-center">
          <h6 className="font-s">{new Date(time).toLocaleDateString("fa-IR")}</h6>
          <h4 className="font-bold ml-2">{name}</h4>
        </div>
        <h5 className="text-xs mt-1">{lastMessage}</h5>
      </div>
      <img
        className="rounded-full w-[50px] h-[50px] overflow-hidden"
        src={avatar}
        alt=""
      />
    </div>
  );
};
