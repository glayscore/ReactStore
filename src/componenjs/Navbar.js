import React from "react";
import classnames from "classnames";
import { Collapse, NavbarBrand, Navbar, NavItem, Nav, Container } from "reactstrap";
import App from './HamburgerMenu/App';
function ComponentNavbar() {
    var _a = React.useState("navbar-transparent"), navbarColor = _a[0], setNavbarColor = _a[1];
    var navbarCollapse = React.useState(false)[0];
    React.useEffect(function () {
        var updateNavbarColor = function () {
            if (document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 299) {
                setNavbarColor("");
            }
            else if (document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 300) {
                setNavbarColor("navbar-transparent");
            }
        };
        window.addEventListener("scroll", updateNavbarColor);
        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (React.createElement(Navbar, { className: classnames("fixed-top", navbarColor), expand: "lg" },
        React.createElement(Container, null,
            React.createElement("div", { className: "navbar-translate" },
                React.createElement(NavbarBrand, { className: "company-nav", "data-placement": "bottom", href: "#home", target: "_blank" },
                    React.createElement("img", { src: "/images/Logo.png", className: "company-logo", alt: "#" }),
                    React.createElement("img", { src: "/images/Virpan.png", className: "company-name", alt: "#" }))),
            React.createElement("div", { className: "hamburger-menu-navbar" },
                React.createElement(NavItem, null,
                    React.createElement(App, null))),
            React.createElement(Collapse, { className: "justify-content-end", navbar: true, isOpen: navbarCollapse },
                React.createElement(Nav, { navbar: true })))));
}
export default ComponentNavbar;
