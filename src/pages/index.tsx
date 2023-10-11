import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import "../styles/index.min.css";

import Logo from "../images/logo.webp";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img src={Logo} alt="logo" />
        </a>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#keunggulan" className="nav__link">
                Keunggulan
              </a>
            </li>
            <li className="nav__item">
              <a href="#aplikasi" className="nav__link">
                Aplikasi
              </a>
            </li>
            <li className="nav__item">
              <a href="#klien" className="nav__link">
                Klien
              </a>
            </li>
            <li className="nav__item">
              <a href="#kontak" className="nav__link">
                Kontak
              </a>
            </li>
          </ul>

          <div className="nav__close">
            <i className="ri-close-line icon-close" />
          </div>
        </div>

        <div className="nav__toggle">
          <i className="ri-function-line icon-close" />
        </div>
      </nav>
    </header>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>PT. Samudra Aplikasi Indonesia</title>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        rel="stylesheet"
      />
    </>
  );
};
