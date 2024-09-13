import React  , {useState} from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Projectdata } from "../ProjectData/data";

function ProjectPage() {
  const [projects] = useState(Projectdata);
  const navigate = useNavigate();
  return (
    <>
      <div className="vg-page">
        <div
          className="back-btn-home mb-5"
          onClick={() => {
            navigate("/");
          }}
        >
          {" "}
          <FaArrowLeft /> Back To Home{" "}
        </div>
        <div className="intro-content fade-in mx-auto">
          <h1 className="section-heading slide-in">My Projects</h1>
          <p className="section-description light-color">
            I have been working on various projects to enhance my skills and
            explore different technologies. Each project showcases my journey in
            learning and applying a wide range of tools and frameworks,
            demonstrating creativity and technical expertise.
          </p>
        </div>
      </div>
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
    </>
  );
}

export default ProjectPage;
