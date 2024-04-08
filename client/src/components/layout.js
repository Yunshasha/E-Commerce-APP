import React from "react";
import { NavBar } from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
