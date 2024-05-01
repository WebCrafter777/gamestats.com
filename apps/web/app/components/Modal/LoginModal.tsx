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
import { signIn, signOut, useSession } from "next-auth/react";

export const LoginModal = () => {
  // Fetches modal state and functions from a custom hook
  const { isOpen, onClose } = useLoginModal();
  const { data: session } = useSession();
  console.log(session);
  
  const { onOpen: openRegisterModal } = useRegistrationModal();
  const [isLoading, setIsLoading] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const { t } = useTranslation();
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    }),
    onSubmit: async (values) => {
      if (isLoading) return null;
      if (!captchaVerified) return toastify.Error("Captcha not found!")
      setIsLoading(true);
      try {
        console.log(values.email, values.password)
        const result = await signIn("credentials", {
          redirect: false,
          email: values.email,
          password: values.password,
        });
        
        if (!result?.error) {
          onClose();
          return toastify.Success("Sucesfully logged in!");
        } else {
          recaptchaRef.current?.reset()
          return toastify.Error(result.error);
        }
      } catch (error) {
        return toastify.Error("Something went wrong, try again later!");
      } finally {
        recaptchaRef.current?.reset()
        setCaptchaVerified(false)
        setIsLoading(false);
      }
    },
  });

  const handleRegisterOpen = useCallback(() => {
    onClose();
    openRegisterModal();
  }, [openRegisterModal, onClose]);

  // Modal body JSX
  const modalBody = (
    <Formik
      initialValues={formik.initialValues}
      onSubmit={() => formik.handleSubmit()}
    >
      <Form className="flex flex-col gap-[12px] items-start">
        <PrimaryInput
          id="email"
          name="email"
          label={t("email")}
          value={formik.values.email}
          type="email"
          onChange={formik.handleChange}
          variant="secondary"
          errors={formik.errors.email}
          disabled={isLoading}
          className="!w-full dark:border-[1px] border-[0px]"
          parentClassName="!w-full"
        />
        <PrimaryInput
          id="password"
          name="password"
          label={t("password")}
          value={formik.values.password}
          type="password"
          onChange={formik.handleChange}
          variant="secondary"
          errors={formik.errors.password}
          disabled={isLoading}
          className="!w-full dark:border-[1px] border-[0px]"
          parentClassName="!w-full"
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
        {t("notamember")}{" "}
        <span
          className="text-yellow_loud font-bold cursor-pointer"
          onClick={handleRegisterOpen}
        >
          {t("joinnow")}
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
      topContent={t("loginsubtitle")}
      bodyContent={modalBody}
      footerContent={modelFooter}
      sizeClassName="max-w-[600px]"
      isLoading={isLoading}
    />
  );
};
