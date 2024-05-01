import { PageContainer } from '@/app/[locale]/PageContainer'
import { NewsLoadingSkeleton, News_Provider } from '@/app/components/Forum/SingleForumPostPage/News_Provider'
import { SinlgeForumPost } from '@/app/components/Forum/SingleForumPostPage/SinlgeForumPost'
import TranslationsProvider from '@/app/components/Providers/TranslationsProvider'
import { SectionContainer } from '@/app/components/SectionContainer'
import { QuickLinks } from '@/app/components/shared/QuickLinks'
import initTranslations from '@/app/i18n'
import { Metadata } from 'next'
import React, { Suspense } from 'react'
import { lightSanitizeObject } from 'sanitize/light'

const i18NameSpaces = ['Common', 'Home']

export const generateMetadata: () => Promise<Metadata> = async () => {
    return {
        title: 'Forum | ServersStats.com',
        description: "Ashen One's Profile on ServersStats.com, track added servers"
    };
};


const SingleForumPage = async ({ params }: { params: { locale: string } }) => {
    const sanitizedProps = lightSanitizeObject(params)
    const { t, resources } = await initTranslations(params.locale, i18NameSpaces)

    return (
        <TranslationsProvider locale={params.locale} resources={resources} namespaces={i18NameSpaces} >
            <PageContainer>
                <SectionContainer className='flex gap-[25px] w-full md:flex-row flex-col'>
                    <SinlgeForumPost />
                    <div className="md:w-[400px] w-full flex flex-col gap-[15px]">
                        <QuickLinks/>
                        <Suspense fallback={NewsLoadingSkeleton}>
                            <News_Provider/>
                        </Suspense>
                    </div>
                </SectionContainer>
            </PageContainer>
        </TranslationsProvider>
    )
}

export default SingleForumPage