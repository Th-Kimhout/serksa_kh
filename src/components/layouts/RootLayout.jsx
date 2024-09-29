import React from "react";
import { NavbarComponent } from "./NavbarComponent";
import { Outlet } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import ChatHead from "../chatBot/ChatHead";
import { Metadata } from "../../lib/Metadata";
import thumbnail from "../../assets/logo.jpg";

export default function RootLayout() {
  return (
    <>
      <Metadata
        title="SERKSA - HomePage"
        description="SERKSA is an free E-Learning Platform that offer a wide ranges of courses. Take your time and learn from Anywhere. SERKSA was developed by CSTAD Pre-University Scholarship Students Group 3."
        author="CSTAD"
        keywords="free, learning, free courses, khmer, online"
        thumbnail={thumbnail}
      />
      <header>
        <NavbarComponent />
      </header>
      <main>
        <Outlet />
      </main>
      <ChatHead />
      <FooterComponent />
    </>
  );
}
