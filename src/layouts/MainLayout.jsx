import React from "react";
import Header from "../components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MainLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <ToastContainer />
    </div>
  );
}

export default MainLayout;
