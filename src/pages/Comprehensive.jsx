import React from "react";
import Navbar from "../components/Navbar/Index";
import { NavLink, useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShieldVirus,
  faBookOpen,
  faVirusSlash,
  faHandsWash,
  faUserCheck,
  faMicroscope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Comprehensive() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}

        
        <div className="mainCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Card 1 */}
          <NavLink to='/Comp1'>
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faHeart} className="text-4xl text-[#0ea6ac] mb-2" />
            <p className="text-base text-gray-600">Self Awareness</p>
            {/* <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p> */}
          </div>
          </NavLink>

          {/* Card 2 */}
          <NavLink to='/Comp2'>
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faShieldVirus} className="text-4xl text-[#0ea6ac] mb-2" />
            <p className="text-base text-gray-600">Preventive Measures</p>
            {/* <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p> */}
          </div>
          </NavLink>
          

          {/* Card 3 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faBookOpen} className="text-4xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">HIV Lessons</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>

          {/* Card 4 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faVirusSlash} className="text-4xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">HIV Prevention</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>

          {/* Card 5 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faHandsWash} className="text-4xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">Hand Hygiene</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>

          {/* Card 6 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faUserCheck} className="text-4xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">Know Your Status</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>

          {/* Card 7 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faMicroscope} className="text-4xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">Research on HIV</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>

          {/* Card 8 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faPhone} className="text-4xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">Helpline Services</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Comprehensive;
