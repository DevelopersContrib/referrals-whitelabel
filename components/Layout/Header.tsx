"use client";
import { imageLoader } from "@/helpers/image-helper";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = ({ domain,logo }: { logo: string; domain: string }) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <Image
              loader={imageLoader}
              src={ logo }
              alt="referral"
              width={0}
              height={0}
              className="tw-w-full tw-max-w-full tw-h-[50px] tw-object-contain"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="https://www.referrals.com/signup">Register</Nav.Link>
              <Nav.Link href="https://www.referrals.com/signin">Log in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
