import React, { useState, useContext } from "react";
import { FaDev } from "react-icons/fa";
import { GoBold, GoItalic } from "react-icons/go";
import {
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { LuHeading } from "react-icons/lu";
import { RiDoubleQuotesL, RiImageFill, RiSettingsLine } from "react-icons/ri";
import { IoMdCode } from "react-icons/io";
import { BiCodeBlock } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { createPost } from "../addPost";
// import { AuthContext } from "../AuthContext";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const [tags, setTags] = useState("");

  const handlePublish = async () => {
    const tagArray = tags.split(",").map((tag) => tag.trim()); // Divide los tags en un array
    const result = await createPost(title, postText, tagArray);

    if (result.success) {
      alert("Post created successfully!");
      // Limpiar el formulario o redirigir a otra página si es necesario
      setTitle("");
      setPostText("");
      setTags("");
    } else {
      console.log("Error creating post: " + result.message);
    }
  };

  return (
    <div className="bg-neutral-300 h-auto w-full">
      <header className="flex justify-between pb-5">
        <div className="flex ml-5 items-center">
          <FaDev style={{ fontSize: "2rem" }} />
          <p className="ml-5 text-sm">Create Post</p>
        </div>
        <div className="mr-5">
          <span>X</span>
        </div>
      </header>
      <main className="grid grid-cols-2 gap-4 items-center h-full">
        <div className="bg-white rounded flex-row justify-start ml-20 w-2/3">
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="ml-5 mb-5">
            <input
              className="text-xs border-none"
              type="text"
              placeholder="Add up to 4 tags..."
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div className="flex flex-row justify-between bg-neutral-200 pt-2 pb-2">
            <div className="flex ml-5 cursor-pointer items-center">
              <span>
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
                <RiImageFill style={{ fontSize: "2rem" }} />
              </span>
            </div>
            <div className="mr-5 cursor-pointer items-center">
              <span>
                <CiMenuKebab style={{ fontSize: "2rem" }} />
              </span>
            </div>
          </div>
          <div className="ml-5">
            <textarea
              className="h-60 w-60 border-none backdrop:no-underline"
              placeholder="Write your post content here..."
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
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
          <button
            className="bg-blue-600 text-white font-bold text-sm rounded py-2 px-4 hover:bg-blue-800"
            onClick={handlePublish}
          >
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
    </div>
  );
}
