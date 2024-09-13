import React , {useRef} from "react";

function Education() {
  const educationRef = useRef(null);


  return (
    <div className="container pt-5" ref={educationRef}>
      <div className="row">
        <div className="col-md-6 wow fadeInRight">
          <h2 className="fw-normal">Education</h2>
          <ul className="timeline mt-4 pr-md-5">
            <li>
              <div className="title">2023 - 2024</div>
              <div className="details">
                <h5>Pre-Engineering (First Year)</h5>
                <small className="fg-theme">Government Boys High School</small>
                <p>
                  Completed first year of pre-engineering, awaiting results.
                </p>
              </div>
            </li>
            <li>
              <div className="title">2024 - Present</div>
              <div className="details">
                <h5>Pre-Engineering (Second Year)</h5>
                <small className="fg-theme">Government Boys High School</small>
                <p>
                  Currently studying in the second year of pre-engineering,
                  focusing on Physics, Chemistry, and Mathematics.
                </p>
              </div>
            </li>
            <li>
              <div className="title">2024</div>
              <div className="details">
                <h5>MERN Stack Backend Development</h5>
                <small className="fg-theme">Computer Colligate</small>
                <p>
                  Completed a 6-month diploma in MERN Stack backend
                  development from Computer Colligate, receiving a certificate
                  for the course.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-6 wow fadeInRight" data-wow-delay="200ms">
          <h2 className="fw-normal">Experience</h2>
          <ul className="timeline mt-4 pr-md-5">
            <li>
              <div className="title">2024 - Current</div>
              <div className="details">
                <h5>MERN Stack Developer</h5>
                <small className="fg-theme">Self-Practice</small>
                <p>
                  Working as a MERN Stack developer, specializing in backend
                  development using Node.js, Express.js, MongoDB, and
                  React.js. Holds a certificate in MERN Stack backend
                  development from Computer Colligate.
                </p>
              </div>
            </li>
            <li>
              <div className="title">2024 - Current</div>
              <div className="details">
                <h5>React Native Developer</h5>
                <small className="fg-theme">Self-Practice</small>
                <p>
                  Developing mobile applications using React Native and Expo,
                  with skills acquired through online courses.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
