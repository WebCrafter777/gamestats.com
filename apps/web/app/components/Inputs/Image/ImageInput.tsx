"use client";

import React, { useState } from "react";
import axios from "axios";

interface Props {
  id: string;
  name: string;
  className?: string;
  svg: React.ReactNode;
  onChange?: (image: string) => void;
  parenClassName?:string
  disabled?:boolean
}

export const ImageInput = ({ id, name, className, parenClassName, svg, onChange,disabled }: Props) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const uploadImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files) {
      if (!isLoading && !disabled) {
        const files = e.target.files[0];

        const formData = new FormData();
        formData.append("file", files);

        try {
          setIsLoading(true);
          const response = await axios
            .post(
              `/uploadImage`,
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (progressEvent) => {
                  const loaded = progressEvent.loaded;
                  const total = progressEvent.total;
                  if (loaded && total) {
                    const percentCompleted = Math.round((loaded * 100) / total);
                    setUploadProgress(percentCompleted);
                  }
                },
              }
            )
            .finally(() => {
              setIsLoading(false)
              setUploadProgress(0);
            });

          onChange && onChange(response.data.secure_url);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <div className={`relative ${parenClassName}`}>
      <input
        id={id}
        name={name}
        type="file"
        accept="image/*"
        hidden
        onChange={uploadImage}
        disabled={isLoading || disabled}
      />
      <label
        htmlFor={name}
        className={`flex justify-center items-center border-[4px] border-primary border-solid rounded-[8px] cursor-pointer relative ${className}
        ${isLoading ? "!cursor-not-allowed" : ""}
        `}
      >
        {isLoading && (
          <div
            className="absolute top-0 left-0  h-full bg-primary-80 opacity-40"
            style={{ width: `${uploadProgress}%` }}
          />
        )}
        {!isLoading ? (
          svg
        ) : (
          <p className="text-[14px] text-white relative z-[2]">
            {uploadProgress}%
          </p>
        )}
      </label>
    </div>
  );
};
