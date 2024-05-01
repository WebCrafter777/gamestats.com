import { Metadata } from 'next';
import React from 'react'
import { PageContainer } from '../../PageContainer';
import { PurchasePremiumSlider } from '@/app/components/Premium/PurchasePremiumPage/PurchasePremiumSlider';
import initTranslations from '@/app/i18n';
import TranslationsProvider from '@/app/components/Providers/TranslationsProvider';

export const metadata: Metadata = {
    title: "Buy Premium | ServersStats.com",
    description: "Track and analyze game servers performance with ServersStats.com",
    keywords: ["game servers", "tracking service", "performance analysis", "online gaming"],
  };
  

  const i18NameSpaces= ['Common','Home']

const PurchasePremium = async({params}:{params:{locale:string}}) => {
  const {t,resources} = await initTranslations(params.locale,i18NameSpaces)
  
  return (

    <TranslationsProvider locale={params.locale} resources={resources} namespaces={i18NameSpaces} >
      <PageContainer>
          <PurchasePremiumSlider/>  
      </PageContainer>
    </TranslationsProvider>
  )
}

export default PurchasePremium