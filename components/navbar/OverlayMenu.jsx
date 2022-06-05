import React from "react";
import styled, {css} from "styled-components";
import Link from "next/link";
import Brand from "../brand/Brand";
import { FacebookIcon, InstagramIcon } from "../../public/icons";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const menuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const Menu = (props) => (
  <motion.ul {...props}
             initial="closed"
             animate="open"
             exit="closed"
             variants={menuVariants}>
    {props.children}
  </motion.ul>
);

const MenuItem = (props) => (
  <motion.li {...props} variants={menuItemVariants}>
    {props.children}
  </motion.li>
);

const OverlayMenu = ({ toggleOpen, isOpen }) => {
  return (
    <AnimatePresence>
      <Menu className={`mobile-menu ${isOpen ? "open" : "closed"}`}>
        <MenuItem className="mobile-menu__brand" onClick={toggleOpen}>
          <Brand />
        </MenuItem>
        <MenuItem className="mobile-menu__link" onClick={toggleOpen}>
          <Link href="/">
            <a className="nav-link-mobile">firma</a>
          </Link>
        </MenuItem>
        <MenuItem className="mobile-menu__link" onClick={toggleOpen}>
          <Link href="/oferta">
            <a className="nav-link-mobile">oferta</a>
          </Link>
        </MenuItem>
        <MenuItem className="mobile-menu__link" onClick={toggleOpen}>
          <Link href="/realizacje">
            <a className="nav-link-mobile">realizacje</a>
          </Link>
        </MenuItem>
        <MenuItem className="mobile-menu__link" onClick={toggleOpen}>
          <Link href="/kontakt">
            <a className="nav-link-mobile">kontakt</a>
          </Link>
        </MenuItem>

        {/*<div className="mobile-menu__social">*/}
        {/*  <MenuItem onClick={toggleOpen}>*/}
        {/*    <Link href="/">*/}
        {/*      <a target="_blank">*/}
        {/*        <SocialImg bgImg={FacebookIcon} />*/}
        {/*      </a>*/}
        {/*    </Link>*/}
        {/*  </MenuItem>*/}
        {/*  <MenuItem onClick={toggleOpen}>*/}
        {/*    <Link href="/">*/}
        {/*      <a target="_blank">*/}
        {/*        <SocialImg bgImg={InstagramIcon} isMenuOpen={isOpen} />*/}
        {/*      </a>*/}
        {/*    </Link>*/}
        {/*  </MenuItem>*/}
        {/*</div>*/}
      </Menu>
    </AnimatePresence>
  );
};

export default OverlayMenu;

const SocialImg = styled.div`
  background-image: url(${({ bgImg }) => bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 6rem;
  height: 6rem;
`;
