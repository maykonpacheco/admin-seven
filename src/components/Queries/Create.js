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
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">
              Adicionar Consultas
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/Queries" className="btn btn-primary">Voltar</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label for="title">Nome:</label>
                <input type="text" className="form-control" name="title" value={title} onChange={this.onChange} placeholder="nome" />
              </div>
              <div className="form-group">
                <label for="description">Descrição:</label>
                <textArea className="form-control" name="description" onChange={this.onChange} placeholder="descrição" cols="80" rows="3">{description}</textArea>
              </div>
              <div className="form-group">
                <label for="author">Valor:</label>
                <input type="text" className="form-control" name="author" value={author} onChange={this.onChange} placeholder="valor" />
              </div>
              <button type="submit" className="btn btn-success">Adicionar</button>
            </form>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Create;