import './index.css'

const FooterRoute = () => (
  <div className="footer-container">
    <div className="footer-menu-container">
      <div className="about-us-section">
        <h1 className="heading">ABOUT US</h1>
        <p className="paragraph">
          Rubixe™ is a global technology company specializing in disruptive
          technologies – Artificial Intelligence (AI), Machine Learning, Robotic
          Process Automation (RPA), BlockChain and Internet of Things (IoT).
        </p>
      </div>
      <div className="menus-section">
        <h1 className="heading">Menus</h1>
        <ul className="menus-list">
          <li>Home</li>
          <li>Service</li>
          <li>Products</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="learn-more-section">
        <h1 className="heading">Learn More</h1>
        <ul className="menus-list">
          <li>About</li>
          <li>Contact US</li>
        </ul>
      </div>
      <div className="address-section">
        <h1 className="heading">Address</h1>
        <p className="paragraph">
          Novel Tech Park,
          <br /> 1st Floor, Hosur Rd, Kudlu gate,
          <br /> Bengaluru, Karnataka 560068
          <br />
          Phone: 0804-717-8999
          <br /> Email: hi@rubixe.com
        </p>
      </div>
    </div>
    <p className="company-register-details-container">
      © Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS
      PVT. LTD. | All Rights Reserved
    </p>
  </div>
)

export default FooterRoute
