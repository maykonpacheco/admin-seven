import React, { Component } from 'react';
import firebase from '../../firebase';


class Adicionar extends Component  {
  
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Especialist');
    this.state = {
      disponibilidade: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { disponibilidade } = this.state;

    this.ref.add({
      disponibilidade
      
    }).then((docRef) => {
      this.setState({
        disponibilidade: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { disponibilidade } = this.state;
    return (
      <div onSubmit={this.onSubmit}>
        <button  type="submit"   name="disponibilidade" className="btn btn-outline-primary bodyschedule" onChange={this.onChange}>
          {this.disponibilidade}
        </button>
    </div>
    );
  }
}

export default Adicionar;