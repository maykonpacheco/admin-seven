import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import SelecaoEspecialista from './SelecaoEspecialista';
import AdicionarAgenda from '../Especialist/Agenda//AdicionarAgenda';
class especialistCreate extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('Especialist');
    this.state = {
      name: '',
      CRM: '',
      Especialidade: ''
      
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, CRM, Especialidade } = this.state;

    this.ref.add({
      name,
      CRM,
      Especialidade
      
    }).then((docRef) => {
      this.setState({
        name: '',
        CRM: '',
        Especialidade: ''
      });
      this.props.history.push("/Especialist")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { name, CRM, Especialidade } = this.state;
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
            <h4><Link to="/Especialist" class="btn btn-primary">Voltar</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">Nome:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="nome" />
              </div>
              <div class="form-group">
                <label for="description">CRM:</label>
                <input type="text" class="form-control" name="CRM" value={CRM} onChange={this.onChange} placeholder="CRM" />
              </div>
              <div  class="form-group">
              <label for="description">Especialidade:</label>
                <input type="text" class="form-control" name="Especialidade" value={Especialidade} onChange={this.onChange} placeholder="Ex: Cardiologia, Psicologia, Dermatologia... " />
              </div>
              <AdicionarAgenda />
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