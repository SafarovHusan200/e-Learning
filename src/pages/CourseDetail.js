import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { CourseState } from "../courseState";
import { useEffect } from "react";
import {motion} from "framer-motion"
import {pageAnimation} from "../animation"

function CourseDetail() {
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(CourseState);
  const [course, setCourse] = useState(null);

  // useEffect
  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);
  return (
    <>
      {course && (
        <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <Header>
            <h2>{course.title}</h2>
            <img src={course.mainImg} alt="laptop" />
            <h3>Price  ${course.price}</h3>
          </Header>
          <Awards>
            {course.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
                
              />
            ))}
          </Awards>
            <ImageDisplay>
              <img src={course.secondaryImg} alt="" />
            </ImageDisplay>
        </Details>
      )} 
    </>
  );
}

const Details = styled(motion.div)`
  color: #fff;
`;

const Header = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    width: 100%;
    text-align: center;
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const StylesAward = styled.div`
  padding: 5rem;
  border: 1px solid white;
  h3{
    font-size: 2rem;
  }
  .line{
    width: 100%;
    height: 0.5rem;
    background-color: #30bee3;
  }
  p{
    padding: 2rem 0rem;
  }
`
const ImageDisplay = styled.div`
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`

// Award component
function Award({ title, description }) {
  return (
    <StylesAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StylesAward>
  );
}

export default CourseDetail;
