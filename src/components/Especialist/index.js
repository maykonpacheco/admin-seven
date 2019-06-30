import React, { useState, useEffect } from "react";
import firebase from '../../firebase';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';

function Especialist(props) {
  const [key, setKey] = useState("");
  const [Especialista, setEspecialista] = useState([]);
  const [Especialist, setEspecialist] = useState([]);
  

  
  useEffect(
    () => {
      const ref = firebase.firestore().collection('Especialist');
      ref.get().then(function(querySnapshot) {
        const Especialist = [];
          querySnapshot.forEach(function(doc) {
            const { nome, crm, especialidade } = doc.data();
            Especialist.push({
              key: doc.id,
              nome, // DocumentSnapshot
              crm,
              especialidade
            });
            setEspecialista({
              Especialista: doc.data()
            })
           // console.log(doc.id, " => ", doc.data());
          });
                   
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    }, [props]);

    console.log('Esse aqui =>=>', Especialista);
    
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
              <tr >   
                <th>Nome</th>
                <th>CRM</th>
                <th>Especialidade</th>
                <th>Ação</th>
                <th>Agenda</th>
              </tr>
              {Especialist.map(Especialista =>
              <tr >
                <td>{Especialista.nome}</td>
                <td>{Especialista.crm}</td>
                <td>{Especialista.especialidade}</td>
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
      
  )

}
export default  withRouter((Especialist));
