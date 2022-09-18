import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import react from "../img/react.jpg";
import js from "../img/js.png";
import backend from "../img/soon.png";
// Animation
import {motion} from "framer-motion"
import { pageAnimation } from "../animation";

const Courses = () => {
  return (
    <StyledCourses variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <Course>
        <h2>Interaktiv React va Redux</h2>
        <div className="line"></div>
        <Link to="courses/react">
          <img src={react} alt="react va redux" />
        </Link>
      </Course>

      <Course>
        <h2>Tez kunda 😮</h2>
        <div className="line"></div>
        <Link to="courses/soon">
          <img src={backend} alt="tez kunda" />
        </Link>
      </Course>

      <Course>
        <h2>Interaktiv JavaScript</h2>
        <div className="line"></div>
        <Link to="courses/javascript">
          <img src={js} alt="javascript" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Course = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Courses;
