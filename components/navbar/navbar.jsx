import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Brand from "../brand/Brand";
import OverlayMenu from "./OverlayMenu";

import { motion, useCycle } from "framer-motion";

const sidebar = {
  open: (height = 1000) => ({
    z: "100",
    clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 100%)`,
    transition: {
      type: "tween",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed:(height = 1000) => ({
    clipPath: `polygon(0 0, 100% 0, 100% 0, 0 0)`,
    z: "0",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  }),
};

const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const Navbar = () => {
  const router = useRouter();

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  if (typeof window !== 'undefined') {
    document.body.style.overflowY = isOpen ? 'hidden' : 'auto';
  }

  return (
    <motion.nav
      className="nav-container"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <div className="nav-brand-wrapper">
        <Brand />
      </div>
      <div className="nav-links-wrapper">
        <Link href="/">
          <a className={`nav-link ${router.pathname === "/" ? "active" : ""}`}>
            o nas
          </a>
        </Link>
        <Link href="/oferta">
          <a className={`nav-link ${router.pathname === "/oferta" ? "active" : ""}`}>
            oferta
          </a>
        </Link>
        <Link href="/realizacje">
          <a  onClick={() => router.push("/realizacje")} className={`nav-link ${router.pathname === "/realizacje" ? "active" : ""}`}>
            realizacje
          </a>
        </Link>
        <Link href="/kontakt">
          <a className={`nav-link ${router.pathname === "/kontakt" ? "active" : ""}`}>
            kontakt
          </a>
        </Link>
      </div>

      <motion.div className="background" variants={sidebar} />
      <button
        className={`hamburger hamburger--criss-cross ${isOpen ? "active" : ""}`}
        type="button"
        onClick={() => toggleOpen()}
      >
        <div className="inner">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </div>
      </button>
      <OverlayMenu isOpen={isOpen} toggleOpen={toggleOpen} />
    </motion.nav>
  );
};

export default Navbar;
