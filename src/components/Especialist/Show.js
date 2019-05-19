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
          Especialist: doc.data(),
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
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
          <h4><Link to="/Especialist">Lista de Especialista</Link></h4>
            <h3 class="panel-title">
              {this.state.Especialist.name}
            </h3>
          </div>
          <div class="panel-body">
            <dl>
              <dt>CRM:</dt>
              <dd>{this.state.Especialist.CRM}</dd>
              <dt>author:</dt>
              <dd>{this.state.Especialist.author}</dd>
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