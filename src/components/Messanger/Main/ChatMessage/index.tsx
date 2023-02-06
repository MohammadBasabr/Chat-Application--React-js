import React from "react";
import { MessageItem } from "./MessageItem";

interface ChatMessageProps extends React.PropsWithChildren {}

export const ChatMessage: React.FunctionComponent<ChatMessageProps> = () => {
  return (
    <ul
      className="w-full h-[calc(100%-79px)] bg-center bg-cover bg-no-repeat flex flex-col p-10 [&_li]:my-5 overflow-y-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-none"
      style={{
        background: "url('https://wallpapercave.com/wp/wp4410743.png')",
      }}
    >
      <MessageItem type="receiver" />
      <MessageItem type="sender" />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </ul>
  );
};
