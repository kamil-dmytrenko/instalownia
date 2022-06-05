import React from "react";
import { Head } from "../components";
import {
  FeaturesSection,
  HeroSection,
  LogoSection,
  MainSection,
} from "../components/sections";
import { motion } from "framer-motion";
import { contentfulClientAPI } from "../utils/contentfulClient";

const Page = (props) => {
  const { header, features } = props;
  const items = [
    {
      image: "/img/svg/worker-2.svg",
      imageAlt: "image alt text",
      header: "Poznajmy się bliżej",
      text: `Naszą współpracę zaczynamy od szczegółowego poznania Państwa potrzeb.
      Będziemy mogli w ten sposób przygotować ofertę najlepiej odpowiadającą Państwa wymaganiom.
      Często doradzamy w wyborze możliwie najlepszych rozwiązań z zakresu energooszczędności i niezawodności montowanych przez nas urządzeń.`,
    },
    {
      image: "/img/svg/worker-1.svg",
      imageAlt: "image alt text",
      header: "",
      text: `Po określeniu najważniejszych warunków, przystępujemy do szczegółowej wyceny i harmonogramu prac wykonania instalacji w Państwa budynku.`,
    },
    {
      image: "/img/svg/worker-3.svg",
      imageAlt: "image alt text",
      header: "Montaż osprzętu i urządzeń",
      text: `W określonym terminie przystępujemy wykonania instalacji w Państwa budynku.
      Dodatkowo współpracujemy z firmami wykonującymi wylewki i tynki dzięki czemu możemy oddać Państwu dom w stanie deweloperskim z wykonanymi kompleksowo instalacjami.
      Wszystkie prace wykonywane są przez wykwalifikowane ekipy pod nadzorem osób do tego uprawnionych.`,
    },
    {
      image: "/img/svg/worker-4.svg",
      imageAlt: "image alt text",
      header: "Montaż osprzętu i urządzeń",
      text: `Po zakończeniu prac wykończeniowych, przystępujemy do montażu osprzętu i urządzeń. W przyszłości oferujemy serwis i pomoc.
      Na każdym etapie jesteśmy gotowi odpowiedzieć na pytania i pozostajemy do Państwa dyspozycji.
`,
    },
  ];
  return (
    <>
      <Head
        pageTitle="strona główna"
        pageDescription="Kompleksowe wykonanie instalacji w domach jednorodzinnych na terenie Rzeszowa i okolic."
        pageKeywords="pompa ciepła, klimatyzacja, wentylacja mechaniczna, instalacje elektryczne, wod-kan, C.O., Rzeszów"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        opacity={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <HeroSection
          header={header.name}
          paragraph={header.description}
          image={header.photo.fields.file.url}
          link={header.goToButton}
          linkText={header.buttonText}
        />
      </motion.div>
      <MainSection
        backgroundImage="/img/backgrounds/instalownia-background-long.png"
        header="Kilka prostych kroków do wymarzonych czterech kątów"
        items={items}
      />
      <FeaturesSection features={features} />
      <LogoSection />
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const headerResponse = await contentfulClientAPI.getEntry(
    "5Owkg1JQAbF7ZeoJTJXo4w"
  );
  const header = await headerResponse.fields;

  const featuresResponse = await contentfulClientAPI.getEntries({
    content_type: "featureDescription",
  });
  const features = featuresResponse.items;
  return {
    props: {
      header,
      features,
    },
  };
}
