import React from "react";
// import cs from "classnames";
interface MessageItemProps extends React.PropsWithChildren {
  type?: "sender" | "receiver";
}

export const MessageItem: React.FunctionComponent<MessageItemProps> = ({
  type = "sender",
}) => {
  switch (type) {
    case "receiver":
      return (
        <li className="flex justify-end">
          <div className="p-2 w-[250px] rounded-lg shadow-md ml-2 bg-white">
            <h4 className="font-bold text-sm">محمد باصبر</h4>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              praesentium dolorem, ratione fugit aliquid rerum.
            </p>
          </div>
          <img
            className="rounded-full w-[50px] h-[50px] overflow-hidden"
            src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team1.jpg"
            alt=""
          />
        </li>
      );
    case "sender":
      return (
        <li className="flex justify-start">
          <img
            className="rounded-full w-[50px] h-[50px] overflow-hidden"
            src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team1.jpg"
            alt=""
          />
          <div className="p-2 w-[250px] rounded-lg shadow-md mr-2 bg-blue-200">
            <h4 className="font-bold text-sm">محمد باصبر</h4>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
              praesentium dolorem, ratione fugit aliquid rerum.
            </p>
          </div>
        </li>
      );
  }
};
