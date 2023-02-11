import './index.css'

const WhoAreYouRoute = () => (
  <div className="who-are-you-container">
    <div className="rubixe-description-container">
      <h1 className="who-are-you-heading">WHO WE ARE</h1>
      <p className="rubixe-description">
        Rubixe™ is a global technology company specializing in disruptive
        technologies – Artificial Intelligence (AI), Machine Learning, Robotic
        Process Automation (RPA), BlockChain and Internet of Things (IoT).{' '}
      </p>
      <p className="rubixe-description">
        {' '}
        Rubixe mission to enable businesses to leverage the full potential of
        disruptive technologies to stay competitive in the market.
      </p>
    </div>
    <div className="rubixe-image-container">
      <img
        src="https://res.cloudinary.com/dqyqjbuku/image/upload/v1676037640/rubixeImage_rv0lgg.jpg"
        alt="rubixe "
        className="rubixe-image"
      />
    </div>
  </div>
)

export default WhoAreYouRoute
