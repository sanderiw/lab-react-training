import React from "react";

class SignupPage extends React.Component {
    
    state = {
        email: "",
        password: "",
        nationality: "en",
        blurredEmail: false,
        blurredPassword: false    
    }

    greeting = () => {
        if (this.state.nationality === "en") {
            return <span>Hello</span>
        } else if (this.state.nationality === "de") {
            return <span>Hallo</span>
        } else if (this.state.nationality === "fr") {
            return <span>Bonjour</span>
        } else if (this.state.nationality === "br") {
            return <span>Olá</span>
        } else {
            return <span>Hello</span>
        }
    }

    changeNationality = (event) => {
        this.setState({nationality: event.target.value})
    }

    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }

    changePassword = (event) => {
        this.setState({password: event.target.value})
    }

    validate = (data) => {
        const errors = {};

        if (!data.email ||
            !data.email.match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm)
        ) {
            errors.email = "You typed a invalid email"
        }

        if (!data.password ||
            !data.password.match(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/gm)
        ) {
            errors.password = "Your password is too weak"
        }
        return errors;
    }

    renderValidationClass = (error, blur) => {
        if (error && blur) {
            return 'is-invalid';
          } else if (!blur) {
            return '';
          } else {
            return 'is-valid';
          }
    }

    renderFeedbackClass = (error) => {
        if (error) {
            return "invalid-feedback"
        } else {
            return "valid-feedback"
        }
    }

    handleBlurEmail = () => {
        this.setState({
            blurredEmail: true
        })
    }

    handleBlurPassword = () => {
        this.setState({
            blurredPassword: true
        })
    }

    render() {
        const errors = this.validate(this.state)
        return (
            <div>
                <form className="col-6 text-start ms-5 my-5">
                    <div className="mb-3">
                        <label name="email" htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className={`form-control ${this.renderValidationClass(errors.email, this.state.blurredEmail)}`} id="email" aria-describedby="emailHelp" onChange={this.changeEmail} onBlur={this.handleBlurEmail}/>
                        <div id="emailHelp" className={`${this.renderFeedbackClass(errors.email)}`}>
                            {errors.email ? "Invalid e-mail" : "Valid e-mail"}
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input name="password" type="password" className={`form-control ${this.renderValidationClass(errors.password, this.state.blurredPassword)}`} id="password" onChange={this.changePassword} onBlur={this.handleBlurPassword}/>
                        <div id="passwordHelp" className={`form-text ${this.renderFeedbackClass(errors.password, this.state.blurredPassword)}`}>
                            {errors.password ? "Weak Password" : "Valid Password"}
                        </div>
                    </div>
                    <label htmlFor="nationality" className="form-label">Nationality</label>
                    <select name="nationality" id="nationality" className="form-select form-select mb-3" aria-label=".form-select example" onChange={this.changeNationality} value={this.state.nationality}>
                        <option defaultValue="en">Select your nationality</option>
                        <option value="en">American</option>
                        <option value="de">German</option>
                        <option value="fr">French</option>
                        <option value="br">Brazilian</option>
                    </select>
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </form>
                <div>
                    <p>{this.greeting()}</p>
                    <p>Your email address is: {this.state.email}</p>
                    <p>I can see your password: {this.state.password}</p>
                    <p>Your e-mail address is correct</p>
                    {/* <p>Erros: {errors}</p> */}
                </div>
            </div>  
        );
    }
}

export default SignupPage;