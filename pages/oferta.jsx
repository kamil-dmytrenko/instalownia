import React from "react";
import { Head } from "../components";
import { WorksSection, HeroSection, LogoSection } from "../components/sections";
import { contentfulClientAPI } from "../utils/contentfulClient";
import { motion } from "framer-motion";

const Page = (props) => {
  const { header, works } = props;
  return (
    <>
      <Head
        pageTitle="oferta"
        pageDescription="Sprawdź naszą ofertę dotyczącą wykonania instalacji w Twoim domu."
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
      <WorksSection header="Nasze usługi" works={works} />
      <LogoSection />
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const headerResponse = await contentfulClientAPI.getEntry(
    "28QpbOtJx7DLisgcW9TbsE"
  );
  const worksResponse = await contentfulClientAPI.getEntries({
    content_type: "workDescriptions",
  });

  const header = await headerResponse.fields;
  const works = worksResponse.items;
  return {
    props: {
      header,
      works,
    },
  };
}
