import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

class especialistCreate extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('Especialist');
    this.state = {
      name: '',
      CRM: '',
      author: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, CRM, author } = this.state;

    this.ref.add({
      name,
      CRM,
      author
    }).then((docRef) => {
      this.setState({
        name: '',
        CRM: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { name, CRM, author } = this.state;
    return (
      <div>
        <Navbar />
      
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Adicionar Especialista
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Voltar</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Nome:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="nome" />
              </div>
              <div class="form-group">
                <label for="description">CRM:</label>
                <input type="text" class="form-control" name="CRM" onChange={this.onChange} placeholder="CRM" />
              </div>
              <div class="form-group">
                <label for="author">Valor:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="valor" />
              </div>
              <button type="submit" class="btn btn-success">Adicionar</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default especialistCreate;