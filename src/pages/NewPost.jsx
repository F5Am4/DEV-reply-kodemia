import { FaDev } from "react-icons/fa";
import { GoBold } from "react-icons/go";
import { GoItalic } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";
import { AiOutlineOrderedList } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { LuHeading } from "react-icons/lu";
import { RiDoubleQuotesL } from "react-icons/ri";
import { IoMdCode } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";
import { IoFlashOutline } from "react-icons/io5";
import { RiImageFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { RiSettingsLine } from "react-icons/ri";

export default function NewPost() {
  return (
    <body className="bg-neutral-300 h-auto w-full">
      <header className="flex justify-between pb-5 ">
        <div className="flex ml-5 items-center">
          <FaDev style={{ fontSize: "2rem" }} />
          <p className="ml-5 text-sm">Create Post</p>
        </div>
        <div className="mr-5">
          <span>X</span>
        </div>
      </header>
      <main className="grid grid-cols-2 gap-4 items-center h-full">
        <div className=" bg-white rounded flex-row justify-start ml-20 w-2/3">
          <div className="pt-5 pb-5 ml-5">
            <button className="border-2 border-neutral-300 rounded-md text-black font-bold text-sm py-2 px-2">
              Add a cover image
            </button>
          </div>
          <div className="pt-5 pb-5 ml-5">
            <input
              className="text-bold text-xl border-none"
              type="text"
              placeholder="New post title here..."
            />
          </div>
          <div className="ml-5 mb-5">
            <input
              className="text-xs border-none"
              type="text"
              placeholder="Add up to 4 tags..."
            />
          </div>
          <div className="flex flex-row justify-between bg-neutral-200 pt-2 pb-2">
            <div className="flex ml-5 cursor-pointer items-center">
              <span className="">
                <GoBold style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <GoItalic style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <AiOutlineLink style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <AiOutlineOrderedList style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <AiOutlineUnorderedList style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <LuHeading style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <RiDoubleQuotesL style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <IoMdCode style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <BiCodeBlock style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <IoFlashOutline style={{ fontSize: "2rem" }} />
              </span>
              <span className="ml-2">
                <RiImageFill style={{ fontSize: "2rem" }} />
              </span>
            </div>
            <div className="mr-5 cursor-pointer items-center">
              <span className="">
                <CiMenuKebab style={{ fontSize: "2rem" }} />
              </span>
            </div>
          </div>
          <div className="ml-5">
            <input
              className="h-60 w-60 border-none backdrop:no-underline"
              type="text"
              placeholder="Write your post content here..."
            />
          </div>
        </div>
        <div className="flex-row justify-start ml-5 w-1/3">
          <div className="flex">
            <p className="font-bold">Publishing Tips</p>
          </div>
          <div>
            <p>
              Think of your post title as a super short (but compelling!)
              description — like an overview of the actual post in one short
              sentence.
            </p>
          </div>
        </div>
      </main>
      <div className="flex ml-20 pt-5 pb-5">
        <div className="flex-row justify-evenly items-center">
          <button className="bg-blue-600 text-white font-bold text-sm rounded py-2 px-4 hover:bg-blue-800">
            Publish
          </button>

          <button className="ml-3 border-none rounded text-black text-sm hover:bg-neutral-400 py-2 px-4">
            Save draft
          </button>

          <button className="ml-3 border-none rounded text-black text-sm hover:bg-neutral-400 py-2 px-2">
            <RiSettingsLine style={{ fontSize: "24px" }} />
          </button>

          <button className="ml-3 border-none rounded text-black text-sm hover:bg-neutral-400 py-2 px-6">
            Revert new changes
          </button>
        </div>
      </div>
    </body>
  );
}
