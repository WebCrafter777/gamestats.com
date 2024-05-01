"use client";
import React from "react";
import { SectionContainer } from "../SectionContainer";
import { PrimaryInput } from "../Inputs/TextField/PrimaryInput";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { ForumPost_Row } from "./ForumPost_Row";
import CustomTextArea from "../Inputs/TextArea/CustomTextArea";
import { PrimaryDropdown } from "../Dropdowns/PrimaryDropdown";
import { PrimaryButton } from "../Buttons/PrimaryButton";


const dummyCategories = [
    { label: "Category 1", onClick: ()=>console.log("click") },
    { label: "Category 2", onClick: ()=>console.log("click") },
    { label: "Category 3", onClick: ()=>console.log("click") },
    { label: "Category 4", onClick: ()=>console.log("click") },
    { label: "Category 5", onClick: ()=>console.log("click") },
    { label: "Category 6", onClick: ()=>console.log("click") },
    { label: "Category 7", onClick: ()=>console.log("click") },
    { label: "Category 8", onClick: ()=>console.log("click") },
    { label: "Category 9", onClick: ()=>console.log("click") },
    { label: "Category 10", onClick: ()=>console.log("click") },
    { label: "Category 11", onClick: ()=>console.log("click") },
    { label: "Category 12", onClick: ()=>console.log("click") },
    { label: "Category 13", onClick: ()=>console.log("click") },
    { label: "Category 14", onClick: ()=>console.log("click") },
    { label: "Category 15", onClick: ()=>console.log("click") },
    { label: "Category 16", onClick: ()=>console.log("click") },
    { label: "Category 17", onClick: ()=>console.log("click") },
    { label: "Category 18", onClick: ()=>console.log("click") },
    { label: "Category 19", onClick: ()=>console.log("click") },
    { label: "Category 20", onClick: ()=>console.log("click") }
  ];

export const AddForumPostForm = () => {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      title: "",
      image: null,
      tags: [],
      description:''
    },
    onSubmit: () => {},
  });

  const handleCategoryAdd = (cat:string)=>{
    if(formik.values.tags.length < 3){
        formik.setFieldValue('tags',[...formik.values.tags,cat])
    }
  }

  return (
    <SectionContainer>
      <div className="dark:bg-[#101314]  text-white sm:px-[20px] px-[8px] py-[30px] rounded-[10px] flex gap-[15px] items-start lg:flex-row flex-col">
        <div className="flex flex-col gap-[22px] lg:!basis-1/2 basis-full w-full dark:bg-transparent bg-white p-[10px] rounded-[5px]">
          <h1 className="font-medium text-[21px] dark:text-white text-black">
            {t('AddPost:addforumpost')}
          </h1>
          <div className="flex flex-col gap-[10px]">
            <PrimaryInput
              id="title"
              name="title"
              variant="secondary"
              labelClassname="dark:!text-white !text-black"
              label={t("title")}
              value={formik.values.title}
              onChange={formik.handleChange}
              errors={formik.errors.title}
            />
            <CustomTextArea
              id="description"
              name="description"
              onChange={(e)=>formik.setFieldValue('description',e)}
              value={formik.values.description}
              errors={formik.errors.description}
              className="!max-h-[200px] w-full"
            />
          </div>
          <PrimaryDropdown
            label={formik.values.tags.length > 0 ? formik.values.tags[0]:  t("category")}
            variant="secondary"
            className="dark:text-white text-black"
            data={dummyCategories.map(cat => ({
                label: cat.label,
                onClick: () => handleCategoryAdd(cat.label)
              }))}
            searchable
        />
        <PrimaryButton 
          className="text-[18px] font-medium sm:w-fit w-full self-end"
        >
          Post
        </PrimaryButton>
        </div>
        <div className="flex flex-col gap-[22px] lg:!basis-1/2 w-full lg:order-none order-first">
          <ForumPost_Row
            {...formik.values}
            image={
              formik.values.image
                ? formik.values.image
                : "/images/placeholders/logo.webp"
            }
            description={formik.values.description}
            author={{ name: "Ashen One" }}
            disabled
            views={0}
            likes={0}
            comments={0}
          />
        </div>
      </div>
    </SectionContainer>
  );
};
