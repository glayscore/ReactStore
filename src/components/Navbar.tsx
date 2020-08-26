import React from "react";
import classnames from "classnames";
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  NavItem,
  NavLink,
} from "reactstrap";

function ComponentNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse] = React.useState(false);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });

  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand className="company-nav" data-placement="bottom" href="#home" target="_blank" >
            <h2 style={{ textTransform: "lowercase" }}>sto</h2>
            <h1 style={{ textTransform: "uppercase" }}>RE</h1>
            <h2 style={{ textTransform: "lowercase" }}>act</h2>
          </NavbarBrand>
        </div>
        <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
          <Nav navbar>
            <NavItem>
              <NavLink href="#" target="_blank">
                <i /> UI Components
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" target="_blank">
                <i /> Utilities
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" target="_blank">
                <i /> Models
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" target="_blank">
                <i /> Other
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default ComponentNavbar;
