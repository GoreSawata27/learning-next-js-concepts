"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const pathName = usePathname(); // gives path name
  console.log(pathName);
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li>
            <Link className="nav-links" href={`/`}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" href={`/about`}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" href={`/commonlayout`}>
              Common Layout
            </Link>
          </li>
          <li>
            <Link className="nav-links" href={`/login`}>
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
