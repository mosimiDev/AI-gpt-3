import React from "react";
function Footer() {
 return (
   <div className="bg-[#031B34] w-full mt-12 rounded-xl p-5">
     <h1 className="footer-text text-3xl w-full font-bold   sm:w-96 sm:mx-auto md:w-[45.5rem]">
       Do you want to step in to the future before others?
     </h1>
     <button className="border border-[#fff] p-3 text-white w-44 ml-16 mt-4 mb-10 sm:ml-[15.5rem] md:ml-[18.7rem] lg:ml-[26rem] xl:ml-[36rem] 2xl:ml-[44rem]">
       Request Early Access
     </button>
     <div className="md:flex w-11/12 mx-auto ">
       <div id="f-logo" className="w-3/4 mx-auto mb-8">
         <h2 className="text-white text-xl w-16 mb-2 mx-auto font-bold ">
           GPT-3
         </h2>
         <p className="text-white w-11/12 mx-auto">
           Crechterwoord K12 182 DK Alknjkcb,All Rights Reserved
         </p>
       </div>
       <div id="f-links" className="w-3/4 mx-auto mb-8">
         <h4 className="text-white text-xl w-10 mb-2 mx-auto font-bold">
           Links
         </h4>
         <a href="#" className="text-white block w-10 mx-auto">
           Overons
         </a>
         <a href="#" className="text-white block w-10 mx-auto">
           Social Media
         </a>
         <a href="#" className="text-white block w-10 mx-auto">
           Counters
         </a>
         <a href="#" className="text-white block w-10 mx-auto">
           Contact
         </a>
       </div>
       <div id="f-company" className="w-3/4 mx-auto mb-8">
         <h4 className="text-white text-xl w-16 mb-2 mx-auto font-bold">
           Company
         </h4>
         <a href="#" className="text-white  block w-[8.7rem] mx-auto xl:mb-2">
           Terms & Conditions
         </a>
         <a href="#" className="text-white block w-[6.3rem] mx-auto xl:mb-2">
           Privacy Policy
         </a>
         <a href="#" className="text-white block w-10 mx-auto">
           Contact
         </a>
       </div>
       <div id="f-contact" className="w-3/4 mx-auto mb-8">
         <h4 className="text-white text-xl w-32 mb-2 mx-auto font-bold">
           Get in touch
         </h4>
         <p className="text-white w-42 mx-auto">
           Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved.
         </p>
         <p className="text-white w-32 my-2 mx-auto">085-132567</p>
         <p className="text-white w-36 mx-auto">info@payme.net</p>
       </div>
     </div>
   </div>
 );
}
export default Footer;