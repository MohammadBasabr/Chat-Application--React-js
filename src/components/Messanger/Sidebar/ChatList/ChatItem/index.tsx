import React from "react";

interface ChatItemProps extends React.PropsWithChildren {}

export const ChatItem: React.FunctionComponent<ChatItemProps> = () => {
  return (
    <div className="flex cursor-pointer ease-in duration-200 hover:bg-blue-300 p-2 ml-4">
      <div className="w-full">
        <div className="flex [&_h6]:text-sm justify-between items-center">
          <h6 className="font-s">7:15 عصر</h6>
          <h4 className="font-bold ml-2">محمد باصبر</h4>
        </div>
        <h5 className="text-xs mt-1">سلام کجایی؟؟؟</h5>
      </div>
      <img
        className="rounded-full w-[50px] h-[50px] overflow-hidden"
        src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team1.jpg"
        alt=""
      />
    </div>
  );
};
