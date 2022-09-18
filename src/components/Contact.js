import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// Animation
import { motion } from "framer-motion";
import {pageAnimation} from "../animation"

function Contact() {
  return (
    <StyledContactUs variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <h1>Contact Us</h1>
      <Contacts>
        <div className="col">
          <Link to="/">Home page</Link>
          <Link to="/">About Section</Link>
          <Link to="/">Benefit Section</Link>
          <Link to="/">FAQ Section</Link>
        </div>
        <div className="col">
          <Link to="/courses">Courses</Link>
          <Link to="/courses">Interaktiv React va Redux</Link>
          <Link to="/courses">Soon</Link>
          <Link to="/courses">Interaktive JavaScript</Link>
        </div>
        <div className="col">
          <Link to="/contact">Contact Us</Link>
          <Link to="/contact">Phone Number: 90 676 29 20</Link>
          <Link to="/contact">Email: safarovhusandev@gmail.com</Link>
        </div>
      </Contacts>
    </StyledContactUs>
  );
}

const StyledContactUs = styled(motion.div)`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  margin: 0 auto;
  padding: 2rem 5rem;
`;
const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  .col {
    display: flex;
    flex-direction: column;
    color: white;
  }
`;

export default Contact;
