import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import firebase from '../../firebase';
import Navbar from '../Navbar';


class Especialist extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('Especialist');
    this.unsubscribe = null;
    this.state = {
        Especialist: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const Especialist = [];
    querySnapshot.forEach((doc) => {
      const { name, CRM, author } = doc.data();
      Especialist.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        CRM,
        author,
      });
    });
    this.setState({
     Especialist
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div>
          <Navbar />
            
          <div className="row">
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4> Lista de Especialistas</h4>
                    <h4><Link to="/especialistCreate" className="btn btn-primary">Adicionar Especialista</Link></h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                    {this.state.Especialist.map(Especialist =>
                      <table className="table table-bordered table-md">
                        <tr>
                          <th>#</th>
                          <th>Nome</th>
                          <th>CRM</th>
                          <th>Status</th>
                          <th>Ação</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>{Especialist.name}</td>
                          <td>{Especialist.CRM}</td>
                          <td><div className="badge badge-success">Active</div></td>
                          <td><Link className="btn btn-secondary" to={`/especialistShow/${Especialist.key}`}>Detalhes</Link></td>
                        </tr>
                      </table>
                      )}
                    </div>
                  </div>
                  
                </div>
              </div>
              </div>
      </div>
      
    );
  }
}

export default Especialist;
