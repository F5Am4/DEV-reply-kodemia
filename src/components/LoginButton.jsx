import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <button
      onClick={handleLoginClick}
      className="border border-neutral-300 rounded m-2 p-2 text-blue-500 font-bold hover:bg-blue-600 hover:text-white"
    >
      Log in
    </button>
  );
}
