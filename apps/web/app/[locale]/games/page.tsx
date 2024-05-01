import React from "react";
import { PageContainer } from "../PageContainer";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/components/Providers/TranslationsProvider";
import { SearchGameInput } from "@/app/components/Inputs/SearchGameInput";
import { GamesPageLanding } from "@/app/components/Games/GamesPageLanding";
import { Metadata } from "next";
import { PrimaryButton } from "@/app/components/Buttons/PrimaryButton";

const i18NameSpaces = ["Common", "Games"];

export const metadata: Metadata = {
  title: "ServersStats.com | The best servers tracking service",
  description: "Track and analyze game servers performance with ServersStats.com",
  keywords: [
    "game servers",
    "tracking service",
    "performance analysis",
    "online gaming",
  ],
};

const GamesPage = async ({ params }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(params.locale, i18NameSpaces);
  return (
    <TranslationsProvider
      locale={params.locale}
      resources={resources}
      namespaces={i18NameSpaces}
    >
      <PageContainer>
        <SearchGameInput />
        <GamesPageLanding />
        <div className="w-full flex items-center justify-center m-components_distance">
          <PrimaryButton className="text-[14px]">{t('showmore')}</PrimaryButton>
        </div>
      </PageContainer>
    </TranslationsProvider>
  );
};

export default GamesPage;
