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
      const { name, CRM } = doc.data();
      Especialist.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        CRM,
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
            
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4> Lista de Especialistas</h4>
                    <div class="card-header-action">
                    <h4><Link to="/especialistCreate" className="btn btn-primary">Adicionar Especialista</Link></h4>
                  </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-md">
                        <tr>
                          
                          <th>Nome</th>
                          <th>CRM</th>
                          <th>Ação</th>
                          <th>Agenda</th>
                        </tr>
                        {this.state.Especialist.map(Especialist =>
                        <tr>
                          <td>{Especialist.name}</td>
                          <td>{Especialist.CRM}</td>
                          <td><Link to={`/especialistShow/${Especialist.key}`}>Editar</Link></td>
                          <td><Link to={`/agenda/${Especialist.key}`} className="btn btn-secondary">Adicionar</Link></td>
                        </tr> 
                         )}
                      </table>
                    </div>
                  </div>
                  
                </div>
              </div>
              </div> 
    );
  }
}

export default Especialist;
