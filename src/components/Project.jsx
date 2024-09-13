import React, { useRef, useState, useEffect } from "react";
// import ProjectImg from "../images/project.png";
import { useNavigate } from "react-router-dom";
import { usePortfolioContext } from "../context";
import { Projectdata } from "../ProjectData/data";

function Project() {
  const navigate = useNavigate();

  const [projects] = useState(Projectdata);

  const projectRef = useRef(null);
  const { setOffsetVal } = usePortfolioContext();
  useEffect(() => {
    setOffsetVal((lastVal) => ({
      ...lastVal,
      project: projectRef.current.offsetTop,
    }));
  }, [setOffsetVal]);

  return (
    <div className="project-page" ref={projectRef}>
      <div className="container py-5">
        <h2 className="text-center text-dark project-h2">Our Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project, index) => {
            return (
              <div className="project-card" key={index}>
                <div className="blendmode"></div>
                <img
                  src={`/assets/img/${project.ProjectImages}/side2.png`}
                  alt="project-img"
                />
                <div className="project-card-detail">
                  <h2>{project.ProjectName}</h2>
                  <p>{project.ProjectContent.slice(0, 80)} ...</p>
                </div>
                <div className="project-links">
                  <div className="links-buttons">
                    <div
                      className="project-btn"
                      onClick={() => {
                        window.open(project.ProjectGithub, "_blank");
                      }}
                    >
                      View Github
                    </div>
                    <div
                      className="project-btn"
                      onClick={() => {
                        navigate("/project/" + project.ProjectID);
                      }}
                    >
                      More Detail
                    </div>
                  </div>
                  <div
                    className="project-btn-live"
                    onClick={() => {
                      window.open(project.ProjectLiveURL, "_blank");
                    }}
                  >
                    View Live
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="justify-content-center align-items-center d-flex">
          <button
            type="submit"
            className="btn btn-theme  wow fadeInUp "
            style={{
              margin: "20px auto",
            }} 
            onClick={() => navigate('/project')}
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
