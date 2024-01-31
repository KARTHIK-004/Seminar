import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import LandingPageFooter from "components/LandingPageFooter";

const LicensePage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <Header className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-start justify-start pl-[120px] pr-[324px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    License
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtManropeRegular18Gray600"
                  >
                    Last updated: January 2020
                  </Text>
                </div>
                <Text
                  className="leading-[180.00%] text-gray-600 text-lg"
                  size="txtManropeRegular18Gray600"
                >
                  <>
                    Your content remains yours, which means that you retain any
                    intellectual property rights that you have in your content.
                    For example, you have intellectual property rights in the
                    creative content you make, such as reviews you write. Or you
                    may have the right to share someone else’s creative content
                    if they’ve given you their permission.
                    <br />
                    We need your permission if your intellectual property rights
                    restrict our use of your content. You provide Google with
                    that permission through this license.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    What’s covered
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtManropeRegular18Gray600"
                  >
                    This license covers your content if that content is
                    protected by intellectual property rights.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    What’s not covered
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[996px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    We use cookies to recognize and monitor users, their on-site
                    behavior, and their preferences for accessing their website.
                    These cookies include the IP and time of visits by visitors.
                    Visitors to Relasto that do not want cookies put on their
                    browsers should configure their browsers to reject cookies
                    before using the Relasto website.
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    Price Updates
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                      We will need to update this policy from time to time to
                      ensure that it remains up-to-date with the latest legal
                      requirements and any improvements to our privacy
                      management practices.
                      <br />
                      When we change the policy, we will make sure that we
                      inform you, if any, of such changes. A copy of this
                      policy’s latest version will always be available at this
                      page.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    Refund Policy
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[996px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    But why fast loading is important? According to Neil Patel,
                    47% of people on the internet expect a web page to load in
                    less than 2 seconds.
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[996px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    Static websites are way faster than dynamic ones. As they
                    don’t have a back-end system, there is no time loss due to
                    database connection. Instead, the lightweight, pre-rendered
                    HTML files load incredibly fast.
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtManropeRegular18Gray600"
                  >
                    You may not disclose any information about your order
                    including, but not limited to, Order ID, download
                    connection, etc.
                  </Text>
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

export default LicensePage;
