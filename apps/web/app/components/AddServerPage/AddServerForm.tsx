"use client";

import React, { useEffect, useState } from "react";
import { SectionContainer } from "../SectionContainer";
import { PrimaryInput } from "../Inputs/TextField/PrimaryInput";
import { Game_Box } from "../Games/Game_Box";
import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import { Form, Formik, useFormik } from "formik";
import CustomTextArea from "../Inputs/TextArea/CustomTextArea";
import * as Yup from "yup";
import { ImageInput } from "../Inputs/Image/ImageInput";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { allowOnlyNumbers, onlyIp } from "sanitize/light";
import { useServerVerificationModal } from "@/app/hooks/useServerVerificationModal";
import { useTranslation } from "react-i18next";
const gamesDummyData = [
  {
    id: "1",
    name: "Counter-Strike: Global Offensive",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "2",
    name: "Team Fortress 2",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "3",
    name: "Minecraft",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "4",
    name: "Rust",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "5",
    name: "ARK: Survival Evolved",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "6",
    name: "Garry's Mod",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "7",
    name: "Terraria",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "8",
    name: "DayZ",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "9",
    name: "7 Days to Die",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "10",
    name: "Space Engineers",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "11",
    name: "Insurgency: Sandstorm",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "12",
    name: "Mount & Blade II: Bannerlord",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "13",
    name: "Squad",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "14",
    name: "Arma 3",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "15",
    name: "Left 4 Dead 2",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "16",
    name: "Empyrion - Galactic Survival",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "17",
    name: "Conan Exiles",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "18",
    name: "Killing Floor 2",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "19",
    name: "Don't Starve Together",
    banner: "/images/placeholders/logo.webp",
  },
  {
    id: "20",
    name: "Miscreated",
    banner: "/images/placeholders/logo.webp",
  },
];

export const AddServerForm = () => {
  const {onOpen} = useServerVerificationModal()
  const [searchValues, setSearchValues] = useState({
    game: "",
  });
  const [filteredData, setFilteredData] = useState({
    games: gamesDummyData,
  });
  const {t} = useTranslation()


  const formik = useFormik({
    validateOnChange:false,
    initialValues: {
      serverName: "",
      description: "",
      serverIp: "",
      connectionPort: "",
      facebook:"",
      youtube:"",
      website:"",
      images:['image.jpg']
    },
    validationSchema: Yup.object({
      serverName: Yup.string().required("Server name is required"),
      description: Yup.string().required("Description is required").max(1000),
      serverIp: Yup.string().required("Description is required"),
      connectionPort: Yup.string().required("Description is required"),
      images:Yup.array().of(Yup.string()).min(1)
    }),
    onSubmit: (values) => {
      onOpen()
    },
  });
  
  useEffect(() => {
    setFilteredData((prev) => ({
      ...prev,
      games: gamesDummyData.filter((game) =>
        game.name.toLowerCase().includes(searchValues.game.toLowerCase())
      ),
    }));
  }, [searchValues.game]);
  return (
    <SectionContainer>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={() => formik.handleSubmit()}
      >
        <Form className="flex flex-col gap-[30px] bg-background dark:bg-[#101314] bg-white sm:px-[20px] px-[10px] py-[30px] rounded-[10px]">
          <h1 className="font-medium text-[21px] dark:text-white ">
            {t('addserver')}
          </h1>
          <div className="flex flex-col gap-[16px]">
            <div className="flex flex-col  gap-[10px]">
              <PrimaryInput
                id="GameSearch"
                name="GameSearch"
                variant="secondary"
                labelClassname="dark:!text-white !text-black"
                label={t('findgame')}
                value={searchValues.game}
                onChange={(e) => {
                  setSearchValues((prev) => ({
                    ...prev,
                    game: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-[10px] max-h-[500px] overflow-y-auto">
              {filteredData.games.length > 0 ? (
                filteredData.games.map((game) => (
                  <Game_Box
                    key={game.id}
                    id={game.id}
                    name={game.name}
                    banner={game.banner}
                    className="sm:h-[200px] xs:h-[30vw] h-[70vw] col-span-1"
                    disabled
                  />
                ))
              ) : (
                <div className="flex justify-center items-center gap-[10px] col-span-full dark:text-white">
                  <Icon
                    svg={WebsiteIcons["sad_emoji"]}
                    className="w-[40px] h-[40px] ColorChangableIcons"
                  />
                  <h2 className="text-[20px]">No games Found</h2>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <PrimaryInput
              id="serverName"
              name="serverName"
              variant="secondary"
              labelClassname="dark:!text-white !text-black"
              label={t('servername')}
              value={formik.values.serverName}
              onChange={formik.handleChange}
              errors={formik.errors.serverName}
            />
            <CustomTextArea
              id="description"
              name="description"
              onChange={(e) => formik.setFieldValue('description',e)}
              value={formik.values.description}
              errors={formik.errors.description}
            />
          </div>
          <div className="flex flex-col gap-[17px]">
            <h1 className="dark:text-white font-medium text-[17px]">{t('images')}</h1>
            <div className="flex gap-[5px] flex-wrap h-[150px]">
              <ImageInput
                id="server_images"
                name="server_images"
                svg={
                  <Icon
                    svg={WebsiteIcons["camera"]}
                    className="w-[25px] h-[25px]"
                  />
                }
                className="w-[150px] h-full"
                onChange={(e)=>formik.setFieldValue('images',[...formik.values.images,e])}
              />
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <PrimaryInput
              id="serverIp"
              name="serverIp"
              variant="secondary"
              labelClassname="dark:!text-white !text-black"
              label={t('serverip')}
              value={formik.values.serverIp}
              onChange={(e)=>{
                const filtered = onlyIp(e.target.value)
                formik.setFieldValue('serverIp',filtered)
              }}
              errors={formik.errors.serverIp}
            />
            <PrimaryInput
              id="connectionPort"
              name="connectionPort"
              variant="secondary"
              labelClassname="dark:!text-white !text-black"
              label={t('connectionport')}
              value={formik.values.connectionPort}
              onChange={(e)=>{
                const filtered = allowOnlyNumbers(e.target.value)
                formik.setFieldValue('connectionPort',filtered)
              }}
              errors={formik.errors.connectionPort}
            />
          </div>
          <div className="flex flex-col gap-[12px]">
            <h1 className="dark:text-white font-medium text-[17px]">Socials</h1>
            <PrimaryInput
              id="website"
              name="website"
              variant="secondary"
              label={t('websitelink')}
              labelClassname="dark:!text-white !text-black"
              value={formik.values.website}
              onChange={formik.handleChange}
              errors={formik.errors.website}
            />
            <PrimaryInput
              id="facebook"
              name="facebook"
              variant="secondary"
              label={t('facebooklink')}
              labelClassname="dark:!text-white !text-black"
              value={formik.values.facebook}
              onChange={formik.handleChange}
              errors={formik.errors.facebook}
            />
            <PrimaryInput
              id="youtube"
              name="youtube"
              variant="secondary"
              label={t('youtubelink')}
              labelClassname="dark:!text-white !text-black"
              value={formik.values.youtube}
              onChange={formik.handleChange}
              errors={formik.errors.youtube}
            />
          </div>
          <PrimaryButton className="self-end text-[16px] font-semibold" type="submit" onClick={formik.handleSubmit}>
            {t('addserver')}
          </PrimaryButton>
        </Form>
      </Formik>
    </SectionContainer>
  );
};
