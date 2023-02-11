import {Component} from 'react'

import './index.css'

class RegisterRoute extends Component {
  state = {
    nameInput: '',
    emailInput: '',
    mobileNumberInput: '',
    errorMessage: '',
    isRegister: false,
    nameError: '',
    emailError: '',
    mobileNumber: '',
  }

  handleOnChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  handleOnChangeEmail = event => {
    this.setState({emailInput: event.target.value})
  }

  handleOnChangeMobileNumber = event => {
    this.setState({mobileNumberInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {nameInput, emailInput, mobileNumberInput} = this.state

    if (nameInput !== '' && emailInput !== '' && mobileNumberInput !== '') {
      this.setState({errorMessage: 'Registered Successfully'})
      this.setState(prevState => ({isRegister: !prevState.isRegister}))
      this.setState({nameInput: ''})
      this.setState({emailInput: ''})
      this.setState({mobileNumberInput: ''})
    } else {
      this.setState({errorMessage: 'Pls enter valid Details'})
    }

    if (nameInput === '') {
      this.setState({nameError: 'Enter Your Name'})
    } else {
      this.setState({nameError: ''})
    }

    if (emailInput === '') {
      this.setState({emailError: 'Enter Your Valid Email'})
    } else {
      this.setState({emailError: ''})
    }

    if (mobileNumberInput === '' && mobileNumberInput.length !== 10) {
      this.setState({mobileNumber: 'Enter Your Valid Number'})
    } else {
      this.setState({mobileNumber: ''})
    }
  }

  render() {
    const {
      errorMessage,
      nameInput,
      emailInput,
      mobileNumberInput,
      isRegister,
      nameError,
      mobileNumber,
      emailError,
    } = this.state

    return (
      <div className="register-input-container">
        <div className="register-elements-container">
          <div className="register-heading-container">
            <h1 className="main-heading">GET IN TOUCH</h1>
            <p className="headline-element">
              Please complete the form and we will get back to you.
            </p>
          </div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label htmlFor="nameInput" className="label-element">
                Name*
              </label>
              <input
                type="text"
                id="nameInput"
                className="input-element"
                placeholder="Enter Your Name"
                onChange={this.handleOnChangeName}
                onBlur={this.handleOnBlurName}
                value={nameInput}
              />
              <span className="error-message">{nameError}</span>
            </div>
            <div className="input-container">
              <label htmlFor="emailInput" className="label-element">
                Email*
              </label>
              <input
                type="text"
                id="emailInput"
                className="input-element"
                placeholder="Enter Your Email"
                onChange={this.handleOnChangeEmail}
                value={emailInput}
              />
              <span className="error-message">{emailError}</span>
            </div>
            <div className="input-container">
              <label htmlFor="mobileInput" className="label-element">
                MobileNumber*
              </label>
              <input
                type="number"
                id="mobileInput"
                className="input-element"
                placeholder="Enter Your Mobile Number"
                onChange={this.handleOnChangeMobileNumber}
                value={mobileNumberInput}
              />
              <span className="error-message">{mobileNumber}</span>
            </div>
            <button type="submit" className="register-button">
              Register Now
            </button>
            <span
              className={`${isRegister ? 'success-message' : 'error-message'}`}
            >
              {errorMessage}
            </span>
          </form>
        </div>
      </div>
    )
  }
}

export default RegisterRoute
