import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import BlogPageColumnactive from "components/BlogPageColumnactive";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

const dropdownlargeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dropdownlargeOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BlogPagePage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[68px] items-center justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start max-w-[1200px] mx-auto w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                  size="txtManropeExtraBold36"
                >
                  Real Estate News & Blogs
                </Text>
                <div className="gap-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-start w-full">
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-1 flex-col items-center justify-start px-4 py-3.5 rounded-[10px] w-full">
                    <Input
                      name="frame1000001653"
                      placeholder="Enter your address"
                      className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                      wrapClassName="flex pt-1 w-full"
                      suffix={
                        <Img
                          className="mt-auto mb-[3px] h-6 ml-3"
                          src="images/img_search_gray_600.svg"
                          alt="search"
                        />
                      }
                    ></Input>
                  </div>
                  <SelectBox
                    className="bg-white-A700 border border-bluegray-100 border-solid flex-1 font-bold pb-3.5 pt-[18px] px-[15px] rounded-[10px] text-gray-600 text-left text-lg w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_gray_600_24x24.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="dropdownlarge"
                    options={dropdownlargeOptionsList}
                    isSearchable={false}
                    placeholder="Category"
                  />
                  <SelectBox
                    className="bg-white-A700 border border-bluegray-100 border-solid flex-1 font-bold pb-3.5 pt-[18px] px-4 rounded-[10px] text-gray-600 text-left text-lg w-full"
                    placeholderClassName="text-gray-600"
                    indicator={
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_gray_600_24x24.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="dropdownlarge_One"
                    options={dropdownlargeOneOptionsList}
                    isSearchable={false}
                    placeholder="Popular"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full">
                <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                  {new Array(9).fill({}).map((props, index) => (
                    <React.Fragment key={`BlogPageColumnactive${index}`}>
                      <BlogPageColumnactive
                        className="flex flex-1 flex-col gap-6 items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-between w-full">
                <div className="flex flex-row gap-[5px] items-start justify-start w-auto">
                  <Button className="border border-gray-700 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    1
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    2
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    3
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    4
                  </Button>
                  <Button className="border border-bluegray-102 border-solid cursor-pointer font-semibold h-12 py-[13px] rounded-[10px] text-base text-center text-gray-900 w-12">
                    5
                  </Button>
                </div>
                <Button
                  className="border border-bluegray-102 border-solid cursor-pointer flex items-center justify-center min-w-[134px] px-[17px] py-[13px] rounded-[10px]"
                  rightIcon={
                    <Img
                      className="h-4 mt-px mb-[5px] ml-1"
                      src="images/img_arrowright_gray_900.svg"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-semibold text-base text-gray-900 text-left">
                    Next Page
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default BlogPagePage;
