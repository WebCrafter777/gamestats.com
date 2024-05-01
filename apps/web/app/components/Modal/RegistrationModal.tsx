"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { Modal } from "./Modal";
import { Form, Formik, useFormik } from "formik";

import * as Yup from "yup";
// import { signIn } from "next-auth/react";
import { toastify } from "@/app/hooks/toastify";
import ReCAPTCHA from "react-google-recaptcha";
import { useRegistrationModal } from "@/app/hooks/useRegistrationModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { PrimaryInput } from "../Inputs/TextField/PrimaryInput";
import { PrimaryButton } from "../Buttons/PrimaryButton";
import { GoogleLogin, SteamLogin } from "../Buttons/SocialButtons";
import { useTranslation } from "react-i18next";
import { PrimaryCheckbox } from "../Inputs/Checkbox/PrimaryCheckbox";
import Link from "next/link";
import { Icon } from "@/app/styles/Icon";
import { WebsiteIcons } from "@/public/svg/WebsiteIcons";
import { PrimaryDropdown } from "../Dropdowns/PrimaryDropdown";

const  Countries = require('countries')
import Image from "next/image";
import { LazyLoadedImage } from "../shared/LazyLoading";

export const RegistrationModal = () => {
  // Fetches modal state and functions from a custom hook
  const { isOpen, onClose } = useRegistrationModal();
  const { onOpen: openLoginModal } = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { t } = useTranslation();
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      username: "",
      email: "",
      password: "",
      country: "",
      repeatPassword: "",
      age: false,
      tos: false,
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required().min(3),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
      repeatPassword: Yup.string().test(
        "passwords-match",
        "Passwords must match",
        function (value) {
          return this.parent.password === value;
        }
      ),
      country: Yup.string().required(),
      age: Yup.boolean().isTrue(),
      tos: Yup.boolean().isTrue(),
    }),
    onSubmit: async (values) => {
      if (isLoading) return null;
      
      if (!captchaVerified) {
        return toastify.Error("Verify Captcha!");
      }

      setIsLoading(true);
      try {
      
      } catch (error) {
        return toastify.Error("Something went wrong, try again later!");
      } finally {
        setIsLoading(false);
      }
    },
  });

  const handleLoginOpen = useCallback(() => {
    onClose();
    openLoginModal();
  }, [openLoginModal, onClose]);

  // Modal body JSX
  const modalBody = (
    <Formik
      initialValues={formik.initialValues}
      onSubmit={() => formik.handleSubmit()}
    >
      <Form className="flex flex-col gap-[12px] justify-start items-start">
        <PrimaryInput
          id="username"
          name="username"
          label={"*" + t("username")}
          value={formik.values.username}
          type="text"
          onChange={formik.handleChange}
          variant="secondary"
          errors={formik.errors.username}
          disabled={isLoading}
          className="!w-full"
          parentClassName="!w-full"
        />
        <PrimaryInput
          id="email"
          name="email"
          label={"*" + t("email")}
          value={formik.values.email}
          type="email"
          onChange={formik.handleChange}
          variant="secondary"
          errors={formik.errors.email}
          disabled={isLoading}
          className="!w-full"
          parentClassName="!w-full"
        />
        <PrimaryInput
          id="password"
          name="password"
          label={"*" + t("password")}
          value={formik.values.password}
          type="password"
          onChange={formik.handleChange}
          variant="secondary"
          errors={formik.errors.password}
          disabled={isLoading}
          className="!w-full"
          parentClassName="!w-full"
        />
        <PrimaryInput
          id="repeatPassword"
          name="repeatPassword"
          label={"*" + t("repeatpassword")}
          value={formik.values.repeatPassword}
          type="password"
          onChange={formik.handleChange}
          variant="secondary"
          errors={formik.errors.repeatPassword}
          disabled={isLoading}
          className="!w-full"
          parentClassName="!w-full"
        />
        <PrimaryDropdown
          data={Countries.map((country:any) => ({
            label: (
              <div className="flex gap-[5px] items-center w-full" key={country.name} >
                <div className="w-[35px] h-[30px] relative flex justify-center items-center  ">
                  <LazyLoadedImage
                    src={country.file_url}
                    alt={country.name}
                    className=""
                  />
                </div>
                  <h4 className="!text-[14px]">{country.name}</h4>
              </div>
            ),
            onClick: () => {
                formik.setFieldValue('country',country.name)
            },
            customSearchText:country.name
          }))}
          className={`!w-full ${formik.errors.country ? '!border-rose-400 !text-rose-400' : ''}`}
          variant="secondary"
          label={formik.values.country ? formik.values.country : 'Country'}
          parentClassname="w-full text-white"
          disabled={isLoading}
          searchable
        />
        <div className="flex items-center gap-[10px]">
          <PrimaryCheckbox
            id="tos"
            isChecked={formik.values.tos}
            setIsChecked={() => formik.setFieldValue("tos", !formik.values.tos)}
            label={t("tosagree")}
            errors={formik.errors.tos}
          />
          <Link className="" href={"/tos"} target="_blank">
            <Icon
              svg={WebsiteIcons["question"]}
              className="w-[20px] h-[20px]"
            />
          </Link>
        </div>
        <PrimaryCheckbox
          id="age"
          isChecked={formik.values.age}
          setIsChecked={() => formik.setFieldValue("age", !formik.values.age)}
          label={t("ageagree")}
          errors={formik.errors.age}
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY || ""}
          className=" mr-auto"
          size="normal"
          onChange={(e) => {
            if (e) {
              setCaptchaVerified(true);
            }
          }}
          onError={() => {
            setCaptchaVerified(false);
          }}
          onAbort={() => {
            setCaptchaVerified(false);
          }}
          theme="dark"
          onExpired={() => {
            setCaptchaVerified(false);
          }}
          aria-disabled={isLoading}
        />
        <PrimaryButton
          className="w-full py-[10px] mt-[20px]"
          onClick={formik.handleSubmit}
          type="submit"
          variant="secondary"
        >
          {t("login")}
        </PrimaryButton>
      </Form>
    </Formik>
  );

  // Modal footer JSX
  const modelFooter = (
    <div className=" flex flex-col gap-[5px] justify-center items-center">
      <span className="h-[30px] w-[2px]  bg-gray-40 mx-auto" />
      <p className="text-text_gray">{t("orcontinuewith")}</p>
      <div className="flex flex-col gap-[10px] w-full">
        <GoogleLogin label={t("loginwithgoogle")} />
        <SteamLogin label={t("loginwithsteam")} />
      </div>
      <p className="text-[17px] font-medium text-white mt-[10px]">
        {t("alreadymember")}{" "}
        <span
          className="text-yellow_loud font-bold cursor-pointer"
          onClick={handleLoginOpen}
        >
          {t("login")}
        </span>
      </p>
    </div>
  );

  // Renders the modal component with provided content
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose();
      }}
      className="!gap-[20px]"
      topContent={t("signup")}
      bodyContent={modalBody}
      footerContent={modelFooter}
      sizeClassName="max-w-[600px]"
      isLoading={isLoading}
    />
  );
};
