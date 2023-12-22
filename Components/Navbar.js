import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <ul>
          <li>
            {" "}
            <Link href={`/`}>Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={`/about`}>About</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={`/contact`}>Contact</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={`/login`}>Login</Link>{" "}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
