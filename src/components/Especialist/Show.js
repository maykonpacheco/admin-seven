import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';

class especialistShow extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Especialist: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('Especialist').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('Especialist').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/Especialist")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/Especialist">Especialista</Link></h4>
            <h3 class="panel-title">
              {this.state.Especialist.nome}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>Descrição:</dt>
              <dd>{this.state.Especialist.description}</dd>
              <dt>Valor:</dt>
              <dd>{this.state.Especialist.crm}</dd>
              <dt>Escpelialidade:</dt>
              <dd>{this.state.Especialist.Especialidade}</dd>
            </dl>
            <Link to={`/especialistEdit/${this.state.key}`} class="btn btn-success">Editar</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} class="btn btn-danger">Deletar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default especialistShow;