import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .then(u => {
        console.log(u);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div id="app">
        <section class="section">
          <div class="container mt-5">
            <div class="row">
              <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                <div class="login-brand">
                  <h1>Seven</h1>
                </div>

                <div class="card card-primary">
                  <div class="card-header">
                    <h4>Login</h4>
                  </div>

                  <div class="card-body">
                    <form
                      method="POST"
                      action="#"
                      class="needs-validation"
                      novalidate=""
                    >
                      <div class="form-group">
                        <label for="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          class="form-control"
                          name="email"
                          tabindex="1"
                          required
                          autofocus
                          value={this.state.email} 
                          onChange={this.handleChange} 
                          value={this.state.email} 
                        />
                        <div class="invalid-feedback">
                          Please fill in your email
                        </div>
                      </div>

                      <div class="form-group">
                        <div class="d-block">
                          <label for="password" class="control-label">
                            Password
                          </label>
                          <div class="float-right">
                            <a
                              href="auth-forgot-password.html"
                              class="text-small"
                            >
                              Esqueceu a Senha?
                            </a>
                          </div>
                        </div>
                        <input
                          id="password"
                          type="password"
                          class="form-control"
                          name="password"
                          tabindex="2"
                          required
                          value={this.state.password} 
                          onChange={this.handleChange} 
                        />
                        <div class="invalid-feedback">
                          please fill in your password
                        </div>
                      </div>
                      <div class="form-group">
                        <button
                          type="submit"
                          class="btn btn-primary btn-lg btn-block"
                          tabindex="4"
                          onClick={this.login} id='button-signin'
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="mt-5 text-muted text-center">
                  Você ainda não tem uma conta?{" "}
                  <Link href="auth-register.html">Criar conta</Link>
                </div>
                <div className="simple-footer">
                  <p>
                    Feito com <i className="fa fa-heart" /> em Cuiabá-MT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Login;
