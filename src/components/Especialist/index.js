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
      ref.get().then(function(querySnapshot) {
        const Especialistasx = [];
          querySnapshot.forEach(function(doc) {
            const { nome, crm, especialidade } = doc.data();
            Especialistasx.push({
              key: doc.id,
              doc, // DocumentSnapshot
              nome,
              crm,
              especialidade
            });    
            setEspecialistasx({
              Especialistasx
            })
            setEspecialistas({
              Especialistas: doc.data()
            })
           // console.log(doc.id, " => ", doc.data());
      console.log("Aqui Agora 1 ", Especialistasx);
          });             
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    }, [id]);


// console.log("Aqui Agora => ", Especialistas)
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
                <th>Agenda</th>
              </tr>

              {Object.values(Especialistasx).map(Especialistas  => ( 
              
              <tr >
                <td>{Especialistas.nome}</td>
                <td>{Especialistas.crm}</td>
                <td>{Especialistas.especialidade}</td>
                <td><Link to={`../EditarHorarios/${Especialistas.key}`}>Configurar</Link></td>
              </tr>  
              ))}
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
