import Link from "next/link";
import React from "react";

function layout({ children }) {
  return (
    <div>
      <h1> commom for this folder - commomLayout </h1>
      <div>
        <ul>
          <li>
            {" "}
            <Link href={`commonlayout/userlogin`}>userLogin</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={`/commonlayout/adminlogin`}>Admin Login</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href={`/commonlayout/login`}>Login</Link>{" "}
          </li>
        </ul>
      </div>

      {children}
    </div>
  );
}

export default layout;
