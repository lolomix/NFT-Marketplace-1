import React from "react";
import "../pages.css";

import Total from "./component/Total";
import Category from "./component/Category";
import Header from "./component/Header";
import PopularItem from "./component/PopularItem";
import ContentLast from "./component/ContentLast";
import Navbar from "../../component/molecules/Navbar";
import Footer from "../../component/molecules/Footer/Index";
import PageContainer from "../../component/PageContainer";

export default function LandingPage() {
  return (
    <>
      <div className="LandingPage">
        <Navbar />
        <PageContainer>
          <Header />
          <Total />
          <Category />
          <PopularItem />
        </PageContainer>
        <ContentLast />
      </div>

      <Footer />
    </>
  );
}
