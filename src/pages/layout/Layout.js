import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./layout.css";
import "../../assets/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "../../router/MainRouter";

const Layout = () => {
  return (
    <BrowserRouter>
      <div className="wrap-body">
        <Header />
        <div className="main">
          <MainRouter />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
