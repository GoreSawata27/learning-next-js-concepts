"use client";

import { redirect, useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const Navigate = (page) => {
    router.push(page);
  };
  const HandelLogin = () => {
    redirect("/about");
  };

  return (
    <div className="app">
      <h1>Login page</h1>
      <button onClick={() => Navigate("/")}>Go to home page</button>
      <button onClick={HandelLogin}>Direct Login</button>
    </div>
  );
}

export default Login;
