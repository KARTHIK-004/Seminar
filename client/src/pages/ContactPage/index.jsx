import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

const ContactPagePage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-center justify-start md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-11 items-center justify-start max-w-[1200px] mx-auto w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Text
                  className="sm:text-[40px] md:text-[46px] text-[54px] text-center text-gray-900 tracking-[-1.08px] w-full"
                  size="txtManropeExtraBold54"
                >
                  Get in touch
                </Text>
                <Text
                  className="leading-[180.00%] max-w-[1200px] md:max-w-full text-center text-gray-600 text-lg"
                  size="txtManropeRegular18Gray600"
                >
                  On the other hand, we denounce with righteous indignation and
                  dislike men who are so beguiled and demoralized by the charms
                  of pleasure of the moment, so blinded by desire, that they
                  cannot foresee the pain and trouble.
                </Text>
              </div>
              <div className="bg-white-A700 border border-bluegray-100 border-solid flex md:flex-col flex-row gap-[50px] items-start justify-start p-[50px] md:px-10 sm:px-5 rounded-[10px] w-full">
                <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                      size="txtManropeExtraBold28"
                    >
                      Send a message
                    </Text>
                    <div className="flex flex-col gap-3 items-start justify-start w-full">
                      <Input
                        name="textfieldlarge"
                        placeholder="Full Name"
                        className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                        wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                        type="text"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-6 mr-3.5"
                            src="images/img_user.svg"
                            alt="user"
                          />
                        }
                      ></Input>
                      <Input
                        name="textfieldlarge_One"
                        placeholder="Email Address"
                        className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                        wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                        type="email"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-6 mr-3.5"
                            src="images/img_mail_gray_600_24x24.svg"
                            alt="mail"
                          />
                        }
                      ></Input>
                      <Input
                        name="textfieldlarge_Two"
                        placeholder="Phone Number"
                        className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                        wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                        type="number"
                        prefix={
                          <Img
                            className="mt-auto mb-px h-6 mr-3.5"
                            src="images/img_call.svg"
                            alt="call"
                          />
                        }
                      ></Input>
                      <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col h-[152px] md:h-auto items-start justify-start px-[19px] py-3.5 rounded-[10px] w-full">
                        <Text
                          className="text-gray-600 text-lg w-auto"
                          size="txtManropeSemiBold18Gray600"
                        >
                          Message
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gray-900 cursor-pointer font-semibold py-[17px] rounded-[10px] text-base text-center text-white-A700 w-full">
                    Send Request
                  </Button>
                </div>
                <Line className="bg-bluegray-100 h-[534px] md:h-px md:w-full w-px" />
                <div className="flex flex-1 flex-col gap-10 items-start justify-center w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-col gap-1 items-start justify-start w-full">
                      <Text
                        className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                        size="txtManropeSemiBold20Gray900"
                      >
                        Office Address
                      </Text>
                      <Text
                        className="leading-[180.00%] text-gray-600 text-lg"
                        size="txtManropeSemiBold18Gray600"
                      >
                        <>
                          1421 San Pedro St, Los Angeles, <br />
                          CA 90015
                        </>
                      </Text>
                    </div>
                    <div className="flex flex-col gap-2.5 items-start justify-start w-full">
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_call.svg"
                          alt="call_One"
                        />
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtManropeSemiBold18Gray600"
                        >
                          (123) 456-7890
                        </Text>
                      </div>
                      <div className="flex flex-row gap-3 items-center justify-start w-full">
                        <Img
                          className="h-6 w-6"
                          src="images/img_mail_gray_600_24x24.svg"
                          alt="mail_One"
                        />
                        <Text
                          className="flex-1 text-gray-600 text-lg w-auto"
                          size="txtManropeSemiBold18Gray600"
                        >
                          info@mail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[13px] items-start justify-start w-full sm:w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Social
                    </Text>
                    <div className="flex flex-row gap-4 items-start justify-start w-full">
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_clock_gray_600.svg"
                        alt="clock"
                      />
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_linkedin_gray_600.svg"
                        alt="linkedin"
                      />
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_twitter_gray_600.svg"
                        alt="twitter"
                      />
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_play.svg"
                        alt="play"
                      />
                      <Img
                        className="h-[30px] w-[30px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default ContactPagePage;
