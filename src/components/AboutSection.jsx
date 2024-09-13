import React, { useEffect, useRef } from "react";
import MyImage from "../images/my.png";
import { usePortfolioContext } from "../context";

function AboutSection() {
  const aboutRef = useRef(null);
  const { setOffsetVal } = usePortfolioContext();
  useEffect(() => {
    setOffsetVal((lastVal) => ({...lastVal , about : aboutRef.current.offsetTop}));
  } , [setOffsetVal]);
  return (
    <div className="container py-5" ref={aboutRef}>
      <div className="row">
        <div className="col-lg-4 py-3">
          <div className="img-place wow fadeInUp about-image-box">
            <img src={MyImage} alt="wow" />
          </div>
        </div>
        <div className="col-lg-6 offset-lg-1 wow fadeInRight">
          <h1 className="fw-light">Munawwar Ishaq</h1>
          <h5 className="fg-theme mb-3">Full Stack Developer</h5>
          <div className="text-muted">
            <p>
              Hi! My self Munawwar Ishaq a MERN Stack Developer who love to
              solve problems using code(nodejs as backend developer). I am a
              pre-eng student currently finishing my 2nd year as of late-2024.
              My first year is not over yet with pending results on the way. I
              completed 6 months diploma in MERN Stack backend development at
              Computer Colligate And learned about Node. js, Express.
              js, and MongoDB.
            </p>
          </div>
          <ul className="theme-list">
            <li>
              <b>From:</b> Pakistan, PK
            </li>
            <li>
              <b>Lives In:</b> Karachi, PK
            </li>
            <li>
              <b>Age:</b> 18
            </li>
            <li>
              <b>Gender:</b> Male
            </li>
          </ul>
          <a className="btn btn-theme-outline btn-cv" href="/assets/resume/MunawwarIshaqCV.pdf" download={'Resume.pdf'}>Download CV</a>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
