import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { Projectdata } from "../ProjectData/data";

function ProjectDetail() {
  const navigate = useNavigate();
  const [projectDetail, setProjectDetail] = useState({});
  const { projectname } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    let data = Projectdata.find((data) => data.ProjectID === projectname);
    if (data) {
      setProjectDetail(data);
    } else {
      navigate("/home");
    }
  }, [projectname, navigate]);

  useEffect(() => {
    console.log(projectDetail);
  }, [projectDetail]);

  return (
    <div className="project-detail-container">
      <div className="project-home-section">
        <div className="back-btn" onClick={() => navigate("/")}>
          {" "}
          <FaArrowLeft /> Back to Home
        </div>
        <div className="project-path">
          ./
          <span
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </span>
          /
          <span
            onClick={() => {
              navigate("/project");
            }}
          >
            Project
          </span>
          /
          <span>
            {projectDetail && projectDetail.ProjectName
              ? projectDetail.ProjectName.replace(/\s+/g, "")
              : "ProjectName..."}
          </span>
        </div>
        <div className="prjocte-title">
          {projectDetail && projectDetail.ProjectName
            ? projectDetail.ProjectName
            : "ProjectName..."}
        </div>
        <div className="project-content">
          {projectDetail && projectDetail.ProjectContent
            ? projectDetail.ProjectContent
            : "Project Content..."}
        </div>
        <div className="project-btns">
          <div
            className="project-watch-live-btn"
            onClick={() => {
              window.open(
                projectDetail && projectDetail.ProjectLiveURL
                  ? projectDetail.ProjectLiveURL
                  : ""
              );
            }}
          >
            Watch Live
          </div>
          <div
            className="project-github-code-btn"
            onClick={() => {
              window.open(
                projectDetail && projectDetail.ProjectGithub
                  ? projectDetail.ProjectGithub
                  : ""
              );
            }}
          >
            Source Code
          </div>
        </div>
        <div className="scroll-down-btn">Scroll Down to View Detail</div>
      </div>
      <div className="project-images">
        <h2>Project Images</h2>
        <div className="project-images-banner">
          <img
            src={`/assets/img/${
              projectDetail && projectDetail.ProjectImages
                ? projectDetail.ProjectImages
                : "work"
            }/banner.png`}
            alt="img"
          />
        </div>
        <div className="project-images-bottom">
          <div className="img1">
            <img
              src={`/assets/img/${
                projectDetail && projectDetail.ProjectImages
                  ? projectDetail.ProjectImages
                  : "work"
              }/side1.png`}
              alt="img"
            />
          </div>
          <div className="img2">
            <img
              src={`/assets/img/${
                projectDetail && projectDetail.ProjectImages
                  ? projectDetail.ProjectImages
                  : "work"
              }/side2.png`}
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="project-detail">
        <h2>Project Detail</h2>
        <div>
          <li>
            Project Name -{" "}
            {projectDetail && projectDetail.ProjectName
              ? projectDetail.ProjectName
              : "ProjectName..."}
          </li>
          <li>
            Upload Date -{" "}
            {projectDetail && projectDetail.UploadDate
              ? projectDetail.UploadDate
              : "ProjectName..."}{" "}
          </li>
          <li>Description</li>
          <div className="projectdes">
            {projectDetail && projectDetail.ProjectDescription
              ? projectDetail.ProjectDescription.map((text) => {
                  return <div>{text}</div>;
                })
              : "Project Description..."}
          </div>
        </div>
        <div className="project-liberies">
          <h3>Tecnology</h3>
          <li className="project-language">
            {projectDetail && projectDetail.ProjectTecnology
              ? projectDetail.ProjectTecnology
              : "Project Tecnology"}
          </li>
          <div className="liberies">
            <h3>Frontend Liberies</h3>
            <div>
              {projectDetail && projectDetail.ProjectfrontendLiberies
                ? projectDetail.ProjectfrontendLiberies.map((text , index) => {
                    return <li key={index}>{text}</li>;
                  })
                : "Frontend Liberies..."}
            </div>
          </div>
          <div className="liberies">
            <h3>Backend liberies</h3>
            <div>
              {projectDetail && projectDetail.projectbackendLiberies
                ? projectDetail.projectbackendLiberies.map((text , index) => {
                    return <li key={index}>{text}</li>;
                  })
                : "Backend Liberies..."}
            </div>
          </div>
          <div className="liberies">
            <h3>Database</h3>
            <div>
              {projectDetail && projectDetail.Database
                ? projectDetail.Database.map((text) => {
                    return <li>{text}</li>;
                  })
                : "Database Used... "}
            </div>
          </div>
        </div>
      </div>
      <div className="project-author">Author - Munawwar Ishaq</div>
    </div>
  );
}

export default ProjectDetail;
