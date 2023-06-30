import React, {useState} from "react";
import "./Navbar.css"
function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <>
      <nav className="flex justify-between w-full h-22 p-5 ">
        <div className="lg:my-5 xl:my-3">
          <a
            href="#home "
            className="text-white text-xl xl:text-2xl  "
          >
            GPT-3
          </a>
        </div>
        <div
          className="text-white text-xl pointer lg:hidden "
          onClick={handleClick}
        >
          <i
            id="bar"
            className={clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </div>
        <ul id="myLinks" className={clicked ? "#myLinks active " : "#myLinks"}>
          <li className=" text-white lg:mx-6 lg:my-1 my-6  w-20 mx-auto  block  lg:inline  lg:mx-[1rem]  lg:tracking-wider  xl:mx-[2rem]">
            <a href="www.google.com">Home</a>
          </li>
          <li className="text-white lg:mx-6 lg:my-2 my-6  w-28 mx-auto block  lg:inline  lg:mx-[1rem] lg:tracking-wider  xl:mx-[2rem]">
            <a href="www.google.com">What is GPT?</a>
          </li>
          <li className="text-white lg:mx-6 lg:my-2 my-6  w-20 mx-auto block  lg:inline  lg:mx-[1rem] lg:tracking-wider xl:mx-[2rem]">
            <a href="www.google.com">Open AI</a>
          </li>
          <li className="text-white lg:mx-6 lg:my-2 my-6  w-28 mx-auto block  lg:inline  lg:mx-[1rem] lg:tracking-wider xl:mx-[2rem]">
            <a href="www.google.com">Case Studies</a>
          </li>
          <li className="text-white lg:mx-6 lg:my-2 my-6  w-20 mx-auto block  lg:inline  lg:mx-[1rem] lg:tracking-wider xl:mx-[2rem]">
            <a href="www.google.com">Library</a>
          </li>
          <button className="text-white lg:mx-6 lg:my-2 my-6  w-24 mx-auto block  lg:inline border border-[#fff] p-2 lg:mx-[1rem] lg:tracking-wider  xl:mx-[2rem]">
            Sign in
          </button>
          <button className="text-white lg:mx-6 lg:my-2 my-6  w-24 mx-auto block  lg:inline bg-orange-700 p-2 rounded-md lg:mx-[1rem] lg:tracking-wider xl:mx-[2rem]">
            Sign up
          </button>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;

//  onClick={myFunction()}
