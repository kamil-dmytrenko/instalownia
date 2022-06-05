import React from "react";
import { Head } from "../components";
import {
  GallerySection,
  HeroSection,
  LogoSection,
} from "../components/sections";
import { motion } from "framer-motion";
import { contentfulClientAPI } from "../utils/contentfulClient";

const Page = (props) => {
  const { header, photos } = props;
  return (
    <>
      <Head
        pageTitle="realizacje"
        pageDescription="Zobacz wykonane przez nas instalacje w domach naszych zadowolonych klientów."
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

      <GallerySection
        header="Realizacje naszch instalacji"
        images={photos}
        showMenu={true}
      />
      <LogoSection />
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const headerResponse = await contentfulClientAPI.getEntry(
    "jz0uVzMAobnC6y0wpNr11"
  );
  const header = await headerResponse.fields;
  const photosResponse = await contentfulClientAPI.getEntry(
    "4H8KrigZO1JcBAwZLKWRf9"
  );
  const photos = await photosResponse.fields;

  return {
    props: {
      header,
      photos,
    },
  };
}
