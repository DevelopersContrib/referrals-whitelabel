"use client";
import { imageLoader } from "@/helpers/image-helper";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface NavMenuProps {
  domain: string;
  logo: string;
}

const NavbarMenu: React.FC<NavMenuProps> = ({ logo, domain }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar
        expand="lg"
        bg="light"
        data-bs-theme="light"
        className={`!bg-white public-navbar ${scrolled ? "shadow-[rgba(82,63,105,0.05)_0px_10px_30px_0px]" : ""}`}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="/">
            {logo ? (
              <Image
                loader={imageLoader}
                src={logo}
                alt="referral"
                width={0}
                height={0}
                className="w-full max-w-full h-[30px] object-contain"
              />
            ) : (
              <span className="text-lg font-bold text-primary">{domain}</span>
            )}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/login" className="mr-4">
                Log in
              </Nav.Link>
              <Nav.Link
                href="/register"
                className="bg-primary rounded-md text-white !px-4 !py-2 btn-register inline-flex items-center justify-center text-center"
              >
                Try for free
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
