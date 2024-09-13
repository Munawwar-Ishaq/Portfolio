import React from 'react'

function Footer() {
  return (
    <div className="vg-footer">
    <h1 className="text-center">M.H.A Code X</h1>
    <div className="container">
      <div className="row">
        <div className="col-lg-4 py-3">
          <div className="footer-info">
            <p>Where to find me</p>
            <hr className="divider" />
            <p className="fs-large fg-white">
              Karachi, Pakistan, Godhra Colony, Sector 11-G, New Karachi
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 py-3">
          <div className="footer-info">
            <p>Contact me</p>
            <hr className="divider" />
            <ul className="list-unstyled">
              <li>
                Email: 
                <a href="mailto:muhammadmunawwar124@gmail.com" style={{
                  marginLeft : 5
                }}>muhammadmunawwar124@gmail.com</a>
              </li>
              <li>Phone: <a href="tel:+923141304783">+92-314-1304783</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-3">
        <div className="col-12">
          <p className="text-center mb-0 mt-4">
            Copyright &copy;2024. All rights reserved | This Portfolio is made
            with <span className="ti-heart fg-theme-red"></span> by
            <span className='ml-2 text-success' style={{
              cursor : 'pointer'
            }}>Munawwar Ishaq</span>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer