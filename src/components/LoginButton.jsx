import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function LoginButton() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate("/NewPost");
    } else {
      navigate("/login"); // Llama a la función de login del contexto
    }
  };

  return (
    <button
      onClick={handleButtonClick}
      className="border border-neutral-300 rounded m-2 p-2 text-blue-500 font-bold hover:bg-blue-600 hover:text-white"
    >
      {isAuthenticated ? "Create Post" : "Log in"}
    </button>
  );
}
