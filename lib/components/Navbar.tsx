'use client';

import Link from "next/link";
import { APP_NAME } from "../config";
import { useRef } from 'react';

export default function Navbar() {
  return (
    <header id="navbar">
      <Link href="/" className="rightHeader">
        <h1 className="app-name">
          {APP_NAME}
        </h1>
        <img src="/icons/Shiri.png" alt="icon" className="icon"></img>
      </Link>
      <nav>
        <Link href="/">My Projects</Link>
        <Link href="/cv">CV</Link>
        <Link href="/#contact-section">Contact Information</Link>
        
      </nav>
    </header>
  );
}
