import React , { useRef} from "react";
import '../bootstrap.css'
function Service() {
  const serviceRef = useRef(null);


  return (
    <div className=" page-service" ref={serviceRef}>
      <div className="container" style={{
        flexDirection : 'column',
      }}>
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead" style={{
            padding : '10px 20px',
            fontSize : '18px'
          }}>Services</div>
        </div>
        <h1 className="fw-normal text-center wow fadeInUp">What Can I Do?</h1>
        <div className="row mt-5">
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <span className="ti-paint-bucket"></span>
              </div>
              <div className="caption">
                <h4 className="fg-theme">Web Design</h4>
                <p>
                  Expertise in creating visually appealing and responsive web
                  designs that effectively communicate your brand's message.
                  Proficient in HTML, CSS, and JavaScript to ensure your website
                  is not only attractive but also functional and user-friendly.
                  Experience in working with modern design frameworks and tools
                  to deliver high-quality web solutions tailored to your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <span className="ti-vector"></span>
              </div>
              <div className="caption">
                <h4 className="fg-theme">UI/UX Design</h4>
                <p>
                  Skilled in designing intuitive and user-friendly interfaces
                  that enhance the overall user experience. Focused on creating
                  engaging and effective designs by understanding user behavior
                  and applying best practices in UI/UX design. Adept at
                  wireframing, prototyping, and conducting user research to
                  deliver solutions that meet user needs and business goals.
                  Utilizes tools like Figma and Adobe XD to create high-fidelity
                  designs.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <span className="ti-desktop"></span>
              </div>
              <div className="caption">
                <h4 className="fg-theme">Web Development</h4>
                <p>
                  Experienced in full-stack web development using MERN Stack
                  (MongoDB, Express.js, React.js, Node.js) and React Native for
                  mobile applications. Proficient in building scalable and
                  performant web applications, integrating APIs, and deploying
                  solutions to production environments. Adept at solving complex
                  problems and delivering robust, high-quality code.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="card card-service wow fadeInUp">
              <div className="icon">
                <span className="ti-mobile"></span>
              </div>
              <div className="caption">
                <h4 className="fg-theme">Mobile App Development</h4>
                <p>
                  Expertise in developing mobile applications using React Native
                  and Expo, including advanced projects like chat applications
                  with SQLite3. Skilled in building cross-platform apps that
                  provide a seamless user experience on both iOS and Android.
                  Focused on creating performant and feature-rich applications
                  tailored to specific user needs and preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
