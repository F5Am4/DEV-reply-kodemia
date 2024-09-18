import { FaDev, FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        alert("User created successfully");
        navigate("/login");
      } else {
        alert("Error creating user");
      }
    } catch (error) {
      console.error("There was an error creating the user!", error);
    }
  };

  return (
    <body className="bg-white text-black">
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
        <div className="flex justify-center w-auto pt-3">
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
            <img
              className="max-w-4 mr-56 absolute left-4"
              src="src/images/forem.png"
              alt="forem"
            />
            Sign up with Forem
          </button>
        </div>
        <div className="flex justify-center w-auto pt-2">
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <FaGithub
              className="absolute left-4"
              style={{ fontSize: "20px" }}
            />
            Sign up with GitHub
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
          <button className="flex w-1/4 justify-center items-center relative border border-neutral-300 text-black font-semibold text-xs py-2 px-4 rounded hover:bg-gray-200">
            <MdEmail className="absolute left-4" style={{ fontSize: "20px" }} />
            Sign up with Email
          </button>
        </div>

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
    </body>
  );
}
