import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Line, Text } from "components";

const ResetPasswordModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[34%]"
      overlayClassName="bg-gray-900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="sm:h-auto md:h-auto max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start md:px-5 px-[30px] py-10 rounded-[10px] w-full">
          <div className="flex flex-col gap-8 items-center justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-2 items-start justify-start w-full">
                  <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <Text
                      className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                      size="txtManropeExtraBold36"
                    >
                      Reset Password
                    </Text>
                    <Img
                      className="common-pointer h-[30px] w-[30px]"
                      src="images/img_close_gray_900.svg"
                      alt="close"
                      onClick={props.onRequestClose}
                    />
                  </div>
                  <Text
                    className="leading-[180.00%] max-w-[420px] md:max-w-full text-gray-900 text-lg"
                    size="txtManropeRegular18"
                  >
                    <>
                      Enter the email address associated with your account and
                      we&#39;ll send you a link to reset your password.
                    </>
                  </Text>
                </div>
                <Input
                  name="textfieldlarge"
                  placeholder="user / email address"
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
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-gray-900 cursor-pointer font-bold py-4 rounded-[10px] text-center text-lg text-white-A700 w-full">
                Get OTP
              </Button>
              <Button className="bg-white-A700 border border-gray-600 border-solid cursor-pointer font-bold py-4 rounded-[10px] text-center text-gray-900 text-lg w-full">
                Return to sign in
              </Button>
            </div>
            <Line className="bg-bluegray-100 h-px w-full" />
            <div className="flex flex-row gap-2 items-start justify-center w-full">
              <Text
                className="text-center text-gray-600 text-xl tracking-[-0.40px] w-auto"
                size="txtManropeSemiBold20Gray600"
              >
                Don’t have an account?
              </Text>
              <Text
                className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                size="txtManropeSemiBold20Gray900"
              >
                Create Account
              </Text>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default ResetPasswordModal;
