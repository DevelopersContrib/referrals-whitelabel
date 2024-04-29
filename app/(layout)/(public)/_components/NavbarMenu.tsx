"use client";
import { imageLoader } from "@/helpers/image-helper";
import Image from "next/image";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

interface Campaign {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  widget_details: {
    id: string;
    campaign_id: string;
    background_image: string;
    description: string;
    // Add more properties as needed
  };
}

interface HomepageProps {
  domain: string;
  logo: string;
  banner: string;
  campaignData: Campaign[]; // Ensure campaignData is an array of Campaign objects
}

const NavbarMenu = ({ logo }: { logo: string }) => {
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">
            {logo && (
              <Image
                loader={imageLoader}
                src={logo}
                alt="referral"
                width={0}
                height={0}
                className="w-full max-w-full h-[50px] object-contain"
              />
            )}
            {/* {domain && (
              <span className="text-lg font-bold text-primary">
                {domain}
              </span>
            )} */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="capitalize">
                Home
              </Nav.Link>
              <Nav.Link href="/" className="capitalize">
                about
              </Nav.Link>
              <Nav.Link href="/" className="capitalize">
                privacy policy
              </Nav.Link>
              <Nav.Link href="/" className="capitalize">
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
