import React from "react";
import { PageContainer } from "../PageContainer";
import TranslationsProvider from "@/app/components/Providers/TranslationsProvider";
import initTranslations from "@/app/i18n";
import { ServersPageHeader } from "@/app/components/Servers/ServersPage/ServersPageHeader";
import { ServersCategoryFilter } from "@/app/components/Servers/ServersPage/ServersCategoryFilter";
import { ServerMainFilter } from "@/app/components/Servers/ServersPage/ServerMainFilter";
import { FilteredServers } from "@/app/components/Servers/ServersPage/FilteredServers";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "ServersStats.com | The best servers tracking service",
  description: "Track and analyze game servers performance with ServersStats.com",
  keywords: ["game servers", "tracking service", "performance analysis", "online gaming"],
};


const i18NameSpaces = ["Common", "Servers"];
const ServersPage = async({ params }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(params.locale, i18NameSpaces);
  return (
    <TranslationsProvider
      locale={params.locale}
      resources={resources}
      namespaces={i18NameSpaces}>
      <PageContainer>
        <ServersPageHeader/>
        <ServersCategoryFilter/>
        <ServerMainFilter/>
        <FilteredServers/>
      </PageContainer>
    </TranslationsProvider>
  );
};

export default ServersPage;
