import { useState } from "react";
import { FaDev, FaApple, FaFacebookSquare, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { signUp } from "../signup";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [showEmailSignup, setShowEmailSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailSignupClick = () => {
    setShowEmailSignup(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await signUp(email, password);

    if (result.success) {
      setMessage(result.message);
      navigate("/");
    } else {
      setMessage(result.message);
    }
  };

  return (
    <div className="bg-white text-black">
      <main className="box-content">
        <h1>Aqui va el signup</h1>
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
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FaApple className="absolute left-4" style={{ fontSize: "20px" }} />
            Sign up with Apple
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FaFacebookSquare
              className="absolute left-4"
              style={{ fontSize: "20px" }}
            />
            Sign up with Facebook
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FcGoogle
              className="absolute left-4"
              style={{ fontSize: "20px" }}
            />
            Sign up with Google
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FaSquareXTwitter
              className="absolute left-4"
              style={{ fontSize: "20px" }}
            />
            Sign up with Twitter (X)
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button
            className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200"
            onClick={handleEmailSignupClick}
          >
            <MdEmail className="absolute left-4" style={{ fontSize: "20px" }} />
            Sign up with Email
          </button>
        </div>
        {showEmailSignup && (
          <div className="flex justify-center w-auto pt-5">
            <form onSubmit={handleSubmit} className="flex flex-col w-1/4">
              <label className="font-semibold text-sm pb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-neutral-300 rounded p-2 mb-3"
                required
              />
              <label className="font-semibold text-sm pb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-neutral-300 rounded p-2 mb-3"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
              >
                Sign Up
              </button>
            </form>
          </div>
        )}

        <div className="flex flex-row justify-center pt-5 pb-5">
          <div className="w-96">
            <div className="pb-5">
              <p className="text-xs font-light">
                By signing up, you are agreeing to our{" "}
                <a className="text-blue-600" href="">
                  privacy policy, terms of use
                </a>{" "}
                <br /> and{" "}
                <a className="text-blue-600" href="">
                  code of conduct.
                </a>
              </p>
            </div>
            <div className="flex justify-center pt-5 border-t border-neutral-300 w-auto">
              <p className="">
                Already have account?{" "}
                <a className="text-blue-600" href="">
                  Log in.
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
