import React, { Component } from 'react';
import firebase from '../../firebase';
import { Link } from 'react-router-dom';


class Show extends Component {


  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }


  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
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
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/Queries")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }


  render() {
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-heading">
          <h4><Link to="/Queries">Consultas</Link></h4>
            <h3 className="panel-title">
              {this.state.board.title}
            </h3>
          </div>
          <div className="panel-body">
            <dl>
              <dt>Valor:</dt>
              <dd>{this.state.board.author}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} className="btn btn-success">Editar</Link>&nbsp;
            <button onClick={this.delete.bind(this, this.state.key)} className="btn btn-danger">Deletar</button>
          </div>
        </div>
      </div>
    );
  }
}


export default Show;