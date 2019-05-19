import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

class especialistEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      name: '',
      CRM: '',
      author: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('Especialist').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Especialist = doc.data();
        this.setState({
          key: doc.id,
          Name: Especialist.name,
          CRM: Especialist.CRM,
          author: Especialist.author
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

    const { name, CRM, author } = this.state;

    const updateRef = firebase.firestore().collection('boardEspecialists').doc(this.state.key);
    updateRef.set({
      name,
      CRM,
      author
    }).then((docRef) => {
      this.setState({
        key: '',
        name: '',
        CRM: '',
        author: ''
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
                <label for="title">Nome:</label>
                <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.onChange} placeholder="nome" />
              </div>
              <div class="form-group">
                <label for="description">CRM:</label>
                <input type="text" class="form-control" name="description" value={this.state.description} onChange={this.onChange} placeholder="descrição" />
              </div>
              <div class="form-group">
                <label for="author">Valor:</label>
                <input type="text" class="form-control" name="author" value={this.state.author} onChange={this.onChange} placeholder="valor" />
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