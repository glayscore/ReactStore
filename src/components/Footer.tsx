/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Row, Container } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#" target="_blank"> Contacts </a>
              </li>
              <li>
                <a href="#" target="_blank"> Licenses </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">
            <span className="copyright"> © {new Date().getFullYear()}, made {" "} <i className="fa fa-heart heart" /> by ...  </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
