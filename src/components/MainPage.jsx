import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { FcHome } from "react-icons/fc";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { BsFillArchiveFill } from "react-icons/bs";
import { CiMicrophoneOn } from "react-icons/ci";
import { FcVideoCall } from "react-icons/fc";
import { BsTags } from "react-icons/bs";
import { FcIdea } from "react-icons/fc";
import { FcShop } from "react-icons/fc";
import { AiOutlineHeart } from "react-icons/ai";
import { FaTrophy } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { FcContacts } from "react-icons/fc";
import { FcAddressBook } from "react-icons/fc";
import { MdOutlineAddReaction } from "react-icons/md";
import { BsHandThumbsUp } from "react-icons/bs";
import { FaRegFaceGrinWide } from "react-icons/fa6";
import { PiEyesFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FiTwitch } from "react-icons/fi";
import { FaMastodon } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Posts from "./Posts";
import React from "react";

export default function MainPage() {
  //   const { isAuthenticated, login, logout } = useContext(AuthContext);
  //   console.log('Authenticated:', isAuthenticated);

  return (
    <main className="bg-neutral-200 text-black mt-14">
      <div className="gap-6 grid grid-cols-6 mx-64">
        {/* Left-Bar */}
        <div className="col-span-1"></div>
        <div className="flex flex-col col-span-1">
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <FcHome style={{ fontSize: "20px", marginRight: "1rem" }} /> Home
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <TbSquareRoundedPlusFilled
              style={{ fontSize: "20px", marginRight: "1rem" }}
            />{" "}
            DEV ++
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <BsFillArchiveFill
              style={{ fontSize: "20px", marginRight: "1rem" }}
            />{" "}
            Reading List
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <CiMicrophoneOn style={{ fontSize: "20px", marginRight: "1rem" }} />{" "}
            Podcast
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <FcVideoCall style={{ fontSize: "20px", marginRight: "1rem" }} />
            Videos
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <BsTags style={{ fontSize: "20px", marginRight: "1rem" }} />
            Tags
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <FcIdea style={{ fontSize: "20px", marginRight: "1rem" }} />
            DEV Help
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <FcShop style={{ fontSize: "20px", marginRight: "1rem" }} />
            Forem Shop
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <AiOutlineHeart style={{ fontSize: "20px", marginRight: "1rem" }} />
            Advertise on DEV
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <FaTrophy style={{ fontSize: "20px", marginRight: "1rem" }} />
            DEV Challenges
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <BsStars style={{ fontSize: "20px", marginRight: "1rem" }} />
            DEV Showcase
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <FaDev style={{ fontSize: "20px", marginRight: "1rem" }} />
            About
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <FcContacts style={{ fontSize: "20px", marginRight: "1rem" }} />
            Contact
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <FcAddressBook style={{ fontSize: "20px", marginRight: "1rem" }} />
            Guides
          </a>
          <a
            className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center justify-start"
            href=""
          >
            <MdOutlineAddReaction
              style={{ fontSize: "20px", marginRight: "1rem" }}
            />
            Software comparisons
          </a>
          {/* 'Other' */}
          <div>
            <p className="font-bold p-3">Other</p>
          </div>
          {/* Menu 'Other' */}
          <div className="flex flex-col">
            <a
              className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center"
              href=""
            >
              <BsHandThumbsUp
                style={{ fontSize: "20px", marginRight: "1rem" }}
              />
              Code of Conduct
            </a>
            <a
              className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center"
              href=""
            >
              <FaRegFaceGrinWide
                style={{ fontSize: "20px", marginRight: "1rem" }}
              />
              Privacy Policy
            </a>
            <a
              className="hover:text-blue-600 hover:bg-neutral-300 rounded decoration-slice p-2 flex items-center"
              href=""
            >
              <PiEyesFill style={{ fontSize: "20px", marginRight: "1rem" }} />
              Terms of use
            </a>
          </div>
          {/* Lista de Social Icons */}
          <div className="flex flex-row items-center justify-between pt-5 mb-5">
            <FaSquareXTwitter
              className="hover:text-blue-600 hover:bg-neutral-300 rounded"
              style={{ fontSize: "25px" }}
            />
            <FaFacebookSquare
              className="hover:text-blue-600 hover:bg-neutral-300 rounded"
              style={{ fontSize: "25px" }}
            />
            <FaGithub
              className="hover:text-blue-600 hover:bg-neutral-300 rounded"
              style={{ fontSize: "25px" }}
            />
            <AiFillInstagram
              className="hover:text-blue-600 hover:bg-neutral-300 rounded"
              style={{ fontSize: "25px" }}
            />
            <FiTwitch
              className="hover:text-blue-600 hover:bg-neutral-300 rounded"
              style={{ fontSize: "25px" }}
            />
            <FaMastodon
              className="hover:text-blue-600 hover:bg-neutral-300 rounded"
              style={{ fontSize: "25px" }}
            />
          </div>

          {/* My Tags */}
          <p className="font-bold p-3">My Tags</p>
          {/* Lista de Tags */}
          <div className="flex flex-col">
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #webdev
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #javascript
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #react
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #python
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #devops
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #opensource
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #css
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #aws
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #career
            </a>
            <a className="hover:text-blue-600 decoration-slice p-2" href="">
              #typescript
            </a>
          </div>
          <div className="border p-2">
            <div className="bg-white rounded border border-stone-300 p-2">
              <p className="text-sm">💎DEV Diamond Sponsor</p>
              <a href="">...</a>
              <div>
                <p className="font-bold">
                  Thank you to our Diamond <br /> Sponsor Neon
                </p>
              </div>
              <div>
                <img
                  className="rounded"
                  src="src/images/Screenshot20atE2AFPM.png"
                  alt=""
                />
              </div>
              <p className="font-medium">
                Neon is the official database <br />
                partner of DEV
              </p>
              <p>Happy coding ❤</p>
            </div>
          </div>
          <div className="border p-2">
            <div className="bg-white rounded border border-stone-300 p-2">
              <p>DEV Community</p>
              <a href="">...</a>
              <div>
                <img
                  className="rounded"
                  src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_2tlkmy55xik6gfbcah9f.avif"
                  alt=""
                />
              </div>
              <p className="font-bold text-lg">
                Want to stay ahead <br /> of the game in the <br /> world of
                coding?
              </p>
              <p>
                Join our newsletter community <br />
                and never miss a beat
              </p>
            </div>
            <div className="pt-3">
              <p className="text-sm text-stone-500">
                <a className="font-bold text-blue-600" href="">
                  DEV Community
                </a>{" "}
                A constructive and <br /> inclusive social network for software{" "}
                <br /> developers. With you every step of your <br /> journey.
              </p>
              <div className="pt-3">
                <p className="text-sm text-stone-500">
                  Built on{" "}
                  <a className="font-bold text-blue-600" href="">
                    Forem
                  </a>{" "}
                  — the open source <br /> software that powers DEV and other{" "}
                  <br /> inclusive communities.
                </p>
                <div className="pt-3">
                  <p className="text-sm text-stone-500">
                    Made with love and{" "}
                    <a className="text-blue-600" href="">
                      Ruby on Rails.
                    </a>{" "}
                    DEV <br /> Community © 2016 - 2024.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central Bar */}
        <div className="pt-3 col-span-2">
          <div className="flex flex-row text-start space-x-6 pt-3 pb-2">
            <a className="font-bold hover:bg-white rounded" href="">
              Relevant
            </a>
            <a className="hover:bg-white rounded" href="">
              Latest
            </a>
            <a className="hover:bg-white rounded" href="">
              Top
            </a>
          </div>

          {/* Card principal */}
          <div className="flex flex-col justify-center items-center bg-white rounded border border-stone-300">
            <div className="flex justify-between w-full items-center pb-5">
              <p className="text-sm ml-5 pt-5">👋DEV Challenges</p>
              <ImCross style={{ marginRight: "20px", marginTop: "20px" }} />
            </div>
            {/* AQUI VA LA IMAGEN PRINCIPAL */}
            <div className="items-center mr-5 ml-5">
              <img
                className="rounded w-auto h-auto"
                src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_00s8uctceo8kh9mndajn.avif"
                alt=""
              />
            </div>
            <div className="items-start w-full px-5 pb-5">
              <h2 className="font-bold text-lg">New thing</h2>
              <div className="border border-stone-300 p-2 rounded grid grid-flow-col justify-start">
                <div className="flex">
                  <img
                    className="size-7 rounded"
                    src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_organization_profile_image_1_d908a186-5651-4a5a-9f76-15200bc6801f.avif"
                    alt=""
                  />
                </div>
                <div className="flex-row w-full">
                  <p className="font-bold text-lg">Introducing DEV ++</p>
                  <p className="text-sm">
                    Ben Halpern for The DEV Team -Aug 29
                  </p>
                  <div className="">
                    <a href="">#meta</a>
                    <a href="">#news</a>
                    <a href="">#productivity</a>
                    <a href="">#career</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-3"></div>

          <div className="bg-white rounded border border-stone-300">
            <img
              className="rounded-tl round-tr"
              src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_articles_5ov27va8loank4fl1plk.avif"
              alt=""
            />
            <div className="pt-2 flex flex-row">
              <div className="flex ml-5">
                <img
                  className="size-7 rounded"
                  src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_organization_profile_image_9423_69191449-e29c-406b-ba64-3dcdf3b4026a.avif"
                  alt=""
                />
              </div>
              <div className="flex-col">
                <p className="text-sm">
                  <a className="font-bold" href="">
                    Anmol Baranwal
                  </a>{" "}
                  for{" "}
                  <a className="font-bold" href="">
                    Requestly
                  </a>
                </p>
                <p className="text-sm">Sep 5 3 days ago</p>
              </div>
            </div>
            <div className="text-xl font-bold ml-5">
              <h1>How to Build Frontend Apps 10x Faster</h1>
            </div>
            <div className="flex ml-5">
              <a href="">#opensource</a>
              <a href="">#javascript</a>
              <a href="">#programming</a>
              <a href="">#webdev</a>
            </div>
            <div className="ml-5">
              <a href="">116 Reactions</a>
              <a href="">15 Comments</a>
              <a className="text-sm" href="">
                10 min read
              </a>
            </div>
            <div className="flex ml-5">
              <img
                className="size-7 rounded-full border border-stone-600"
                src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_user_profile_image_184195_98783497-31d4-4020-9e54-32ee9ff9cfcc.avif"
                alt=""
              />
            </div>
            <div className="bg-neutral-200 border text-md p-2 m-2 rounded ml-5 mr-5">
              <div className="p-2 m-2">
                <p className="font-bold">
                  {" "}
                  <a href="">Rambevha Dakalo</a> 20 hours ago{" "}
                </p>
                <p>Thanks for Sharing this!</p>
              </div>
            </div>
            <div>
              <img
                className="size-7 rounded-full border border-stone-600 ml-5"
                src="src/images/https___dev-to-uploads.s3.amazonaws.com_uploads_user_profile_image_230458_232a5025-4b8f-4b77-ae0b-f67f444b3dee.avif"
                alt=""
              />
            </div>
            <div className="bg-neutral-200 border text-md p-2 m-2 rounded ml-5 mr-5">
              <div className="p-2 m-2">
                <p className="">
                  <a className="font-bold" href="">
                    Roman
                  </a>{" "}
                  1 day ago
                </p>
                <p>Nice, and amazing post</p>
              </div>
            </div>
          </div>
          <Posts />
        </div>

        {/* RightPost */}

        <div className="pt-3 col-span-1">
          <div className="bg-white rounded-tl rounded-tr border border-stone-300 p-2 space-x-6">
            <h1 className="font-bold text-black">Active discussions</h1>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300">
            <p className="size-lg">
              I´m a Developer, But Lately, I´m Just Stuck
            </p>
            <p className="size-sm">18 comments</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300">
            <p className="size-lg">Meme Monday</p>
            <p className="size-sm">42 comments</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300">
            <p className="size-lg">
              Join us for the next Frontend Challenge: <br /> Space
              Edition👾🪐👽
            </p>
            <p className="size-sm">10 comments</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300">
            <p className="size-lg">Top 7 Feature DEV Posts of the Week</p>
            <p className="size-sm">1 comment</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300">
            <p className="size-lg">
              Hey Dev Community! Lets Get to Know Each Other👋
            </p>
            <p className="size-sm">15 comments</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300">
            <p className="size-lg">Sunrise in Space (Quiet)</p>
            <p className="size-sm">2 comments</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300">
            <p className="size-lg">
              How we Built 300us Typo Correction for 1.3M <br /> Words in Rust
            </p>
            <p className="size-sm">18 comments</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300 rounded-br rounded-bl">
            <p className="size-lg">
              I´m a Developer, But Lately, I´m Just Stuck
            </p>
            <p className="size-sm">18 comments</p>
          </div>
          <div className="pt-2"></div>
          <div className="bg-white rounded-tr rounded-tl border border-stone-300 p-2">
            <h1 className="font-bold">#discuss</h1>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300 rounded-br rounded-bl">
            <p className="size-lg">Meme Monday</p>
            <p className="size-sm">42 comments</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300 rounded-br rounded-bl">
            <p className="size-lg">
              Web Developers, AI, and Development Fundamentals
            </p>
            <p className="size-sm bg-yellow-300 rounded w-24">New</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300 rounded-br rounded-bl">
            <p className="size-lg">How to find a remote job in 2024</p>
            <p className="size-sm">10 comments</p>
          </div>
          <div className="bg-white border border-stone-300 p-2 hover:bg-neutral-300 rounded-br rounded-bl">
            <p className="size-lg">
              Boost Your Medium Visibility: 12 Essential Tips for Writers
            </p>
            <p className="size-sm">2 comments</p>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </main>
  );
}
