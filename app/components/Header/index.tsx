"use client";

import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import logo from "../../../public/logo1.svg";

export function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>();

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerElement = document.querySelector("#header");
      if (headerElement) {
        setHeaderHeight(headerElement.clientHeight);
      }
    };

    updateHeaderHeight();
  });

  return (
    <header id="header" className={styles.header}>
      <div className={styles.headerContainer}>
        <Link className={styles.logo} href="/">
          <Image
            className={styles.logo}
            src={logo}
            alt="Logo da Tech Pro Bem"
          />
        </Link>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpened(!isMenuOpened)}
          type="button"
        >
          <div
            className={`${styles.hamburguerIcon} ${
              isMenuOpened ? styles.closeIcon : ""
            }`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>

        <nav
          className={`${styles.navbar} ${isMenuOpened ? styles.open : ""}`}
          style={{ top: `${headerHeight}px` }}
        >
          <div>
            <Link href="">Início</Link>
            <Link href="">Sobre</Link>
            <Link href="">Impacto</Link>
            <Link href="">Depoimentos</Link>
            <Link href="">Dúvidas</Link>
            <Link href="">Nos acompanhe</Link>
            <Link href="">Contato</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
