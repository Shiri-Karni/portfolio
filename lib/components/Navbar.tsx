'use client';

import Link from "next/link";
import { APP_NAME } from "../config";
import { useRef } from 'react';

export default function Navbar() {
  return (
    <header id="navbar">
      <Link href="/" className="rightHeader">
        <h3 className="app-name">
          {APP_NAME}
        </h3>
        <img src="/icons/Shiri.png" alt="icon" className="icon"></img>
      </Link>
      <nav>
        <Link href="/projects">Projects</Link>
        <Link href="/#contact-section">Contact Me</Link>
      </nav>
    </header>
  );
}
