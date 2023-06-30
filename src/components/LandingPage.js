import React from "react";
import "../LandingPage.css";
function Landingpage() {
  return (
    // ENCOMPASSING DIV
    <div className="">
      {/* MAIN LANDING PAGE DIV */}
      <div className="lg:flex">
        <div className=" lg:h-[30rem] lg:w-3/5 2xl:h-[25rem] ">
          <h2
            id="header-text"
            className="mx-auto w-4/5 text-xl text-center md:text-2xl  lg:text-4xl 2xl:w-[36rem] "
          >
            Let’s Build Something amazing with GPT-3 OpenAI
          </h2>
          <p className="text-cyan-500 mx-auto w-4/5 my-4 text-[1.1rem] sm:w-[30rem] lg:leading-9 2xl:w-[35rem] ">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
            className="bg-[#052D56] mx-auto w-4/5 block p-2 rounded-md sm:w-[30rem] lg:mt-8 xl:p-3 "
          />
          <button className="text-white w-32 bg-orange-700 p-2 rounded-md mt-2 ml-60 sm:ml-[27rem] xl:ml-[31rem] 2xl:ml-[38rem]">
            Get Started
          </button>
        </div>
        <img
          src={require("../assets/Header Illustration.png")}
          alt="image"
          className="hidden lg:block lg:w-[27.7rem] lg:h-[30rem] xl:w-[31rem] xl:h-[32rem] 2xl:w-[37rem] 2xl:h-[39rem]"
        />
      </div>
      {/*   NUMBER OF USERS DIV */}
      <div className="sm:flex sm:gap-1 sm:w-11/12 sm:mx-auto xl:relative xl:bottom-28 2xl:bottom-52">
        <img
          src={require("../assets/Group 81.png")}
          className="w-64 mx-auto mt-8 object-cover sm:w-2/3 lg:w-[30rem] "
        />
        <span className="text-white block w-11/12 mx-auto sm:mt-14 sm:1/3 lg:tracking-wider">
          people requested access a visit in last 24 hours
        </span>
      </div>

      {/* END OF MAIN LANDING PAGE DIV */}
      {/* COMPANIES LOGO */}
      <div className="w-11/12 mx-auto my-6 sm:mt-16  flex gap-2 sm:gap-14 md:gap-32 lg:gap-44 xl:gap-52 ">
        <img
          src={require("../assets/google.png")}
          alt="image"
          className="w-14 h-4 mx-2 object-cover  sm:w-14 sm:h-5   xl:w-24 xl:h-8"
        />
        <img
          src={require("../assets/slack.png")}
          alt="image"
          className="w-18 h-4 mx-2 sm:w-16 sm:h-4 object-cover xl:w-28 xl:h-6"
        />

        <img
          src={require("../assets/dropbox.png")}
          alt="image"
          className="w-18 h-5 mx-2 sm:w-18 sm:h-4 object-cover  xl:w-32 xl:h-6 "
        />
        <img
          src={require("../assets/shopify.png")}
          alt="image"
          className="w-14 h-4 mx-2 sm:w-16 sm:h-4 object-cover xl:w-32 xl:h-8"
        />
      </div>
      {/* END OF COMPANIES LOGO */}
      {/* COMPANY'S DESCRIPTION */}
      <div className="bg-gradient-to-r from-[#07284b] to-[#1a65b4] w-11/12 mx-auto rounded-xl mt-20 lg:h-[33rem]">
        <div className="flex py-8 ">
          <h2 className="text-white w-1/3  ml-4 lg:text-lg">
            <hr id="hr" />
            What is GPT-3
          </h2>
          <p className="text-[#81AFDD] text-sm w-2/3  lg:text-base lg:tracking-wider ">
            We so opinion friends me message as delight. Whole front do of plate
            heard oh ought. His defective nor convinced residence own.
            Connection has put impossible own apartments boisterous. At jointure
            ladyship an insisted so humanity he. Friendly bachelor entrance to
            on by.
          </p>
        </div>

        <div className="flex my-10 px-4 gap-8 w-full">
          <h1 className="desc-text text-xl w-3/5 lg:text-2xl">
            The possibilities are beyond your imagination
          </h1>
          <p className="desc-text text-sm w-2/5 lg:text-base">
            Explore The Library
          </p>
        </div>
        <div id="cke-container" className="lg:flex xl:gap-28 2xl:gap-40">
          {/* Chatbot */}
          <div className="mb-4">
            <h2 className="text-white font-bold ml-4">
              <hr id="hr" />
              Chatbots
            </h2>
            <p className="text-[#81AFDD] w-11/12 mx-auto sm:w-[34rem] lg:w-[18rem] lg:mx-2">
              We so opinion friends me message as delight. Whole front do of
              plate heard oh ought. His defective nor convinced residence own.
              Connection has put impossible own apartments boisterous.
            </p>
          </div>
          {/* Knowledgebase */}
          <div className="mb-4">
            <h2 className="text-white font-bold ml-4">
              <hr id="hr" />
              Knowledgebase
            </h2>
            <p className="text-[#81AFDD] w-11/12 mx-auto sm:w-[34rem] lg:w-[18rem] lg:mx-2">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments.
            </p>
          </div>
          {/* Education */}
          <div className="pb-5">
            <h2 className="text-white font-bold ml-4">
              <hr id="hr" />
              Education
            </h2>
            <p className="text-[#81AFDD] w-11/12 mx-auto sm:w-[34rem] lg:w-[18rem] lg:mx-2">
              At jointure ladyship an insisted so humanity he. Friendly bachelor
              entrance to on by. As put impossible own apartments.
            </p>
          </div>
        </div>
      </div>
      {/* END OF COMPANY'S DESCRIPTION */}
      {/* COMPANY'S FEATURE */}
      <div className="w-10/12 mx-auto mt-14">
        <div className="mb-8 ">
          <h1 className="cf-text text-xl  font-bold lg:text-2xl">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen
          </h1>
          <a href="#" className="text-red-300">
            Request Early Access to Get Started
          </a>
        </div>
        <div id="cf-two">
          <div className="flex gap-5 mb-5">
            <h2 className="text-white text-base font-bold w-1/3">
              <hr id="hr" />
              Improving end distrusts instantly
            </h2>
            <p className="text-[#81AFDD] w-2/3">
              From they fine john he give of rich he. They age and draw mrs
              like. Improving end distrusts may instantly was household
              applauded.
            </p>
          </div>

          <div className="flex gap-5 mb-5">
            <h2 className="text-white text-base font-bold w-1/3">
              <hr id="hr" />
              Become the tended active
            </h2>
            <p className="text-[#81AFDD] w-2/3">
              Considered sympathize ten uncommonly occasional assistance
              sufficient not. Letter of one become he tended active enable to.
            </p>
          </div>

          <div className="flex gap-5 mb-5">
            <h2 className="text-white text-base font-bold w-1/3">
              <hr id="hr" />
              Message or am nothing
            </h2>
            <p className="text-[#81AFDD] w-2/3">
              Led ask possible mistress relation elegance eat likewise debating.
              By message or am nothing amongst chiefly address.
            </p>
          </div>

          <div className="flex gap-5 mb-5">
            <h2 className="text-white text-base font-bold w-1/3">
              <hr id="hr" />
              Really boy law county
            </h2>
            <p className="text-[#81AFDD] w-2/3">
              Really boy law county she unable her sister. Feet you off its like
              like six. Among sex are leave law built now. In built table in an
              rapid blush.
            </p>
          </div>
        </div>
      </div>
      {/* END OF COMPANY'S FEATURES */}
      {/* FEATURE IMAGE & CONTENT */}
      <div>
        <img
          src={require("../assets/Feature Image.png")}
          alt="image"
          className="w-10/12 h-[26rem] mx-auto mt-12 sm:h-[28rem] md:h-[30rem] md:w-[30rem] lg:h-[35rem]"
        />
        <div className="w-3/4 mx-auto">
          <h2 className="text-[#71E5FF] my-8">
            Request Early Access to Get Started
          </h2>
          <h1 className="fc-text text-xl font-bold mb-5 lg:text-2xl">
            The possibilities are beyond your imagination
          </h1>
          <p className="text-[#81AFDD] md:w-[30rem] lg:text-lg">
            Yet bed any for travelling assistance indulgence unpleasing. Not
            thoughts all exercise blessing. Indulgence way everything joy
            alteration boisterous the attachment. Party we years to order allow
            asked of.
          </p>
        </div>
      </div>
      {/* END OF FEATURE IMAGE & CONTENT */}
      {/* CALL TO ACTION TAB */}
      <div className="bg-gradient-to-r from-[#AE67FA] to-[#F49867] mt-8 w-11/12 mx-auto p-3 rounded-xl mb-32 lg:h-28">
        <p className="text-[#000]">Request Early Access to Get Started</p>
        <div className="md:flex md:gap-1 lg:gap-4 lg:mt-3 2xl:gap-8">
          <h2 className="text-[#000] text-xl font-bold mb-3 ">
            Register today & start exploring the endless possibilities
          </h2>
          <button className="text-white bg-[#000] rounded-2xl p-2 px-6 ">
            Get Started
          </button>
        </div>
      </div>
      {/* END OF CALL TO ACTION TAB */}
      {/* BLOG SECTION */}
      <div>
        <h1 className="blog-text text-3xl font-bold w-3/4 mx-auto mb-4 lg:text-4xl lg:h-12 ">
          A lot is happening, we are blogging about it.
        </h1>
        <div className="w-11/12 mx-auto">
          <img
            src={require("../assets/Group 99.png")}
            alt="image"
            className="w-full rounded-xl object-cover mb-6 md:w-5/6 md:mx-auto md:h-[40rem] lg:w-[38rem] xl:ml-32"
          />
          <img
            src={require("../assets/Group 97.png")}
            alt="image"
            className="w-full rounded-xl object-cover mb-6 md:w-5/6 md:mx-auto md:h-[40rem] lg:w-[38rem] xl:ml-32"
          />
          <img
            src={require("../assets/Group 100.png")}
            alt="image"
            className="w-full rounded-xl object-cover mb-6 md:w-5/6 md:mx-auto md:h-[40rem] lg:w-[38rem] xl:ml-32"
          />
          <img
            src={require("../assets/Group 98.png")}
            alt="image"
            className="w-full rounded-xl object-cover mb-6 md:w-5/6 md:mx-auto md:h-[40rem] lg:w-[38rem] xl:ml-32"
          />
          <img
            src={require("../assets/Group 101.png")}
            alt="image"
            className="w-full rounded-xl object-cover mb-6 md:w-5/6 md:mx-auto md:h-[40rem] lg:w-[38rem] xl:ml-32"
          />
        </div>
      </div>
    </div>
  );
}
export default Landingpage;
