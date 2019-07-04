import React, { useState, useEffect } from "react";
import firebase from '../../firebase';
import Navbar from '../Navbar';
import { Link, withRouter } from 'react-router-dom';

function Especialist(props) {
  const [key, setKey] = useState("");
  const [Especialista, setEspecialista] = useState([]);
  const [isLoading, SetIsLoading] =  useState(false)
  const [Especialistas, setEspecialistas] = useState([]);

  
  useEffect(
    () => {
      const ref = firebase.firestore().collection('Especialist');
      ref.get().then(function(querySnapshot) {
        const Especialistas = [];
          querySnapshot.forEach(function(doc) {
            const { nome, crm, especialidade } = doc.data();
            Especialistas.push({
              key: doc.id,
              doc, // DocumentSnapshot
              nome,
              crm,
              especialidade
            });
            setKey({
              key: doc.id
            })
            setEspecialista({
              Especialista: doc.data() 
            })
            SetIsLoading({
              isLoading: false
            })
           // console.log(doc.id, " => ", doc.data());
            console.log("Aqui Agora", Especialistas);
          });
                   
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    }, [props]);


   // console.log("DIscord => ", Especialista)
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
              {Object.values(Especialista).map(i  => ( 
             
              <tr >
                <td>{i.nome}</td>
                <td>{i.crm}</td>
                <td>{i.especialidade}</td>
                <td><Link to={`../EditarHorarios/${key.key}`}>Configurar</Link></td>
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
