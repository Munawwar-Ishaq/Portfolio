import React, { useRef, useEffect, useState } from "react";
import { usePortfolioContext } from "../context";
import axios from "axios";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessgae] = useState("");
  const [isLoading , setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    sussess: true,
    message: "",
  });

  const contactRef = useRef(null);
  const { setOffsetVal } = usePortfolioContext();
  useEffect(() => {
    setOffsetVal((lastVal) => ({
      ...lastVal,
      contact: contactRef.current.offsetTop,
    }));
  }, [setOffsetVal]);

  const HandleSubmit = () => {
    console.log("Handle Submit");
    if (!name) {
      return setErrorMessage({
        sussess: false,
        message: "Please Enter Your Name",
      });
    }

    if (!email) {
      return setErrorMessage({
        sussess : false,
        message : "Please Enter Your Email"
      })
    }

    if (!subject) {
      return setErrorMessage({
        sussess : false,
        message : "Please Enter Your Subject"
      })
    }

    if (!message) {
      return setErrorMessage({
        sussess : false,
        message : "Please Enter Your Message"
      });
    }

    let data = {
      name,
      email,
      subject,
      message,
    }

    if(!isLoading){
      setIsLoading(true);
      axios.post(`${process.env.REACT_APP_API_URL}/new-message` , data).then((res) => {
        setIsLoading(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessgae("");
        setErrorMessage({
          success: true,
          message: "Your message has been sent successfully",
        });
      })
    }
  };

  useEffect(() => {
    const timeer = setTimeout(() => {
      setErrorMessage({
        success: true,
        message: "",
      });
    }, 3000);

    return () => clearTimeout(timeer);
  }, [errorMessage.message]);

  return (
    <div className="page-contact py-5 mt-5" id="contact" ref={contactRef}>
      <div
        className={
          errorMessage.sussess
            ? "alert-design alert alert-success"
            : "alert-design alert alert-danger"
        }
        style={{
          top: errorMessage.message ? 20 : "-100%",
        }}
      >
        {errorMessage.message}
      </div>
      <div className="container-fluid">
        <div className="text-center wow fadeInUp">
          <div className="badge badge-subhead">Contact</div>
        </div>
        <h1 className="text-center fw-normal wow fadeInUp">Get in touch</h1>
        <div className="row py-5">
          <div className="col-lg-7 px-0 pr-lg-3 wow zoomIn">
            <div className="vg-maps">
              <div
                id="google-maps"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.884520661775!2d67.08355390203701!3d24.970043298239105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340b8386dc469%3A0xac8ba6668e0bcffc!2sGodhra%20Colony%20Sector%2011%20G%20North%20Karachi%20Twp%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1726089670914!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title="Map"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="vg-contact-form">
              <div className="form-row">
                <div className="col-12 mt-3 wow fadeInUp">
                  <input
                    className="form-control"
                    type="text"
                    name="Name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input
                    className="form-control"
                    type="text"
                    name="Email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-6 mt-3 wow fadeInUp">
                  <input
                    className="form-control"
                    type="text"
                    name="Subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
                <div className="col-12 mt-3 wow fadeInUp">
                  <textarea
                    className="form-control"
                    name="Message"
                    rows="6"
                    placeholder="Enter message here.."
                    value={message}
                    onChange={(e) => setMessgae(e.target.value)}
                  ></textarea>
                </div>
                <button
                  className="btn btn-theme mt-3 wow fadeInUp ml-1"
                  onClick={HandleSubmit}
                >
                  {isLoading ?  'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
