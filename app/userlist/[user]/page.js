"use client";
import React from "react";

function userInfo({ params }) {
  return <div className="app">Hello {params.user}</div>;
}

export default userInfo;
