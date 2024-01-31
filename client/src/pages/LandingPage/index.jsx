import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, CheckBox, Img, Input, List, Slider, Text } from "components";
import LandingPageCard from "components/LandingPageCard";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

const LandingPagePage = () => {
  const navigate = useNavigate();

  const landingPageCardPropList = [
    {},
    { image: "images/img_image_1.png" },
    { image: "images/img_image_2.png" },
    { image: "images/img_image_3.png" },
    { image: "images/img_image_4.png" },
    { image: "images/img_image_5.png" },
  ];
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-center justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="bg-yellow-50 flex flex-col font-manrope items-start justify-start md:pl-10 sm:pl-5 pl-[120px] py-[50px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-start w-full">
              <div className="flex flex-1 flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px]"
                    size="txtManropeExtraBold46"
                  >
                    <>
                      Find a perfect property
                      <br />
                      Where you&#39;ll love to live
                    </>
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[610px] md:max-w-full text-gray-700 text-xl"
                    size="txtManropeRegular20"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start p-6 sm:px-5 rounded-[16px] w-full">
                  <div className="flex flex-col gap-[38px] items-center justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-4 items-center justify-center w-full">
                      <Button className="bg-gray-900 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-lg text-white-A700 w-full">
                        Buy
                      </Button>
                      <Button className="bg-gray-300 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-gray-900 text-lg w-full">
                        Sell
                      </Button>
                      <Button className="bg-gray-300 cursor-pointer flex-1 font-bold py-3 rounded-[10px] text-center text-gray-900 text-lg w-full">
                        Rent
                      </Button>
                    </div>
                    <div className="flex flex-col gap-6 items-start justify-start w-full">
                      <div className="flex flex-col gap-5 items-start justify-start w-full">
                        <Input
                          name="textfieldlarge"
                          placeholder="City/Street"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          }
                        ></Input>
                        <Input
                          name="textfieldlarge_One"
                          placeholder="Property Type"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_sort.svg"
                              alt="sort"
                            />
                          }
                        ></Input>
                        <Input
                          name="textfieldlarge_Two"
                          placeholder="Price Range"
                          className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                          wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pb-3.5 pt-5 px-4 rounded-[10px] w-full"
                          suffix={
                            <Img
                              className="mt-auto mb-[5px] h-5 ml-[35px]"
                              src="images/img_sort.svg"
                              alt="sort"
                            />
                          }
                        ></Input>
                      </div>
                      <Button className="bg-gray-900 cursor-pointer font-bold py-[17px] rounded-[10px] text-center text-lg text-white-A700 w-full">
                        Search
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
                <Img
                  className="h-[503px] md:h-auto object-cover w-full"
                  src="images/img_image.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex md:flex-col flex-row gap-6 items-center justify-center max-w-[1200px] mx-auto w-full">
            <div className="bg-red-100 flex flex-1 flex-col h-[424px] md:h-auto items-start justify-center md:px-10 sm:px-5 px-[50px] py-[46px] rounded-[20px] w-full">
              <div className="flex flex-col gap-[50px] items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[488px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                    size="txtManropeExtraBold36"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[488px] md:max-w-full text-gray-900 text-lg"
                    size="txtManropeRegular18"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.{" "}
                  </Text>
                </div>
                <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
                  Get Started
                </Button>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="sm:gap-5 gap-6 grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_refresh.svg"
                      alt="refresh"
                    />
                    <Text
                      className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                      size="txtManropeExtraBold28"
                    >
                      <>
                        Search <br />
                        your location
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_instagram.svg"
                      alt="instagram"
                    />
                    <Text
                      className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                      size="txtManropeExtraBold28"
                    >
                      <>
                        Visit <br />
                        Appointment
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_camera.svg"
                      alt="camera"
                    />
                    <Text
                      className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                      size="txtManropeExtraBold28"
                    >
                      <>
                        Get your <br />
                        dream house
                      </>
                    </Text>
                  </div>
                </div>
                <div className="bg-deep_orange-50 flex flex-1 flex-col h-[200px] md:h-auto items-start justify-center sm:px-5 px-[30px] py-6 rounded-[20px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_instagram_orange_a700.svg"
                      alt="instagram"
                    />
                    <Text
                      className="leading-[135.00%] max-w-[222px] md:max-w-full sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px]"
                      size="txtManropeExtraBold28"
                    >
                      <>
                        Enjoy your <br />
                        Appointment
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] py-[50px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start max-w-[1200px] mx-auto w-full">
            <List
              className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[100px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[73%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                  <Img className="h-8" src="images/img_clock.svg" alt="clock" />
                </Button>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    $15.4M
                  </Text>
                  <Text
                    className="leading-[140.00%] text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    <>
                      Owned from
                      <br />
                      Properties transactions
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                  <Img
                    className="h-8"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </Button>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    25K+
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    Properties for Buy & sell Successfully
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                  <Img className="h-8" src="images/img_reply.svg" alt="reply" />
                </Button>
                <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    500
                  </Text>
                  <Text
                    className="leading-[140.00%] max-w-[225px] md:max-w-full text-bluegray-600 text-xl tracking-[-0.40px]"
                    size="txtManropeSemiBold20"
                  >
                    <>
                      Daily completed <br />
                      transactions
                    </>
                  </Text>
                </div>
              </div>
            </List>
            <div className="flex flex-1 flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-white-A700 flex h-[60px] items-center justify-center p-3.5 rounded-[50%] shadow-bs w-[60px]">
                <Img
                  className="h-8"
                  src="images/img_checkmark.svg"
                  alt="checkmark"
                />
              </Button>
              <div className="flex flex-col gap-3.5 items-start justify-start w-full">
                <Text
                  className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                  size="txtManropeExtraBold46"
                >
                  600+
                </Text>
                <Text
                  className="text-bluegray-600 text-xl tracking-[-0.40px] w-full"
                  size="txtManropeSemiBold20"
                >
                  Reagular Clients
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-center justify-center md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col md:gap-10 gap-[60px] md:h-auto items-start justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <Text
                  className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                  size="txtManropeExtraBold36"
                >
                  Featured Properties
                </Text>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
                  onClick={() => navigate("/listing")}
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
              <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-full">
                <Button className="bg-transparent cursor-pointer font-bold min-w-[159px] text-center text-gray-900 text-lg">
                  Resident Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[186px] text-center text-gray-400 text-lg">
                  Commercial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[164px] text-center text-gray-400 text-lg">
                  Industrial Property
                </Button>
                <Button className="bg-transparent cursor-pointer font-bold min-w-[180px] text-center text-gray-400 text-lg">
                  Agriculture Property
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                {landingPageCardPropList.map((props, index) => (
                  <React.Fragment key={`LandingPageCard${index}`}>
                    <LandingPageCard
                      className="flex flex-1 flex-col h-full items-start justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-51 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[150px] items-center justify-center max-w-[1200px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[85px] items-center justify-start w-full">
              <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <Text
                    className="leading-[140.00%] max-w-[557px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                    size="txtManropeExtraBold36"
                  >
                    Simple & easy way to find your dream Appointment
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[557px] md:max-w-full text-gray-700 text-lg"
                    size="txtManropeRegular18Gray700"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, when our power of
                    choice is untrammelled and when nothing prevents our being
                    able to do what we like best, every pleasure is to be
                    welcomed.
                  </Text>
                </div>
                <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[138px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
                  Get Started
                </Button>
              </div>
              <div className="flex flex-1 sm:flex-col flex-row gap-5 items-start justify-start w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[327px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle18.png"
                    alt="rectangleEighteen"
                  />
                  <Img
                    className="h-[218px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_rectangle21.png"
                    alt="rectangleTwentyOne"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Img
                    className="h-[218px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle19.png"
                    alt="rectangleNineteen"
                  />
                  <Img
                    className="h-[327px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                    src="images/img_rectangle20.png"
                    alt="rectangleTwenty"
                  />
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-center justify-start w-full">
              <Img
                className="flex-1 md:flex-none h-[589px] sm:h-auto max-h-[589px] object-cover rounded-[10px] sm:w-[] md:w-[]"
                src="images/img_rectangle20_589x521.png"
                alt="rectangleTwenty_One"
              />
              <div className="flex flex-1 flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="leading-[140.00%] max-w-[521px] md:max-w-full text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px]"
                      size="txtManropeExtraBold36"
                    >
                      Best rated host on popular rental sites
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[521px] md:max-w-full text-gray-700 text-lg"
                      size="txtManropeRegular18Gray700"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. In a free hour, when our power of
                      choice is untrammelled.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-3 items-start justify-start w-full">
                    <CheckBox
                      className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      name="findexcellentde_One"
                      id="findexcellentde_One"
                      label="Find excellent deals"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      name="friendlyhost"
                      id="friendlyhost"
                      label="Friendly host & Fast support"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold sm:pr-5 text-gray-900 text-left text-lg"
                      inputClassName="mr-[5px]"
                      name="securepaymentsy_One"
                      id="securepaymentsy_One"
                      label="Secure payment system"
                    ></CheckBox>
                  </div>
                </div>
                <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[134px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope gap-6 items-start justify-start w-full">
          <div className="flex flex-col items-center justify-center md:px-10 sm:px-5 px-[215px] w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              activeIndex={sliderState}
              responsive={{
                0: { items: 1 },
                550: { items: 1 },
                1050: { items: 1 },
              }}
              onSlideChanged={(e) => {
                setsliderState(e?.item);
              }}
              ref={sliderRef}
              className="max-w-[1010px] mx-auto w-full"
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-start justify-start mx-2.5">
                    <Img
                      className="flex-1 md:flex-none h-[344px] sm:h-auto object-cover rounded-lg w-full"
                      src="images/img_rectangle5591.png"
                      alt="rectangle5591"
                    />
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col gap-[30px] items-start justify-start w-full">
                        <div className="flex sm:flex-col flex-row sm:gap-10 gap-[73px] items-center justify-start w-full">
                          <div className="flex flex-1 flex-col gap-1 items-start justify-start w-full">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                              size="txtManropeExtraBold28"
                            >
                              Taylor Wilson
                            </Text>
                            <Text
                              className="text-gray-900 text-lg w-full"
                              size="txtManropeSemiBold18"
                            >
                              Product Manager - Static Mania
                            </Text>
                          </div>
                          <Img
                            className="h-[51px] max-h-[51px] sm:w-[]"
                            src="images/img_shape.svg"
                            alt="shape"
                          />
                        </div>
                        <Text
                          className="leading-[165.00%] max-w-[455px] md:max-w-full text-2xl md:text-[22px] text-gray-700 sm:text-xl"
                          size="txtManropeSemiBold24"
                        >
                          Eget eu massa et consectetur. Mauris donec. Leo a, id
                          sed duis proin sodales. Turpis viverra diam porttitor
                          mattis morbi ac amet. Euismod commodo. We get you
                          customer relationships that last.{" "}
                        </Text>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="flex flex-row gap-[30px] items-start justify-between pl-[770px] pr-[215px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <Text
                className="text-gray-604 text-lg w-auto"
                size="txtManropeBold18"
              >
                Previews
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Text
                className="text-lg text-orange-A700 w-auto"
                size="txtManropeBold18OrangeA700"
              >
                Next
              </Text>
              <Img
                className="h-6 w-6"
                src="images/img_arrowright.svg"
                alt="arrowright"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-900 flex flex-col font-manrope items-center justify-center p-[120px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col md:gap-10 gap-[120px] items-center justify-start max-w-[1200px] mx-auto w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-5 items-center justify-start w-full">
                <Text
                  className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-white-A700 tracking-[-0.72px] w-auto"
                  size="txtManropeExtraBold36WhiteA700"
                >
                  News & Consult
                </Text>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[124px]"
                  onClick={() => navigate("/listing")}
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
                <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image_350x384.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtManropeBold24"
                    >
                      9 Easy-to-Ambitious DIY Projects to Improve Your Home
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                      <Text
                        className="text-deep_orange-400 text-lg w-auto"
                        size="txtManropeBold18Deeporange400"
                      >
                        Read the Article
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright_deep_orange_400.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image_6.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtManropeBold24"
                    >
                      Serie Shophouse Launch In July, Opportunity For Investors
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                      <Text
                        className="text-deep_orange-400 text-lg w-auto"
                        size="txtManropeBold18Deeporange400"
                      >
                        Read the Article
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright_deep_orange_400.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-6 h-[487px] md:h-auto items-start justify-start w-full">
                  <Img
                    className="md:h-auto h-full object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_image_7.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-6 items-start justify-start w-full">
                    <Text
                      className="leading-[135.00%] md:max-w-full max-w-sm text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[-0.48px]"
                      size="txtManropeBold24"
                    >
                      Looking for a New Place? Use This Time to Create Your
                      Wishlist
                    </Text>
                    <div className="flex flex-row gap-2 items-center justify-start w-full sm:w-full">
                      <Text
                        className="text-deep_orange-400 text-lg w-auto"
                        size="txtManropeBold18Deeporange400"
                      >
                        Read the Article
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowright_deep_orange_400.svg"
                        alt="arrowright"
                      />
                    </div>
                  </div>
                </div>
              </List>
            </div>
            <div className="bg-gray-401 flex flex-col items-center justify-center md:px-10 sm:px-5 px-[100px] py-10 rounded-[10px] w-full">
              <div className="flex flex-col gap-[30px] items-center justify-start md:px-10 sm:px-5 px-[200px] w-full">
                <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[-0.56px] w-full"
                    size="txtManropeExtraBold28"
                  >
                    For Recent Update, News.
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[600px] md:max-w-full text-center text-gray-900 text-lg"
                    size="txtManropeRegular18"
                  >
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-full">
                  <Input
                    name="input"
                    placeholder="Enter your Email"
                    className="font-semibold p-0 placeholder:text-gray-700 text-gray-700 text-left text-sm w-full"
                    wrapClassName="bg-gray-52 flex-1 sm:flex-1 pb-3 pl-4 pr-3 pt-[15px] rounded-[10px] w-[78%] sm:w-full"
                    type="email"
                  ></Input>
                  <Button className="bg-gray-900 cursor-pointer font-semibold min-w-[126px] py-[13px] rounded-[10px] text-base text-center text-white-A700">
                    Subscribe
                  </Button>
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

export default LandingPagePage;
