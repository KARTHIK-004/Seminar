import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Line, Text } from "components";

const NewPasswordModal = (props) => {
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
                      New Password
                    </Text>
                    <Img
                      className="common-pointer h-[30px] w-[30px]"
                      src="images/img_close_gray_900.svg"
                      alt="close"
                      onClick={props.onRequestClose}
                    />
                  </div>
                  <Text
                    className="text-gray-900 text-lg w-full"
                    size="txtManropeRegular18"
                  >
                    Enter your new password
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Input
                    name="textfieldlarge"
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
                <div className="flex flex-col items-start justify-start w-full">
                  <Input
                    name="textfieldlarge_One"
                    placeholder="Re-New Password"
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
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Button className="bg-gray-900 cursor-pointer font-bold py-4 rounded-[10px] text-center text-lg text-white-A700 w-full">
                Update Password
              </Button>
            </div>
            <Line className="bg-bluegray-100 h-px w-full" />
            <div className="flex flex-row gap-2 items-start justify-center w-full">
              <Text
                className="text-center text-gray-600 text-xl tracking-[-0.40px] w-auto"
                size="txtManropeSemiBold20Gray600"
              >
                Remember the Password?
              </Text>
              <Text
                className="text-gray-900 text-xl tracking-[-0.40px] w-auto"
                size="txtManropeSemiBold20Gray900"
              >
                Log in
              </Text>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default NewPasswordModal;
