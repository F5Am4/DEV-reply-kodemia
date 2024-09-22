import { FaDev } from "react-icons/fa";
import { FaApple, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { MdEmail } from "react-icons/md";

import { loginUser } from "../middlewares/auth";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser(email, password);
    if (result.success) {
      setMessage(result.message);
      navigate("/");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="bg-white text-black">
      <h1>Este es el Login</h1>
      <main className="box-content">
        <div className="flex flex-row justify-center">
          <FaDev style={{ fontSize: "3rem" }} />
        </div>
        <div className="flex justify-center">
          <h1 className="font-sans font-bold text-2xl">
            Join the DEV Community
          </h1>
        </div>
        <div className="flex justify-center">
          <h3 className="text-sm font-light">
            DEV Community is a community of 2,035,460 amazing developers
          </h3>
        </div>

        {/* Botones de otros proveedores */}
        <div className="flex justify-center w-auto pt-3">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FaApple className="absolute left-4" style={{ fontSize: "20px" }} />
            Continue with Apple
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FaFacebookSquare
              className="absolute left-4"
              style={{ fontSize: "20px" }}
            />
            Continue with Facebook
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <img
              className="max-w-4 mr-56 absolute left-4"
              src="src/images/forem.png"
              alt="forem"
            />
            Continue with Forem
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FaGithub
              className="absolute left-4"
              style={{ fontSize: "20px" }}
            />
            Continue with GitHub
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FcGoogle
              className="absolute left-4"
              style={{ fontSize: "20px" }}
            />
            Continue with Google
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FaSquareXTwitter
              className="absolute left-4"
              style={{ fontSize: "20px" }}
            />
            Continue with Twitter (X)
          </button>
        </div>

        {/* Formulario de login */}
        <div className="flex flex-row justify-center pt-5 pb-5">
          <div className="w-1/4">
            <div className="flex flex-col justify-center pt-5 border-t border-neutral-300 w-auto">
              <div className="pb-5">
                <span className="font-bold text-sm">Email</span>
                <input
                  className="flex w-full items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Actualizamos el estado de email
                  placeholder="Enter your email"
                />
              </div>
              <div className="pb-5">
                <span className="font-bold text-sm">Password</span>
                <input
                  className="flex w-full items-center border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Actualizamos el estado de password
                  placeholder="Enter your password"
                />
              </div>
              <div className="pb-5 flex justify-between">
                <div>
                  <p className="text-sm">Remember me</p>
                </div>
                <div>
                  <p className="text-blue-600 text-sm">Forgot password?</p>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="rounded bg-blue-600 text-white text-sm font-bold cursor-pointer flex w-full justify-center py-2 px-4 hover:bg-blue-800"
                  onClick={handleSubmit} // Llamamos a handleLogin al hacer clic
                >
                  Log in
                </button>
              </div>
              {message && (
                <div className="pt-5">
                  <p>{message}</p> {/* Mostramos el mensaje de éxito o error */}
                </div>
              )}
              <div className="pb-5 pt-5">
                <p className="text-xs">
                  By signing in, you are agreeing to our{" "}
                  <a className="text-blue-600" href="">
                    privacy policy, terms of use <br />
                  </a>{" "}
                  and{" "}
                  <a className="text-blue-600" href="">
                    code of conduct.
                  </a>
                </p>
              </div>
              <div className="pb-5 pt-5 flex justify-center text-sm">
                <p>
                  New to DEV Community?{" "}
                  <a className="text-blue-600" href="">
                    Create account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
