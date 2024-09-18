import { CgBell } from "react-icons/cg";
import { HiArrowCircleUp } from "react-icons/hi";
import React from "react";
import LoginButton from "./LoginButton";

export default function NavBar() {
  return (
    <nav className="flex flex-row bg-white justify-center border border-stone-300 fixed w-full top-0 z-10 md:p-auto lg:p-auto sm:p-auto">
      <div className="flex md:flex-row sm:flex-col">
        {/* Boton de inicio */}
        <button className="bg-black text-white m-2 p-2 border rounded font-semibold">
          DEV
        </button>
      </div>
      <div className="flex md:flex-row sm:flex-col">
        <input
          className="border border-neutral-300 rounded m-2 p-2 w-96 mr-96"
          type="text"
          placeholder="Search...                                Powered by @Angolia"
        />
      </div>
      <div className="col-span-1">
        {/* Este boton es el de 'login' */}

        <LoginButton />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <CgBell style={{ color: "black", fontSize: "2em" }} />
      </div>
      <div
        className="col-span-1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <HiArrowCircleUp style={{ color: "black", fontSize: "2em" }} />
      </div>
      {/* </div> */}
    </nav>
  );
}
