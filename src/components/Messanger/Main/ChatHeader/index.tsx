import React from "react";

interface ChatHeaderProps extends React.PropsWithChildren {}

export const ChatHeader: React.FunctionComponent<ChatHeaderProps> = () => {
  return (
    <div className="p-1 flex flex-col pr-3 py-[5px]">
      <h1 className="font-bold">گروه فرانت آموزان کوئرا</h1>
      <h3 className="text-xs">230 نفر، 28 نفر آنلاین</h3>
    </div>
  );
};
