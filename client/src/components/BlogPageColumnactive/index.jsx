import React from "react";

import { Button, Img, Text } from "components";

const BlogPageColumnactive = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <Img
            className="h-[350px] sm:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
            src="images/img_rectangle5617_350x384.png"
            alt="rectangle5617"
          />
          <div className="flex flex-col gap-2 items-start justify-start w-full">
            <Button className="border border-bluegray-100 border-solid cursor-pointer font-manrope font-semibold min-w-[89px] py-[9px] rounded-[10px] text-center text-gray-900 text-sm">
              {props?.business}
            </Button>
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <Text
                className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px]"
                size="txtManropeBold24Gray900"
              >
                {props?.p10delightfuldinone}
              </Text>
              <div className="flex flex-row gap-6 items-start justify-start md:pr-10 sm:pr-5 pr-[184px] w-full">
                <div className="flex flex-row gap-1.5 items-center justify-start pr-0.5 pt-0.5 w-[44%]">
                  <div className="bg-bluegray-100 h-[5px] my-1.5 rounded-sm w-[5px]"></div>
                  <Text
                    className="text-gray-600 text-xs"
                    size="txtManropeSemiBold12"
                  >
                    {props?.july202022}
                  </Text>
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-center w-[44%]">
                  <div className="bg-bluegray-100 h-[5px] my-1.5 rounded-sm w-[5px]"></div>
                  <Text
                    className="mr-[17px] text-gray-600 text-xs"
                    size="txtManropeSemiBold12"
                  >
                    {props?.time}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center justify-start w-full">
          <Text
            className="text-gray-600 text-lg w-auto"
            size="txtManropeBold18Gray600"
          >
            {props?.active}
          </Text>
          <Img
            className="h-6 w-6"
            src="images/img_arrowright_gray_600.svg"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

BlogPageColumnactive.defaultProps = {
  business: "Business",
  p10delightfuldinone: "10 Delightful Dining Room Decor Trends for Spring",
  july202022: "July 20, 2022",
  time: "7 min read",
  active: "Continue Reading",
};

export default BlogPageColumnactive;
