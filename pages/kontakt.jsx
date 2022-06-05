import React from "react";
import { Head } from "../components";
import { ContactFormSection } from "../components/sections";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <Head
        pageTitle="kontakt"
        pageDescription="Zapraszamy do kontaktu i bezpłatnej wyceny wykonania instalacj w Twoim domu."
        pageKeywords="pompa ciepła, klimatyzacja, wentylacja mechaniczna, instalacje elektryczne, wod-kan, C.O., Rzeszów"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        opacity={{ duration: 2 }}
        exit={{ opacity: 0 }}
      >
        <ContactFormSection />
      </motion.div>
    </>
  );
};

export default Page;
