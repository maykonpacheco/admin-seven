import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: '',
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

    const { title, description, author } = this.state;

    this.ref.add({
      title,
      description,
      author
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { title, description, author } = this.state;
    return (
      <div>
        <Navbar />
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Adicionar Consultas
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/Queries" class="btn btn-primary">Voltar</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Nome:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="nome" />
              </div>
              <div class="form-group">
                <label for="description">Descrição:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="descrição" cols="80" rows="3">{description}</textArea>
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

export default Create;