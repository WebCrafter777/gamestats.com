import Image from "next/image";
import React from "react";
import { renderText } from "../../shared/TextRender";
export const ForumComments = ({ comments }:{comments:any}) => {
  return (
    <div className="group">
      {comments.map((comment:any, index:any) => (
        <div
          key={index}
          className={`w-full flex sb:flex-row flex-col sb:justify-normal sb:items-start justify-center items-center sb:px-[24px] px-[8px] border-b-[2.5px] ${
            index === comments.length - 1 ? "border-none" : "border-b-gray"
          }`}
        >
          <div className="flex flex-col justify-start items-center gap-[10px] py-[12px] sb:pr-[24px] sb:border-r-[2.5px] sb:border-r-gray w-[170px]">
            <div className="relative w-[80px] h-[80px]">
              <Image
                src={"/images/user/userPlaceholder2.webp"}
                alt="User_Profile_image"
                fill
                className="rounded-full"
              />
            </div>
            <div>
              <h1 className="text-[19px] font-medium dark:text-white text-center">
                {comment.author}
              </h1>
              <h3 className="text-[17px] dark:text-light_primary text-secondary text-center">
                {comment.role}
              </h3>
            </div>
          </div>
          <div className="w-full sb:pl-[24px] py-[12px]">
            <p className="text-[15px] dark:text-white">
              {renderText(comment.text)}
            </p>
            <p className="text-text_gray">Posted {comment.postedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
