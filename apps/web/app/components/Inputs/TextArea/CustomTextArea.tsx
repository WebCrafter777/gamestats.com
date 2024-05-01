import React, { useEffect, useRef, useState } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import Link from "@tiptap/extension-link"; // Import the Link extension
import {
  sanitizeEmail,
  sanitizeImageURL,
  sanitizeYoutubeLink,
} from "sanitize/links";
interface Props {
  id: string;
  name: string;
  label?: string;
  onChange?: (val: string) => void;
  value: string;
  errors?: any;
  className?: string;
  showErrorMessage?: boolean;
  disabled?: boolean;
}

export const CustomTextArea = ({
  id,
  name,
  label,
  onChange,
  value,
  errors,
  className,
  showErrorMessage,
  disabled,
}: Props) => {
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const emojiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isEmojiPickerOpen) {
      const handleOutsideClick = (e: MouseEvent) => {
        if (emojiRef.current && !emojiRef.current.contains(e.target as Node)) {
          setIsEmojiPickerOpen(false);
        }
      };
      window.addEventListener("click", handleOutsideClick);
      return () => window.removeEventListener("click", handleOutsideClick);
    }
  }, [isEmojiPickerOpen]);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: true,
      }),
    ],
    content: value,
    onUpdate({ editor }) {
      if (onChange) {
        const content = editor.getText();
        onChange(content);
      }
    },
  });

  const handleEmojiSelect = (emoji: { native: string }) => {
    editor?.commands.insertContent(emoji.native);
  };
  const handleLinkInsert = (
    variant: "youtube" | "link" | "email" | "image"
  ) => {
    if (!editor) return null;

    switch (variant) {
      case "youtube":
        const youtubeLink = prompt("Enter YouTube Link:");
        if (youtubeLink) {
          const sanitized = sanitizeYoutubeLink(youtubeLink);
          if (sanitized) {
            editor.commands.insertContent(`<Youtube>${sanitized}</Youtube>`);
          }
        }
        break;

      case "link":
        const linkUrl = prompt("Enter Link URL:");
        if (linkUrl) {
          editor.commands.insertContent(`<Link>${linkUrl}</Link>`);
        }
        break;

      case "email":
        const email = prompt("Enter Email Address:");
        if (email) {
          const sanitizedEmail = sanitizeEmail(email);
          if (sanitizedEmail) {
            editor.commands.insertContent(`<Email>${sanitizedEmail}</Email>`);
          }
        }
        break;

      case "image":
        const imageUrl = prompt("Enter Image URL:");
        if (imageUrl) {
          const sanitized = sanitizeImageURL(imageUrl);
          if (sanitized) {
            editor.commands.insertContent(`<Image>${sanitized}</Image>`);
          }
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="relative w-full" id={id}>
      {isEmojiPickerOpen && (
        <div className="absolute top-10 left-10 z-[2]" ref={emojiRef}>
          <Picker data={data} onEmojiSelect={handleEmojiSelect} />
        </div>
      )}
      <div
        className={`editor-container w-full dark:bg-[#222627] bg-[#dbdcdd] rounded-t-[5px]  ${errors && "!border-[1px] !border-rose-500"}`}
      >
        <div className="flex xs:flex-row flex-col xs:justify-between justify-start xs:items-center gap-y-4 rounded-t-[5px] dark:bg-gray-30 bg-[#333] p-[10px] w-full ">
          <Icon
            svg={WebsiteIcons["emoji"]}
            className="w-[25px] h-[25px] cursor-pointer"
            onClick={(e: MouseEvent) => {
              e.stopPropagation();
              setIsEmojiPickerOpen((prev) => !prev);
            }}
          />
          <div className="flex items-center gap-[10px] flex-wrap">
            <div
              className="py-[7px] px-[12px] text-center border-gray border-[1px] text-white rounded-[5px] text-[13px] cursor-pointer"
              onClick={() => handleLinkInsert("image")}
            >
              Image
            </div>
            <div
              className="py-[7px] px-[12px] text-center border-gray border-[1px] text-white rounded-[5px] text-[13px] cursor-pointer"
              onClick={() => handleLinkInsert("link")}
            >
              Link
            </div>
            <div
              className="py-[7px] px-[12px] text-center border-gray border-[1px] text-white rounded-[5px] text-[13px] cursor-pointer"
              onClick={() => handleLinkInsert("youtube")}
            >
              Youtube
            </div>
            <div
              className="py-[7px] px-[12px] text-center border-gray border-[1px] text-white rounded-[5px] text-[13px] cursor-pointer"
              onClick={() => handleLinkInsert("email")}
            >
              Email
            </div>
          </div>
        </div>
        <EditorContent
          name={name}
          editor={editor}
          className={`h-[250px] max-h-[250px] p-[10px] dark:text-white text-black rounded-[5px] editor-container ${errors ? "!border-t-[1px] !border-rose-500" : ""} ${className}`}
          style={{
            width: "100%",
            maxHeight: "250px",
            overflowY: "auto",
            display: "inline-block",
          }}
        />
      </div>
    </div>
  );
};

export default CustomTextArea;
