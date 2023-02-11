import {Component} from 'react'

import './index.css'

class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <div className="Banner-elements">
          <h1 className="headline">Tech For Teens</h1>

          <p className="banner-description">
            CARVING FUTURE TECHNOLOGIES PROFESSIONALS OUT OF YOUNG MINDS
          </p>
        </div>
      </div>
    )
  }
}

export default Banner
