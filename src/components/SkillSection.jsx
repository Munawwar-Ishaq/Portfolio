import React, { useRef , useEffect } from "react";
import { usePortfolioContext } from "../context";

function SkillSection() {
  const skillRef = useRef(null);

  const { setOffsetVal } = usePortfolioContext();
  useEffect(() => {
    setOffsetVal((lastVal) => ({...lastVal , skills : skillRef.current.offsetTop}));
  } , [setOffsetVal]);

  return (
    <div className="container py-5" ref={skillRef}>
      <h1 className="text-center fw-normal wow fadeIn">My Skills</h1>
      <div className="row py-3">
        <div className="col-md-6">
          <div className="px-lg-3">
            <h4 className="wow fadeInUp">Backend Language</h4>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Node JS</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "80%",
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Express JS</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "80%",
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  80%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">PHP (Laravel)</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "30%",
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  30% [Basic]
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">
                Database [Mongo DB , MYSQL , SQlite]
              </span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "70%",
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="px-lg-3">
            <h4 className="wow fadeInUp">Frontend Development</h4>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">React Js (Responsive Web Design)</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "85%",
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  85%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">HTML , CSS</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "90%",
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">
                React Native (For Mobile Application)
              </span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "65%",
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  65%
                </div>
              </div>
            </div>
            <div className="progress-wrapper wow fadeInUp">
              <span className="caption">Ui Ux Design (Adobe XD)</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "70%",
                  }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
