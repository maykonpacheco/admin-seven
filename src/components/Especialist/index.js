import React, { useState, useEffect } from "react";
import firebase from '../../firebase';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';

function Especialist(id) {
  const [key, setKey] = useState("");
  const [Especialistasx, setEspecialistasx] = useState([]);
  const [Especialistas, setEspecialistas] = useState([]);

  
  useEffect(
    () => {
      const ref = firebase.firestore().collection('Especialist');
      const Especialistasx = [];
      ref.get().then(querySnapshot => {
        if (querySnapshot.empty) {
          console.log('No matching documents.');
          return;
        }
        
        querySnapshot.forEach(doc => {
          const { nome, crm, especialidade } = doc.data();
          Especialistasx.push({
              key: doc.id,
              doc, // DocumentSnapshot
              nome,
              crm,
              especialidade
            });
        });
        setEspecialistas(Especialistasx);
      }).catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    }, [id]);


return (
  
  <div>
    <Navbar />
    <div className="col-md-12">
      <div className="card">
        <div className="card-header">
          <h4>Lista de Especialistas</h4>
          <div className="card-header-action">
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
                <th>Agenda</th>
              </tr>

              {!!Especialistas && Especialistas.map(el => ( 
                <tr>
                  <td>{el.nome}</td>
                  <td>{el.crm}</td>
                  <td>{el.especialidade}</td>
                  <td><Link to={`../EditarHorarios/${el.key}`}>Configurar</Link></td>
                </tr>  
              ))}
              {/* // Para debugar e ver os dados que chega: */}
              {/* {!!Especialistas && Especialistas.map(el => { 
                console.log({...el})
              })} */}
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
