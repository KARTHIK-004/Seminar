import React from "react";

import { createColumnHelper } from "@tanstack/react-table";

import { Button, Img, List, ReactTable, Text } from "components";
import BlogPageColumnactive from "components/BlogPageColumnactive";
import LandingPageFooter from "components/LandingPageFooter";
import LandingPageHeader from "components/LandingPageHeader";

const BlogDetailsPage = () => {
  const tableData = React.useRef([
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
    {
      fullname: "Zakir Hossen",
      title: "UI, UX Designer",
      emailaddress: "uxdesigner@gmail.com",
      phonenumber: "+88 222 5554 444",
    },
  ]);
  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();
    return [
      tableColumnHelper.accessor("fullname", {
        cell: (info) => (
          <Text
            className="flex-1 pb-[9px] pt-[17px] text-base text-gray-600"
            size="txtManropeSemiBold16Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 min-w-[234px] py-2.5 text-gray-900 text-xs"
            size="txtManropeSemiBold12Gray900"
          >
            Full Name
          </Text>
        ),
      }),
      tableColumnHelper.accessor("title", {
        cell: (info) => (
          <Text
            className="flex-1 pb-[7px] pt-[19px] text-base text-gray-600"
            size="txtManropeSemiBold16Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 min-w-[234px] py-2.5 text-gray-900 text-xs"
            size="txtManropeSemiBold12Gray900"
          >
            Title
          </Text>
        ),
      }),
      tableColumnHelper.accessor("emailaddress", {
        cell: (info) => (
          <Text
            className="flex-1 pb-[7px] pt-[19px] text-base text-gray-600"
            size="txtManropeSemiBold16Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 min-w-[234px] py-2.5 text-gray-900 text-xs"
            size="txtManropeSemiBold12Gray900"
          >
            Email Address
          </Text>
        ),
      }),
      tableColumnHelper.accessor("phonenumber", {
        cell: (info) => (
          <Text
            className="flex-1 pb-[9px] pt-[17px] text-base text-gray-600"
            size="txtManropeSemiBold16Gray600"
          >
            {info?.getValue()}
          </Text>
        ),
        header: (info) => (
          <Text
            className="flex-1 min-w-[214px] py-2.5 text-gray-900 text-xs"
            size="txtManropeSemiBold12Gray900"
          >
            Phone Number
          </Text>
        ),
      }),
    ];
  }, []);

  return (
    <>
      <div className="bg-gray-51 flex flex-col font-markoone sm:gap-10 md:gap-10 gap-[111px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <LandingPageHeader className="bg-white-A700 flex gap-2 h-20 md:h-auto items-center justify-between md:px-5 px-[120px] py-[19px] w-full" />
        <div className="flex flex-col font-manrope items-start justify-start pl-[120px] pr-[324px] md:px-10 sm:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
              size="txtManropeExtraBold36"
            >
              10 Delightful Dining Room Decor Trends for Spring
            </Text>
            <div className="flex flex-col md:gap-10 gap-[84px] items-start justify-start w-full">
              <div className="flex md:flex-col flex-row gap-4 items-end justify-between w-full">
                <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
                  <Img
                    className="h-[550px] sm:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                    src="images/img_rectangle5618_550x996.png"
                    alt="rectangle5618"
                  />
                  <Text
                    className="leading-[180.00%] text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                      What a time we are living in! A lot of things are coming
                      back, bringing back nostalgia. Wondering why I am talking
                      about nostalgia and all? Especially when it is supposed to
                      be an article on websites! Well, because some old famous
                      website technology is coming back too. Yes, I am talking
                      about static websites.
                      <br />
                      Long ago, almost all websites were used to be static sites
                      during the early days of the internet. Then dynamic sites
                      came and blew the space. A lot of websites shifted to it.
                      Obviously dynamic sites have their advantages. But static
                      sites are making a comeback. And it’s coming stronger than
                      before. In this article, you will cover the basics of
                      static websites like what is a static website, what are
                      the advantages, and when you should use a static website.
                      Let’s kick things off.
                    </>
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[11%] md:w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <Img
                      className="h-8 w-8"
                      src="images/img_facebook.svg"
                      alt="facebook"
                    />
                    <div className="flex flex-row gap-1 items-center justify-start w-auto">
                      <Img
                        className="h-8 w-8"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                      <div className="flex flex-col items-center justify-start w-[71%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[25px] items-center justify-start w-auto"
                          style={{
                            backgroundImage:
                              "url('images/img_frame1000001658.svg')",
                          }}
                        >
                          <Text
                            className="text-gray-900 text-xs w-auto"
                            size="txtManropeSemiBold12Gray900"
                          >
                            Share this
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-8 w-8"
                      src="images/img_twitter_bluegray_100.svg"
                      alt="twitter"
                    />
                    <Img
                      className="h-8 w-8"
                      src="images/img_reddit.svg"
                      alt="reddit"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-12 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                    size="txtManropeExtraBold28"
                  >
                    Blockquotes
                  </Text>
                  <Text
                    className="text-gray-600 text-lg w-full"
                    size="txtManropeRegular18Gray600"
                  >
                    <>
                      Blockquotes can be nested. Add a &gt;&gt; in front of the
                      paragraph you want to nest.
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="leading-[180.00%] max-w-[936px] md:max-w-full text-gray-600 text-lg"
                        size="txtManropeRegular18Gray600"
                      >
                        Static websites are way faster than dynamic ones. As
                        they don’t have a back-end system, there is no time loss
                        due to database connection. Instead, the lightweight,
                        pre-rendered HTML files load incredibly fast.
                      </Text>
                      <Text
                        className="leading-[180.00%] max-w-[936px] md:max-w-full text-gray-600 text-lg"
                        size="txtManropeRegular18Gray600"
                      >
                        But why fast loading is important? According to Neil
                        Patel, 47% of people on the internet expect a web page
                        to load in less than 2 seconds.
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col gap-10 items-start md:px-10 sm:px-5 px-[51px] py-[39px] rounded-[10px] w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                        size="txtManropeRegular18Gray600"
                      >
                        Static websites are way faster than dynamic ones. As
                        they don’t have a back-end system, there is no time loss
                        due to database connection. Instead, the lightweight,
                        pre-rendered HTML files load incredibly fast.
                      </Text>
                      <Text
                        className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                        size="txtManropeRegular18Gray600"
                      >
                        But why fast loading is important? According to Neil
                        Patel, 47% of people on the internet expect a web page
                        to load in less than 2 seconds.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-5 items-start justify-start my-0 w-full">
                    <Text
                      className="text-gray-900 text-xl tracking-[-0.40px] w-full"
                      size="txtManropeSemiBold20Gray900"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="text-gray-600 text-lg w-full"
                        size="txtManropeRegular18Gray600"
                      >
                        Dynamic site CMS like WordPress has a greater
                        dependency. They require an operating system like Linux
                      </Text>
                      <Text
                        className="leading-[180.00%] max-w-[894px] md:max-w-full text-gray-600 text-lg"
                        size="txtManropeRegular18Gray600"
                      >
                        Unlike dynamic websites, you don’t have to depend on
                        plugins to add functionalities to your static site.
                        Instead, you can create or include features directly
                        into files. Or, you can insert widgets using a snippet.
                      </Text>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                    size="txtManropeExtraBold28"
                  >
                    Images
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[996px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    Being a fast loading and more secure website, you can choose
                    a static website for beginner to medium level workload.
                    Hopefully, you have got the answer to what is a static
                    website and why should you use it. Decide carefully does
                    static sites are enough for your need.
                  </Text>
                </div>
                <Img
                  className="h-[532px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                  src="images/img_rectangle5619_532x996.png"
                  alt="rectangle5619"
                />
              </div>
              <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start w-full">
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                      size="txtManropeExtraBold28"
                    >
                      Lists
                    </Text>
                    <Text
                      className="leading-[180.00%] max-w-[996px] md:max-w-full text-gray-600 text-lg"
                      size="txtManropeRegular18Gray600"
                    >
                      Being a fast loading and more secure website, you can
                      choose a static website for beginner to medium level
                      workload. Hopefully, you have got the answer to what is a
                      static website and why should you use it. Decide carefully
                      does static sites are enough for your need.
                    </Text>
                  </div>
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtManropeSemiBold18Gray600"
                      >
                        Performance: Faster Loading Speed
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtManropeSemiBold18Gray600"
                      >
                        Less Server-side Dependencies
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtManropeSemiBold18Gray600"
                      >
                        Flexibility: More Freedom to Develop Websites
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtManropeSemiBold18Gray600"
                      >
                        Security: A More Secure Website
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtManropeSemiBold18Gray600"
                      >
                        Scalability: Capability to Handle Massive Traffic
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                      <div className="bg-gray-600 h-2.5 rounded-[50%] w-2.5"></div>
                      <Text
                        className="text-gray-600 text-lg w-auto"
                        size="txtManropeSemiBold18Gray600"
                      >
                        Hosting and Pricing: Saves Your Budget For Good
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg"
                      size="txtManropeBold18Gray600"
                    >
                      01.
                    </Text>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Performance: Faster Loading Speed
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[11px] items-center justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeBold18Gray600"
                    >
                      02.
                    </Text>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Less Server-side Dependencies
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeBold18Gray600"
                    >
                      03.
                    </Text>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Flexibility: More Freedom to Develop Websites
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3 items-center justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeBold18Gray600"
                    >
                      04.
                    </Text>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Security: A More Secure Website
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-3 items-center justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeBold18Gray600"
                    >
                      05.
                    </Text>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Scalability: Capability to Handle Massive Traffic
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[11px] items-center justify-start w-full">
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeBold18Gray600"
                    >
                      06.
                    </Text>
                    <Text
                      className="text-gray-600 text-lg w-auto"
                      size="txtManropeSemiBold18Gray600"
                    >
                      Hosting and Pricing: Saves Your Budget For Good
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                  size="txtManropeExtraBold28"
                >
                  Link
                </Text>
                <Text
                  className="leading-[180.00%] text-gray-600 text-lg"
                  size="txtManropeRegular18Gray600"
                >
                  <>
                    Yes, a static website may have all its benefits, but is it
                    suitable for you? That’s a big question. It depends on why
                    you are going to build a website, what purpose it will
                    serve. That’s why you must when you should use a static
                    website.
                    <br />
                    The followings are the common applications where using the
                    static website is the best choice. - Blog sites- - Small
                    business websites - Websites Under-Development - Personal
                    Portfolio sites - Websites that contain basic information
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-10 items-start justify-start w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="sm:text-2xl md:text-[26px] text-[28px] text-gray-900 tracking-[-0.56px] w-full"
                    size="txtManropeExtraBold28"
                  >
                    Tables
                  </Text>
                  <Text
                    className="leading-[180.00%] max-w-[996px] md:max-w-full text-gray-600 text-lg"
                    size="txtManropeRegular18Gray600"
                  >
                    The followings are the common applications where using the
                    static website is the best choice. - Blog sites- - Small
                    business websites.
                  </Text>
                </div>
                <div className="bg-white-A700 border border-bluegray-100 border-solid flex flex-col items-start justify-start px-10 sm:px-5 py-[50px] rounded-[10px] w-full">
                  <div className="overflow-auto w-full">
                    <ReactTable
                      columns={tableColumns}
                      data={tableData.current}
                      rowClass={""}
                      headerClass=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-full"
                  size="txtManropeBold24Gray900"
                >
                  Writen by
                </Text>
                <div className="flex flex-col items-center justify-between md:pr-10 sm:pr-5 pr-[568px] w-full">
                  <div className="flex sm:flex-col flex-row gap-6 items-center justify-start max-w-[836px] w-full">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_profilepicture.png"
                      alt="profilepicture"
                    />
                    <div className="flex flex-col gap-2 items-start justify-start w-[165px]">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl tracking-[-0.48px] w-auto"
                        size="txtManropeBold24Gray900"
                      >
                        Kristin Watson
                      </Text>
                      <Text
                        className="text-base text-gray-600 w-full"
                        size="txtManropeSemiBold16Gray600"
                      >
                        Co-founder and CDO
                      </Text>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
                      <div className="bg-bluegray-100 h-2 rounded-[50%] w-2"></div>
                      <Text
                        className="text-base text-gray-600 w-auto"
                        size="txtManropeSemiBold16Gray600"
                      >
                        July 20, 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-manrope items-start justify-start md:px-10 sm:px-5 px-[120px] w-full">
          <div className="flex flex-col gap-10 items-start justify-start max-w-[1200px] mx-auto w-full">
            <Text
              className="text-4xl sm:text-[32px] md:text-[34px] text-gray-900 tracking-[-0.72px] w-full"
              size="txtManropeExtraBold36"
            >
              Recent News
            </Text>
            <List
              className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-full"
              orientation="horizontal"
            >
              {new Array(3).fill({}).map((props, index) => (
                <React.Fragment key={`BlogPageColumnactive${index}`}>
                  <BlogPageColumnactive
                    className="flex flex-1 flex-col gap-6 items-start justify-start w-full"
                    {...props}
                  />
                </React.Fragment>
              ))}
            </List>
          </div>
        </div>
        <LandingPageFooter className="bg-white-A700 flex gap-2 items-center justify-center md:px-5 px-[120px] py-20 w-full" />
      </div>
    </>
  );
};

export default BlogDetailsPage;
