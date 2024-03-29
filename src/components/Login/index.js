import React, { Component } from 'react';
import firebase from '../../firebase';
import Login from './Login';
import Agendamentos from '../Agendamentos';

class SignIn extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
    return (
      <div>
            
        {this.state.user ? (
          <Agendamentos />
        ) :
          (
            <Login />
          )}
      </div>
    );
  }
}


export default SignIn;
