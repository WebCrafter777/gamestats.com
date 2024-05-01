import { Metadata } from "next";
import { PageContainer } from "./PageContainer";
import initTranslations from "../i18n";
import TranslationsProvider from "../components/Providers/TranslationsProvider";
import { HomeSwiper } from "../components/Swiper/Home/HomeSwiper";
import { Home_WebsiteStatistics } from "../components/WebsiteStatistics/Home/HomeWebsiteStatistics";
import { AdSuggestion } from "../components/Ad/AdSuggestion";
import { TopServers } from "../components/Servers/Home/TopServers";
import { LatestForumPosts } from "../components/Forum/LatestForumPosts";


export const metadata: Metadata = {
  title: "ServersStats.com | The best servers tracking service",
  description: "Track and analyze game servers performance with ServersStats.com",
  keywords: ["game servers", "tracking service", "performance analysis", "online gaming"],
};

const i18NameSpaces= ['Common','Home']

const Home = async({params}:{params:{locale:string}}) => {
  const {t,resources} = await initTranslations(params.locale,i18NameSpaces)
  
  return (
    <TranslationsProvider locale={params.locale} resources={resources} namespaces={i18NameSpaces} >
      <PageContainer>
          <HomeSwiper />
          <Home_WebsiteStatistics/>
          <AdSuggestion x={1440} y={186} className="!h-[186px] m-components_distance"/>
          <TopServers/>
          <LatestForumPosts/>
      </PageContainer>
    </TranslationsProvider>
  );
};

export default Home;
