import React from "react";
import {
  Container,
}
  from "reactstrap";
import JumbotronHeaderLandingPage from './JumbotronHeaderLandingPage'



function LandingPageHeader() {
  let pageHeader: any = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div style={{ backgroundImage: "url(" + require("../assets/img/4.jpg") + ")" }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <JumbotronHeaderLandingPage />
          <div className="react-logo-header">
            <img src="/images/react-logo.png" alt="#" />
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPageHeader;
