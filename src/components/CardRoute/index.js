import './index.css'

const CardRoute = () => (
  <div className="fluid-container">
    <div className="about-company-container">
      <h1 className="card-heading">WHERE WE STARTED</h1>
      <p className="description">
        Started in 2008, providing technology solutions based in the
        Netherlands, founders of Rubixe™ have gained expertise in cutting-edge
        technology through delivering several smart city solutions for European
        Commission (EC) projects.
      </p>
    </div>
    <div className="cards-container">
      <h1 className="artificial-heading">TECH FOR TEENS-A RUBIXE INITIATIVE</h1>
      <div className="artificial-container">
        <div className="artificial-card">
          <div className="card-name">
            <div>01</div>
          </div>
          <div className="artificial-card-container">
            <img
              src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1676046013/artificial-intelligence-icon-ai-icon-Introduction_j7xqxp.jpg"
              alt="AI ICON"
              className="artificial-image"
            />
            <p className="artificial-heading">
              Introducing AI to children in an age appropriate manner
            </p>
          </div>
        </div>
        <div className="artificial-card-second">
          <div className="artificial-card-container">
            <img
              src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1676018615/23097736_konmwk.jpg"
              alt="AI ICON"
              className="artificial-image"
            />
            <p className="artificial-heading">
              Gain awareness on AI and build an interactive story around it.
            </p>
          </div>
          <div className="card-name-second">
            <div>02</div>
          </div>
        </div>
        <div className="artificial-card">
          <div className="card-name">
            <div>03</div>
          </div>
          <div className="artificial-card-container">
            <img
              src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1676047303/aiICon_rnnpew.jpg"
              alt="AI ICON"
              className="artificial-image"
            />

            <p className="artificial-heading">
              Acquire programming skills in a user-friendly format.
            </p>
          </div>
        </div>
        <div className="artificial-card-four">
          <div className="artificial-card-container">
            <img
              src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1676018615/23097736_konmwk.jpg"
              alt="AI ICON"
              className="artificial-image"
            />
            <p className="artificial-heading">
              Exposure to mini projects on diverse topics
            </p>
          </div>
          <div className="card-name-second">
            <div>04</div>
          </div>
        </div>
        <div className="artificial-card">
          <div className="card-name">
            <div>05</div>
          </div>
          <div className="artificial-card-container">
            <img
              src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1676018615/23097736_konmwk.jpg"
              alt="AI ICON"
              className="artificial-image"
            />
            <p className="artificial-heading">Train the teachers programme</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CardRoute
