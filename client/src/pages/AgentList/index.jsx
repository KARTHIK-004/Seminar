import React from "react";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

const dropdownlargeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AgentListPage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-14 items-start justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
              <Text
                className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
                size="txtManropeExtraBold36"
              >
                Some Nearby Good Agents
              </Text>
              <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-full">
                <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-1 flex-col items-start justify-start px-4 py-3.5 rounded-[10px] w-full">
                  <Input
                    name="frame1000001612"
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
                  className="bg-white-A700 border border-bluegray-100 border-solid md:flex-1 font-bold pl-5 pr-4 py-[17px] rounded-[10px] text-gray-600 text-left text-lg w-[12%] md:w-full"
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
                  placeholder="Review"
                />
                <Button
                  className="bg-gray-900 cursor-pointer flex items-center justify-center min-w-[128px] pl-5 pr-4 py-[17px] rounded-[10px]"
                  rightIcon={
                    <Img
                      className="h-5 mt-px mb-[3px] ml-2.5"
                      src="images/img_search_white_a700.svg"
                      alt="search"
                    />
                  }
                >
                  <div className="font-bold text-left text-lg text-white-A700">
                    Search
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope md:gap-10 gap-[60px] items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5615.png"
                    alt="rectangle5615"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5616.png"
                    alt="rectangle5616"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5614.png"
                    alt="rectangle5614"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5614_282x282.png"
                    alt="rectangle5614"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5617.png"
                    alt="rectangle5617"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5618.png"
                    alt="rectangle5618"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5619.png"
                    alt="rectangle5619"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5620.png"
                    alt="rectangle5620"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5621.png"
                    alt="rectangle5621"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5622.png"
                    alt="rectangle5622"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5623.png"
                    alt="rectangle5623"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col h-[431px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="h-[282px] md:h-auto object-cover w-full"
                    src="images/img_rectangle5615_282x282.png"
                    alt="rectangle5615"
                  />
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-5 py-3.5 rounded-bl-[10px] rounded-br-[10px] w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Bruno Fernandes
                      </Text>
                      <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-2/5">
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_One"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Two"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star.svg"
                            alt="star_Three"
                          />
                          <Img
                            className="h-4 w-4"
                            src="images/img_star_gray_600.svg"
                            alt="star_Four"
                          />
                        </div>
                        <Text
                          className="flex-1 text-base text-gray-900 w-auto"
                          size="txtManropeSemiBold16"
                        >
                          4.5 review
                        </Text>
                      </div>
                      <Button className="border border-bluegray-100 border-solid cursor-pointer font-semibold py-[13px] rounded-[10px] text-base text-center text-gray-900 w-full">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-5 items-center justify-between max-w-[1200px] mx-auto w-full">
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
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default AgentListPage;
