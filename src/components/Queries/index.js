import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import firebase from "../../firebase";
import Navbar from "../Navbar";

class Queries extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("boards");
    this.unsubscribe = null;
    this.state = {
      boards: [],
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
  
  onCollectionUpdate = querySnapshot => {
    const boards = [];
    querySnapshot.forEach(doc => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description,
        author
      });
        // console.log(doc.id, " => ", doc.data());
    });
    this.setState({
      boards
    });
    
    console.log(boards);
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  
  render() {
    return (
      <div>
        <Navbar />
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4> Lista de Consultas</h4>
              <div class="card-header-action">
                <h4>
                  <Link to="/create" class="btn btn-primary">
                    Adicionar Consulta
                  </Link>
                </h4>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered table-md">
                  <tr>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Valor </th>
                    <th>Ação</th>
                  </tr>
                  {this.state.boards.map(board => (
                    <tr>
                      <td>{board.title}</td>
                      <td>{board.description}</td>
                      <td>{board.author}</td>
                      <td> <Link to={`/show/${board.key}`}>Editar</Link> </td>
                    </tr>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Queries;
