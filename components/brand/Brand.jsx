import React from 'react'
import Link from "next/link";

const Brand = () => {
  return (
    <Link href="/">
      <a>
        <img
          className="brand-image"
          src="/img/logo.png"
          alt="Company Logo"
          width="250"
        />
      </a>
    </Link>
  );
};

export default Brand
