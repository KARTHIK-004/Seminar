import React from "react";
import { Link } from "react-router-dom";
import { Button, Img, List, Text } from "components";

const LandingPageHeader = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
          <div className="header-row my-px">
            <div className="flex flex-row gap-[11px] items-center justify-start">
              <Img className="h-10 w-10" src="images/img_home.svg" alt="home" />
              <Text
                className="text-orange-A700 text-xl w-auto"
                size="txtMarkoOneRegular20"
              >
                HostelNow
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="flex sm:flex-1 sm:flex-col flex-row sm:hidden items-center justify-between w-[492px] sm:w-full">
            <List
              className="sm:flex-col flex-row gap-14 grid grid-cols-3"
              orientation="horizontal"
            >
              <div className="flex flex-row gap-x-10 items-start justify-start w-[77px]">
                {/* Home */}
                <Link to="/">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    Home
                  </Text>
                </Link>
                {/* Listing */}
                <Link to="/listing">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    Listing
                  </Text>
                </Link>
                {/* property */}
                <Link to="/aboutus">
                  <Text
                    className="text-base text-center text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    AboutUs
                  </Text>
                </Link>

                {/* Contact */}
                <Link to="/contactpage">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtManropeSemiBold16"
                  >
                    Contact
                  </Text>
                </Link>
              </div>
            </List>
          </div>
          <div className="flex flex-row gap-10 h-[42px] md:h-auto sm:hidden items-center justify-start w-[228px]">
            <Button
              className="bg-transparent cursor-pointer flex items-center justify-center min-w-[94px]"
              leftIcon={
                <Img
                  className="h-6 mb-px mr-2"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
            >
              <div className="font-bold font-manrope text-gray-900 text-left text-lg">
                Search
              </div>
            </Button>
            <Link to="/log-in">
              <Button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 p-6 rounded-[10px] text-base text-center text-white-A700 w-full">
              Log in
            </Button>
            </Link>
            
          </div>
        </div>
      </header>
    </>
  );
};

LandingPageHeader.defaultProps = {};

export default LandingPageHeader;
