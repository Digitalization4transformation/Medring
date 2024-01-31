import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import mainLogo from "../../assets/medring.png"

function SidebarLogo({ icon, text, ...props }) {
  return (
    <div className="relative flex flex-row font-semibold text-3xl md:items-center md:mx-auto text-red-500 mb-5 p-4 justify-between">
      <Link to="/">
        {/* <FontAwesomeIcon icon={icon}></FontAwesomeIcon>  */}
        <img className="inline w-20 h-20" src={mainLogo} alt={text} />
        <div className="text-2xl"> {text}</div>
      </Link>
      <button
        onClick={props.toggle}
        className="border border-emerald-300 text-xl font-medium py-2 px-4 block md:hidden absolute right-1 top-3"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  );
}

export default SidebarLogo;
