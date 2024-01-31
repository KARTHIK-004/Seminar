import React from "react";
import { default as ModalProvider } from "react-modal";

import { useGoogleLogin } from "@react-oauth/google";

import { Button, CheckBox, Img, Input, Line, Text } from "components";

const LogInModal = (props) => {
  const googleSignIn = useGoogleLogin({
    onSuccess: (res) => {
      console.log("res", res);
      alert("Login successfull. 😍");
    },
  });

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
            <div className="flex flex-col gap-4 items-start justify-start w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-row gap-2 items-center justify-start w-full">
                  <Text
                    className="flex-1 text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-auto"
                    size="txtManropeExtraBold36"
                  >
                    Log in
                  </Text>
                  <Img
                    className="common-pointer h-[30px] w-[30px]"
                    src="images/img_close_gray_900.svg"
                    alt="close"
                    onClick={props.onRequestClose}
                  />
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-full">
                  <Input
                    name="textfieldlarge"
                    placeholder="user / email address"
                    className="font-semibold p-0 placeholder:text-gray-600 sm:pr-5 text-gray-600 text-left text-lg w-full"
                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex pl-4 pr-[35px] py-[17px] rounded-[10px] w-full"
                    type="email"
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
                    placeholder="Password"
                    className="font-semibold p-0 placeholder:text-gray-600 text-gray-600 text-left text-lg w-full"
                    wrapClassName="bg-white-A700 border border-bluegray-100 border-solid flex px-4 py-[17px] rounded-[10px] w-full"
                    type="password"
                    prefix={
                      <Img
                        className="mt-auto mb-px h-6 mr-3.5"
                        src="images/img_user_gray_600.svg"
                        alt="user"
                      />
                    }
                    suffix={
                      <Img
                        className="mt-auto mb-px h-6 ml-[35px]"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                    }
                  ></Input>
                </div>
              </div>
              <div className="flex flex-row gap-5 items-center justify-between w-full">
                <CheckBox
                  className="font-bold sm:pr-5 text-gray-900 text-left text-lg"
                  inputClassName="border-2 border-gray-900 border-solid h-[18px] mr-[5px] rounded w-[18px]"
                  name="remember"
                  id="remember"
                  label="Remember"
                ></CheckBox>
                <Text
                  className="text-gray-900 text-lg text-right w-auto"
                  size="txtManropeBold18Gray900"
                >
                  Forgot Password
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[18px] items-start justify-start w-full">
              <Button className="bg-gray-900 cursor-pointer font-bold py-4 rounded-[10px] text-center text-lg text-white-A700 w-full">
                Log in
              </Button>
              <Button
                className="common-pointer bg-white-A700 border border-gray-600 border-solid cursor-pointer flex items-center justify-center min-w-[420px] sm:min-w-full px-[34px] py-[17px] rounded-[10px]"
                onClick={() => googleSignIn()}
                leftIcon={
                  <Img
                    className="h-5 mb-[5px] mr-2.5"
                    src="images/img_refresh_gray_900.svg"
                    alt="refresh"
                  />
                }
              >
                <div className="font-bold sm:px-5 text-gray-900 text-left text-lg">
                  Log in with Google
                </div>
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

export default LogInModal;
