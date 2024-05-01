import { Metadata } from "next";
import React from "react";
import { PageContainer } from "../PageContainer";
import { AboutPremium_Header } from "@/app/components/Premium/AboutPremiumPage/AboutPremium_Header";
import { AboutPremium_Body } from "@/app/components/Premium/AboutPremiumPage/AboutPremium_Body";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/Providers/TranslationsProvider";

export const metadata: Metadata = {
  title: "About Premium | ServersStats.com",
  description: "Track and analyze game servers performance with ServersStats.com",
  keywords: [
    "game servers",
    "tracking service",
    "performance analysis",
    "online gaming",
  ],
};

const i18NameSpaces = ["Common"];

const PremiumPage = async ({ params }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(params.locale, i18NameSpaces);

  return (
    <TranslationsProvider
      locale={params.locale}
      resources={resources}
      namespaces={i18NameSpaces}
    >
      <PageContainer>
        <AboutPremium_Header />
        <AboutPremium_Body />
      </PageContainer>
    </TranslationsProvider>
  );
};

export default PremiumPage;
