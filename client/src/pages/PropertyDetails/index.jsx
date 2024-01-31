import React from "react";

import { Button, GoogleMap, Img, Input, List, Text } from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

const PropertyDetailsPage = () => {
  const landingPageCardPropList = [
    {},
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
  ];

  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
            <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <Img
                    className="h-[550px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5610.png"
                    alt="rectangle5610"
                  />
                </div>
                <div className="flex sm:flex-1 flex-col gap-6 h-[550px] md:h-auto items-start justify-start w-auto sm:w-full">
                  <Img
                    className="h-[263px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5611.png"
                    alt="rectangle5611"
                  />
                  <div className="h-[263px] relative w-96 sm:w-full">
                    <Img
                      className="h-[263px] m-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle5612.png"
                      alt="rectangle5612"
                    />
                    <Button
                      className="bg-white-A700 bottom-[0] cursor-pointer flex items-center justify-center min-w-[122px] px-4 py-[9px] right-[0] rounded-[10px]"
                      leftIcon={
                        <Img
                          className="h-6 mb-px mr-1.5 bottom-[0] right-[2%] absolute"
                          src="images/img_mail.svg"
                          alt="mail"
                        />
                      }
                    >
                      <div className="font-bold text-gray-900 text-left text-lg">
                        3 more
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-center max-w-[1200px] mx-auto w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-11 items-start justify-start w-full">
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Text
                            className="leading-[135.00%] max-w-[712px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                            size="txtManropeExtraBold28"
                          >
                            Trovilla Plan in Sereno Canyon - Estate Collection
                            by Toll Brothers
                          </Text>
                          <Text
                            className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                            size="txtManropeSemiBold20Gray900"
                          >
                            2861 62nd Ave, Oakland, CA 94605
                          </Text>
                        </div>
                        <div className="flex sm:flex-col flex-row gap-4 items-start justify-start md:pr-10 sm:pr-5 pr-[180px] w-full">
                          <div className="bg-white-A700 border border-gray-600 border-solid flex flex-1 flex-col items-center justify-center sm:px-5 px-6 py-[7px] rounded-[10px] w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                                size="txtManropeBold24Gray900"
                              >
                                $649,900
                              </Text>
                              <Text
                                className="text-gray-600 text-xs w-full"
                                size="txtManropeSemiBold12"
                              >
                                Online / Cash Payment
                              </Text>
                            </div>
                          </div>
                          <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-1 flex-col items-center justify-center sm:px-5 px-6 py-[7px] rounded-[10px] w-full">
                            <div className="flex flex-col gap-1 items-start justify-start w-full">
                              <Text
                                className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                                size="txtManropeBold24Gray900"
                              >
                                $850 / month
                              </Text>
                              <Text
                                className="text-gray-600 text-xs w-full"
                                size="txtManropeSemiBold12"
                              >
                                0% EMI for 6 Months
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                          size="txtManropeSemiBold20Gray900"
                        >
                          Well-constructed 1562 Sq Ft Home Is Now Offering To
                          You In Uttara For Sale
                        </Text>
                        <Text
                          className="leading-[180.00%] max-w-[712px] md:max-w-full text-gray-600 text-lg"
                          size="txtManropeRegular18Gray600"
                        >
                          <>
                            A slider is great way to display a slideshow
                            featuring images or videos, usually on your
                            homepage.Adding sliders to your site is no longer
                            difficult. You don’t have to know coding anymore.
                            Just use a slider widget and it will automatically
                            insert the slider on your web page.So, the Elementor
                            slider would be a great tool to work with when
                            building a WordPress site.
                          </>
                        </Text>
                      </div>
                      <div className="flex flex-col gap-6 items-start justify-start w-full">
                        <div className="flex flex-col gap-6 items-start justify-start w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                            size="txtManropeExtraBold28"
                          >
                            Local Information
                          </Text>
                          <div className="gap-3 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-start md:pr-10 sm:pr-5 pr-[200px] w-full">
                            <Button className="border border-bluegray-100 border-solid cursor-pointer flex-1 font-semibold py-[11px] rounded-[10px] text-base text-center text-gray-900 w-full">
                              Map
                            </Button>
                            <Button className="bg-gray-900 cursor-pointer flex-1 font-semibold py-[11px] rounded-[10px] text-base text-center text-white-A700 w-full">
                              Schools
                            </Button>
                            <Button className="border border-bluegray-100 border-solid cursor-pointer flex-1 font-semibold py-[11px] rounded-[10px] text-base text-center text-gray-900 w-full">
                              Crime
                            </Button>
                            <Button className="border border-bluegray-100 border-solid cursor-pointer flex-1 font-semibold py-[11px] rounded-[10px] text-base text-center text-gray-900 w-full">
                              Shop & Eat
                            </Button>
                          </div>
                        </div>
                        <div className="h-[400px] relative w-full">
                          <GoogleMap
                            className="h-[400px] m-auto rounded-[10px] w-full"
                            showMarker={false}
                          ></GoogleMap>
                          <Img
                            className="absolute h-[54px] inset-[0] m-auto w-[389px]"
                            src="images/img_frame1000001425.svg"
                            alt="frame1000001425"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
                        size="txtManropeExtraBold28"
                      >
                        Home Highlights
                      </Text>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[150px] grid md:grid-cols-1 grid-cols-2 justify-start w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                          <div className="flex flex-row gap-[55px] items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtManropeRegular18Gray600"
                              >
                                Parking
                              </Text>
                            </div>
                            <Text
                              className="flex-1 text-gray-900 text-lg text-right w-auto"
                              size="txtManropeSemiBold18"
                            >
                              No Info
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[47px] items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtManropeRegular18Gray600"
                              >
                                Outdoor
                              </Text>
                            </div>
                            <Text
                              className="flex-1 text-gray-900 text-lg text-right w-auto"
                              size="txtManropeSemiBold18"
                            >
                              No Info
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[85px] items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtManropeRegular18Gray600"
                              >
                                A/C
                              </Text>
                            </div>
                            <Text
                              className="flex-1 text-gray-900 text-lg text-right w-auto"
                              size="txtManropeSemiBold18"
                            >
                              No Info
                            </Text>
                          </div>
                          <div className="flex flex-row gap-10 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtManropeRegular18Gray600"
                              >
                                Year Built
                              </Text>
                            </div>
                            <Text
                              className="flex-1 text-gray-900 text-lg text-right w-auto"
                              size="txtManropeSemiBold18"
                            >
                              2021
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-2.5 items-start justify-start w-full">
                          <div className="flex flex-row gap-20 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtManropeRegular18Gray600"
                              >
                                HOA
                              </Text>
                            </div>
                            <Text
                              className="flex-1 text-gray-900 text-lg text-right w-auto"
                              size="txtManropeSemiBold18"
                            >
                              None
                            </Text>
                          </div>
                          <div className="flex flex-row gap-8 items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtManropeRegular18Gray600"
                              >
                                Price/Sqft
                              </Text>
                            </div>
                            <Text
                              className="flex-1 text-gray-900 text-lg text-right w-auto"
                              size="txtManropeSemiBold18"
                            >
                              $560
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[66px] items-start justify-start w-full">
                            <div className="flex flex-1 flex-row gap-2.5 items-center justify-start w-full">
                              <div className="bg-gray-600 h-2 rounded-[50%] w-2"></div>
                              <Text
                                className="flex-1 text-gray-600 text-lg w-auto"
                                size="txtManropeRegular18Gray600"
                              >
                                Listed
                              </Text>
                            </div>
                            <Text
                              className="flex-1 text-gray-900 text-lg text-right w-auto"
                              size="txtManropeSemiBold18"
                            >
                              No Info
                            </Text>
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start p-10 sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                        size="txtManropeExtraBold28"
                      >
                        Agent Information
                      </Text>
                      <div className="flex flex-row gap-6 items-center justify-start w-full">
                        <Img
                          className="h-[150px] md:h-auto object-cover rounded-[10px] w-[150px]"
                          src="images/img_rectangle5599.png"
                          alt="rectangle5599"
                        />
                        <div className="flex flex-col gap-[3px] items-start justify-start w-auto">
                          <Text
                            className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                            size="txtManropeSemiBold20Gray900"
                          >
                            Bruno Fernandes
                          </Text>
                          <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                            <div className="flex flex-row gap-1 items-start justify-start w-auto">
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
                              className="text-base text-gray-900 w-auto"
                              size="txtManropeSemiBold16"
                            >
                              4 review
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_mail_gray_600.svg"
                              alt="mail"
                            />
                            <Text
                              className="text-base text-gray-600 w-auto"
                              size="txtManropeMedium16"
                            >
                              bruno@relasto .com
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2.5 items-center justify-start w-full">
                            <Img
                              className="h-5 w-5"
                              src="images/img_call.svg"
                              alt="call"
                            />
                            <Text
                              className="text-base text-gray-600 w-auto"
                              size="txtManropeMedium16"
                            >
                              +65 0231 965 965
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 border border-bluegray-100 border-solid flex sm:flex-1 flex-col items-start justify-start p-6 sm:px-5 rounded-[10px] w-auto sm:w-full">
                  <div className="flex flex-col gap-10 items-start justify-start w-[336px]">
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                        size="txtManropeExtraBold28"
                      >
                        Request for Visit
                      </Text>
                      <div className="flex flex-col gap-3 h-[440px] md:h-auto items-start justify-start w-full">
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
                        <Input
                          name="textfieldlarge_Three"
                          placeholder="Date"
                          className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                          prefix={
                            <Img
                              className="mt-auto mb-px h-6 mr-3.5"
                              src="images/img_calendar.svg"
                              alt="calendar"
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
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
            <div className="flex flex-col gap-10 items-center justify-center max-w-[1200px] mx-auto w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                <Text
                  className="flex-1 sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-auto"
                  size="txtManropeExtraBold28"
                >
                  Latest Property Listings
                </Text>
                <Button
                  className="bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
                  rightIcon={
                    <Img
                      className="h-6 mb-[3px] ml-2"
                      src="images/img_arrowright.svg"
                      alt="arrow_right"
                    />
                  }
                >
                  <div className="font-bold text-left text-lg text-orange-A700">
                    Explore All
                  </div>
                </Button>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
                orientation="horizontal"
              >
                {landingPageCardPropList.map((props, index) => (
                  <React.Fragment key={`LandingPageCard${index}`}>
                    <LandingPageCard
                      className="flex flex-1 flex-col h-full items-start justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </List>
            </div>
          </div>
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default PropertyDetailsPage;
