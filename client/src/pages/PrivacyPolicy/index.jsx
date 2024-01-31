import React from "react";

import { Button, Img, List, Text } from "components";
import Header from "components/Header";
import LandingPageFooter from "components/LandingPageFooter";

const PrivacyPolicyPage = () => {
  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
          <Header className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
          <div className="flex flex-col font-manrope items-start justify-center pl-[120px] pr-[266px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="sm:text-4xl md:text-[42px] text-[46px] text-gray-900 tracking-[-0.92px] w-full"
                    size="txtManropeExtraBold46"
                  >
                    Privacy Policy
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
                    Hi, welcome to our privacy policy which applies to our
                    customers. This policy sets out how if you are a Relasto.com
                    user or visitor to our site, we treat your personal
                    information.
                    <br />
                    Last updated on March 01, 2020.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    1. The type of personal information we collect
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                      Hi, welcome to our privacy policy which applies to our
                      customers. This policy sets out how if you are a
                      Relasto.com user or visitor to our site, we treat your
                      personal information.
                      <br />
                      Last updated on March 01, 2020.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    2. Cookies and web analytics
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
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
                    3. When do we need to update this policy?
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
                    4. Registration
                  </Text>
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                      To use our Service you will need to create an account and
                      complete the registration process at
                      https://Relasto.com/signup (Registration).
                      <br />
                      <br />
                      At Registration, you will select logon credentials for
                      each user of the Service, which may be an employee of the
                      Subscriber or other individuals authorised by the
                      Subscriber to use the Service (Authorised User). Logon
                      details should only be used by the Authorised User to whom
                      they are assigned and cannot be shared with any third
                      parties (including another Authorised User). You are
                      solely responsible for the confidentiality and use of all
                      logon details for your account and those assigned to
                      Authorised Users, as well as for any use or misuse of the
                      Service using Subscriber’s or any Authorised Users’ logon
                      details. You shall notify us immediately if you become
                      aware of any loss, theft or unauthorised use of any logon
                      details, and we reserve the right to delete or change them
                      at any time and for any reason.
                      <br />
                      <br />
                      You warrant and represent to us that the details you
                      provide to us during Registration are accurate, complete
                      and up-to-date. We will hold and treat such information in
                      accordance with the terms of our Privacy Policy.
                      <br />
                      If you or your Participants use a mobile telephone to
                      access our Service, we may need to send SMS messages. You
                      may opt out of this service by replying STOP to the SMS
                      message or by contacting us at support@Relasto.com.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                    size="txtManropeBold24Gray900"
                  >
                    5. Marketing Choices regarding your personal data
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[1054px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    Where we have your permission to do so (e.g. if you
                    subscribed to one of our email lists or indicated that you
                    are interested in receiving deals or information from us),
                    we will send you email marketing messages about products and
                    services which we feel may be of interest to you. You can
                    ‘opt-out’ of such communications if you would prefer not to
                    receive them in the future by using the “unsubscribe”
                    facility provided in the communication itself.
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

export default PrivacyPolicyPage;
