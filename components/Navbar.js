"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            <Image src="/square_logo_black.png" alt="logo" width={120} height={70} />
          </div>

          <div className="links">
            <span>Agentic Workbench</span>
            <span>Use Cases</span>
            <span>Who we are</span>
            <span>Careers</span>
            <span>Blogs</span>
          </div>

          <div className="actions">
            <button className="sign">Sign Up</button>
            <button className="contact">Contact Us</button>
          </div>

          <div className="hamburger" onClick={() => setOpen(true)}>☰</div>
        </div>
      </nav>

      <div className={`sidebar ${open ? "show" : ""}`}>
        <div className="close" onClick={() => setOpen(false)}>✕</div>
        <span>Agentic Workbench</span>
        <span>Use Cases</span>
        <span>Who we are</span>
        <span>Careers</span>
        <span>Blogs</span>
      </div>
    </>
  );
}
