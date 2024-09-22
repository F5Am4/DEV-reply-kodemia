import React, { useState, useContext } from "react";
import { CgBell } from "react-icons/cg";
import { HiArrowCircleUp } from "react-icons/hi";
import LoginButton from "./LoginButton";
import { AuthContext } from "../AuthContext";

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        credentials: "include", // Asegura que la cookie de sesión se envíe con la solicitud
      });
      logout(); // Llama al método de logout del contexto después de la solicitud exitosa
      setMenuVisible(false); // Oculta el menú desplegable
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

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
        className="relative col-span-1"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={toggleMenu}
      >
        <HiArrowCircleUp style={{ color: "black", fontSize: "2em" }} />
        {isAuthenticated && menuVisible && (
          <div className="absolute top-full right-0 mt-0 w-40 bg-white border border-stone-300 rounded shadow-lg mr-4">
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
