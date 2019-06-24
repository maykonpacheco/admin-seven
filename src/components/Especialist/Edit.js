import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

class especialistEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      nome: '',
      crm: '',
      especialidade: '',
      domingo: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('Especialist').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Especialist = doc.data();
        this.setState({
          key: doc.id,
          nome: Especialist.nome,
          crm: Especialist.crm,
          especialidade: Especialist.especialidade
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({Especialist:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { nome, crm, especialidade } = this.state;

    const updateRef = firebase.firestore().collection('Especialists').doc(this.state.key);
    updateRef.set({
      nome,
      crm,
      especialidade
    }).then((docRef) => {
      this.setState({
        key: '',
        nome: '',
        crm: '',
        especialidade: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Editar Especialista
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to={`/show/${this.state.key}`} class="btn btn-primary">Voltar</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="Nome">Nome:</label>
                <input type="text" class="form-control" name="nome" value={this.state.nome} onChange={this.onChange} />
              </div>
              <div class="form-group">
                <label for="CRM">CRM:</label>
                <input type="text" class="form-control" name="crm" value={this.state.crm} onChange={this.onChange}  />
              </div>
              <div class="form-group">
                <label for="Especialidade">Especialidade:</label>
                <input type="text" class="form-control" name="especialidade" value={this.state.especialidade} onChange={this.onChange} />
              </div>
              <button type="submit" class="btn btn-success">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default especialistEdit;