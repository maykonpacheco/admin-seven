import React, { useState } from 'react';
import firebase from '../../firebase';
import './components.css';
import { Link, withRouter } from 'react-router-dom';



//import Febsaude from '../../../assets/feb-saude.png';
//import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../../../node_modules/bootstrap-social/bootstrap-social.css';

function SignIn(props) {


	const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  
    return (

      <div id="app">
    <section className="section">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
            <div className="login-brand">
              <img alt="logo" width="200" />
            </div>
            <div className="card card-primary">
              <div className="card-header"><h4>Login</h4></div>
              <div className="card-body">
                <form method="POST" action="#" className="needs-validation" novalidate="" onSubmit={e => e.preventDefault() && false}>
                  <div className="form-group">
                    <label for="email">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.avalue)}  id="email" type="email"  className="form-control" name="email" tabindex="1" required autofocus />
                    <div className="invalid-feedback">
                    Por favor preencha seu email
                    </div>
              </div>
                  <div className="form-group">
                    <div className="d-block">
                    	<label for="password" className="control-label">Senha</label>
                      <div className="float-right">
                        <a href="auth-forgot-password.html" className="text-small">
                          Esqueceu a senha?
                        </a>
                      </div>
                    </div>
                    <input value={password}  onChange={e => setPassword(e.target.value)} id="password" type="password" className="form-control" name="password" tabindex="2" required />
                    <div className="invalid-feedback">
                     Por favor preencha sua senha
                    </div>
                  </div>
          
                  <div className="form-group">
                    <button onClick={login} type="submit" className="btn btn-primary btn-lg btn-block" tabindex="4">
                      Entrar
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="mt-5 text-muted text-center">
              Não tem uma conta? <Link to='signup'>Criar conta grátis</Link>
            </div>
            <div className="simple-footer">
            <p>Feito com <i className="fa fa-heart"></i> em Cuiabá-MT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

    );
     
    async function login() {
        try {
            await firebase.login(email, password)
            props.history.replace('/Especialist')
        } catch(error) {
            alert(error.message)
        }
    }
  }

export default withRouter((SignIn));
