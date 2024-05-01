import React from "react";
import { PageContainer } from "../../PageContainer";
import { Metadata } from "next";
import { AddForumPostForm } from "@/app/components/Forum/AddForumPostForm";
import TranslationsProvider from "@/app/components/Providers/TranslationsProvider";
import initTranslations from "@/app/i18n";

export const metadata: Metadata = {
  title: "Add new post | ServersStats.com",
  description: "Track and analyze game servers performance with ServersStats.com",
  keywords: [
    "game servers",
    "tracking service",
    "performance analysis",
    "online gaming",
  ],
};

const i18NameSpaces = ["Common","AddPost"];
const AddPost = async ({ params }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(params.locale, i18NameSpaces);

  return (
    <TranslationsProvider locale={params.locale} resources={resources} namespaces={i18NameSpaces} > 
      <PageContainer>
        <AddForumPostForm />
      </PageContainer>
    </TranslationsProvider>
  );
};

export default AddPost;
