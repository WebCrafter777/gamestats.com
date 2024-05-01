import React from 'react'
import { PageContainer } from '../../PageContainer'
import { Metadata } from 'next';
import { AddServerForm } from '@/app/components/AddServerPage/AddServerForm';
import { VerifyServerOwnerShipModal } from '@/app/components/Modal/VerifyServerOwnerShipModal';
import TranslationsProvider from '@/app/components/Providers/TranslationsProvider';
import initTranslations from '@/app/i18n';


const i18NameSpaces = ["Common", "AddServer"];

export const metadata: Metadata = {
    title: "Add Server | ServersStats.com ",
    description: "Track and analyze game servers performance with ServersStats.com",
    keywords: ["game servers", "tracking service", "performance analysis", "online gaming"],
  };

const AddServerPage = async ({ params }: { params: { locale: string } }) => {
  const { t, resources } = await initTranslations(params.locale, i18NameSpaces);
  return (
    <TranslationsProvider
    locale={params.locale}
    resources={resources}
    namespaces={i18NameSpaces}
  >
      <PageContainer>
              <VerifyServerOwnerShipModal/>
              <AddServerForm/>
      </PageContainer>
  </TranslationsProvider>
  )
}

export default AddServerPage