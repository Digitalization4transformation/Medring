import React from "react";
// import StatisticWidget from "../components/Widget/Statistic.jsx";
// import AchievementWidget from "../components/Widget/Achievment.jsx";
import DashboardHeader from "../components/Other/DashboardHeader.jsx";
// import ScrolledCard from "../components/Widget/ScrolledCard.jsx";
import { useOutletContext } from "react-router-dom";
import avatarIMg from '../assets/add-30.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faComments,
  faStethoscope,
  faClinicMedical,
  faMapLocation,
  faBook,
  faUserMd,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";



function Dashboard() {
  const avatar = avatarIMg;
    
  
  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <main className="h-full">
        {/* Welcome Header */}
        <DashboardHeader
          toggle={sidebarToggle}
          avatar={avatar}
          user={{ name: "Daniel Koomson" }}
        />

        {/* Main Content */}
        <div className="mainCard grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faBook} className="text-3xl text-[#0ea6ac] mb-2" />
            <p className="text-base text-gray-600">Comprehensive</p>
          </div>

          {/* Card 2 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faVideo} className="text-3xl text-[#0ea6ac] mb-2" />
            <p className="text-base text-gray-600">Video Lesson</p>
          </div>

          {/* Card 3 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faComments} className="text-3xl text-[#0ea6ac] mb-2" />
            <p className="text-base text-gray-600">Forum</p>
          </div>

          {/* Card 4 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faStethoscope} className="text-3xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">Consultation</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>

          {/* Card 5 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faNewspaper} className="text-3xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">Blog</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>

          {/* Card 6 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faMapLocation} className="text-3xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">Treatment Centres</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>

          {/* Card 7 */}
          {/* <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faClinicMedical} className="text-3xl text-[#0ea6ac] mb-2" />
            <p className="text-base text-gray-600">Health Clinics</p>
          </div> */}

          {/* Card 8 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faUserMd} className="text-3xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">Specialists</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
          </div>

          {/* Card 9 */}
          <div className="border w-full h-40 border-gray-200 bg-white py-4 px-6 rounded-md flex flex-col items-center justify-center">
            <FontAwesomeIcon icon={faClinicMedical} className="text-3xl text-[#707272] mb-2" />
            <p className="text-base text-gray-600">Emergency Services</p>
            <p className="bottom text-sm text-[#10b349b9] rounded-md px-1 bg-[#d7d8d8] mt-4 ml-32 ">Coming Soon</p>
            
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
