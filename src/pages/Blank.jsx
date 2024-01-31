import React from "react";
import Navbar from "../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import Chat from "../components/ChatComponent/Chat";

function Blank() {
  const [sidebarToggle] = useOutletContext();
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
            <Chat/>
        </div>
      </main>
    </>
  );
}

export default Blank;
