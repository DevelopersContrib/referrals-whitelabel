"use client";
import { imageLoader } from "@/helpers/image-helper";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface NavMenuProps {
  domain: string;
  logo: string;
}

const NavbarMenu: React.FC<NavMenuProps> = ({ logo, domain }) => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary !bg-slate-900"
        bg="dark"
        data-bs-theme="dark"
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
            <Nav className="me-auto">
              <Nav.Link href="/" className="capitalize">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="capitalize">
                about
              </Nav.Link>
              <Nav.Link href="/privacy" className="capitalize">
                privacy policy
              </Nav.Link>
              <Nav.Link href="/terms" className="capitalize">
                terms and condition
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
