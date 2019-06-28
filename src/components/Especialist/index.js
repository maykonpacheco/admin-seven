import React, { Component } from 'react';
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import firebase from '../../firebase';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';


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
      const { nome, crm, especialidade } = doc.data();
      Especialist.push({
        key: doc.id,
        doc, // DocumentSnapshot
        nome,
        crm,
        especialidade
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
                    <h4><Link to="/CreateEspecialist" className="btn btn-primary">Adicionar Especialista</Link></h4>
                  </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-bordered table-md">
                        <tr>
                          
                          <th>Nome</th>
                          <th>CRM</th>
                          <th>Especialidade</th>
                          <th>Ação</th>
                          <th>Agenda</th>
                        </tr>
                        {this.state.Especialist.map(Especialist =>
                        <tr>
                          <td>{Especialist.nome}</td>
                          <td>{Especialist.crm}</td>
                          <td>{Especialist.especialidade}</td>
                          <td><Link to={`/especialistShow/${Especialist.key}`}>Editar</Link></td>
                          <td><Link to={`../EditarHorarios/${Especialist.key}`} className="btn btn-secondary">Configurar</Link></td>
                        </tr>  
                         )}
                      </table>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="simple-footer">
                <p>Feito com <i className="fa fa-heart"></i> em Cuiabá-MT</p>
               </div>

              </div> 
              
    );
  }
}

export default  withRouter((Especialist));
