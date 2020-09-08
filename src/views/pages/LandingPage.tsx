import React from "react";
import Navbar from "../../components/Navbar"
import LandingPageHeader from "../../components/LandingPageHeader"
import Footer from "../../components/Footer"
import ButtonBases from "../../components/ComplexButtons/Button"
import Feedback from "../../components/Feedback"
import LandingPageBody from "../../components/LandingPageBody"

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
    
  });

  return (
    <>
      <Navbar />
      <LandingPageHeader />
      <LandingPageBody />
      <ButtonBases/>
      <Feedback />
      <Footer />
    </>
  );
}

export default LandingPage;
