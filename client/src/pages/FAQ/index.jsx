import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import Header from "components/Header";

import { CloseSVG } from "../../assets/images";

const FAQPage = () => {
  const [searchonevalue, setSearchonevalue] = React.useState("");

  function handleNavigate1() {
    window.location.href = "https://relasto.com";
  }

  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[68px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col gap-10 items-center justify-start max-w-[1200px] mx-auto w-full">
            <Text
              className="sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-900 tracking-[-0.92px] w-full"
              size="txtManropeExtraBold46"
            >
              Search Property / Anything
            </Text>
            <div className="flex flex-col gap-[25px] items-start justify-start w-full">
              <Input
                name="search_One"
                placeholder="Search Property / Anything"
                value={searchonevalue}
                onChange={(e) => setSearchonevalue(e)}
                className="font-semibold p-0 placeholder:text-gray-600 sm:px-5 text-gray-600 text-left text-lg w-full"
                wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-[18px] px-[26px] rounded-[10px] w-full"
                prefix={
                  <Img
                    className="mt-auto mb-[3px] cursor-pointer h-6 mr-3.5"
                    src="images/img_search_gray_600.svg"
                    alt="search"
                  />
                }
                suffix={
                  <CloseSVG
                    className="cursor-pointer h-6 my-auto"
                    onClick={() => setSearchonevalue("")}
                    fillColor="#6e6e6e"
                    style={{
                      visibility:
                        searchonevalue?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={24}
                    width={24}
                    viewBox="0 0 24 24"
                  />
                }
              ></Input>
              <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start sm:px-5 px-[30px] py-7 rounded-[10px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start max-w-[732px] w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      <>You&#39;re viewing sample results.</>
                    </Text>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <Text
                        className="common-pointer text-base text-gray-600 w-full"
                        size="txtManropeSemiBold16Gray600"
                        onClick={handleNavigate1}
                      >
                        https://relasto.com
                      </Text>
                      <Text
                        className="leading-[150.00%] max-w-[732px] md:max-w-full text-gray-600 text-sm"
                        size="txtManropeRegular14"
                      >
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                        quibusdam autem suscipit culpa perspiciatis.
                        Exercitationem dolorum dolore perferendis praesen…
                      </Text>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-5 items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Add CMS or Business Hosting and index your site to see
                        real search results!
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-600 w-full"
                          size="txtManropeSemiBold16Gray600"
                        >
                          https://relasto.com
                        </Text>
                        <Text
                          className="text-gray-600 text-sm w-full"
                          size="txtManropeRegular14"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-bluegray-100 w-full" />
                    <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                        size="txtManropeSemiBold20Gray900"
                      >
                        <>You&#39;re viewing sample results.</>
                      </Text>
                      <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                        <Text
                          className="text-base text-gray-600 w-full"
                          size="txtManropeSemiBold16Gray600"
                        >
                          https://relasto.com
                        </Text>
                        <Text
                          className="text-gray-600 text-sm w-full"
                          size="txtManropeRegular14"
                        >
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
