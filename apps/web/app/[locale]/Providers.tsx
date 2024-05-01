import React from "react";

import { Header } from "@/app/components/Header/Header";

import initTranslations from "../i18n";
import TranslationsProvider from "../components/Providers/TranslationsProvider";

import { OnlyClient } from "../OnlyClient";

import "@theme-toggles/react/css/InnerMoon.css";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'react-tooltip/dist/react-tooltip.css'
import 'react-toastify/dist/ReactToastify.css';

import { LoginModal } from "../components/Modal/LoginModal";
import { RegistrationModal } from "../components/Modal/RegistrationModal";
import { Footer } from "../components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

const i18NameSpaces = ["Common"];
export const Providers = async ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {

  const { resources } = await initTranslations(locale, i18NameSpaces);
  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18NameSpaces}
    >
      <body className="mx-auto">

          <OnlyClient>
            <ToastContainer/>
            
            <LoginModal/>
            <RegistrationModal/>
            <div className="w-full h-full bg-[#000000c2] fixed left-0 top-0 -z-10 dark:!inline !hidden" />

            <Header />
            {children}
            <Footer/>
          </OnlyClient>
      </body>
    </TranslationsProvider>
  );
};
