import React, { useState, useEffect } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
//import SelecaoEspecialista from "./SelecaoEspecialista";
import "./styles.css";

//Componente Botão
const MeuBotao = ({ index, hour, value, handleClick }) => (
  <button
    className={
      value
        ? "btn btn-success bodyschedule"
        : "btn btn-outline-primary bodyschedule"
    }
    onClick={() => handleClick(index)}
  >
    {hour}
  </button>
);

// Criação de Especialista - Estados
function EditarHorarios(props) {
  const [key, setKey] = useState("");
  const [nome, setNome] = useState("");
  const [crm, setCrm] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [domingo, setDomingo] = useState([
    { hour: "07:00", value: false },
    { hour: "08:00", value: false },
    { hour: "09:00", value: false },
    { hour: "10:00", value: false },
    { hour: "11:00", value: false },
    { hour: "12:00", value: false },
    { hour: "13:00", value: false },
    { hour: "14:00", value: false },
    { hour: "15:00", value: false },
    { hour: "16:00", value: false },
    { hour: "17:00", value: false },
    { hour: "18:00", value: false },
    { hour: "19:00", value: false },
    { hour: "20:00", value: false }
  ]);
  const [segunda, setSegunda] = useState([
    { hour: "07:00", value: false },
    { hour: "08:00", value: false },
    { hour: "09:00", value: false },
    { hour: "10:00", value: false },
    { hour: "11:00", value: false },
    { hour: "12:00", value: false },
    { hour: "13:00", value: false },
    { hour: "14:00", value: false },
    { hour: "15:00", value: false },
    { hour: "16:00", value: false },
    { hour: "17:00", value: false },
    { hour: "18:00", value: false },
    { hour: "19:00", value: false },
    { hour: "20:00", value: false }
  ]);
  const [terca, setTerca] = useState([
    { hour: "07:00", value: false },
    { hour: "08:00", value: false },
    { hour: "09:00", value: false },
    { hour: "10:00", value: false },
    { hour: "11:00", value: false },
    { hour: "12:00", value: false },
    { hour: "13:00", value: false },
    { hour: "14:00", value: false },
    { hour: "15:00", value: false },
    { hour: "16:00", value: false },
    { hour: "17:00", value: false },
    { hour: "18:00", value: false },
    { hour: "19:00", value: false },
    { hour: "20:00", value: false }
  ]);
  const [quarta, setQuarta] = useState([
    { hour: "07:00", value: false },
    { hour: "08:00", value: false },
    { hour: "09:00", value: false },
    { hour: "10:00", value: false },
    { hour: "11:00", value: false },
    { hour: "12:00", value: false },
    { hour: "13:00", value: false },
    { hour: "14:00", value: false },
    { hour: "15:00", value: false },
    { hour: "16:00", value: false },
    { hour: "17:00", value: false },
    { hour: "18:00", value: false },
    { hour: "19:00", value: false },
    { hour: "20:00", value: false }
  ]);
  const [quinta, setQuinta] = useState([
    { hour: "07:00", value: false },
    { hour: "08:00", value: false },
    { hour: "09:00", value: false },
    { hour: "10:00", value: false },
    { hour: "11:00", value: false },
    { hour: "12:00", value: false },
    { hour: "13:00", value: false },
    { hour: "14:00", value: false },
    { hour: "15:00", value: false },
    { hour: "16:00", value: false },
    { hour: "17:00", value: false },
    { hour: "18:00", value: false },
    { hour: "19:00", value: false },
    { hour: "20:00", value: false }
  ]);
  const [sexta, setSexta] = useState([
    { hour: "07:00", value: false },
    { hour: "08:00", value: false },
    { hour: "09:00", value: false },
    { hour: "10:00", value: false },
    { hour: "11:00", value: false },
    { hour: "12:00", value: false },
    { hour: "13:00", value: false },
    { hour: "14:00", value: false },
    { hour: "15:00", value: false },
    { hour: "16:00", value: false },
    { hour: "17:00", value: false },
    { hour: "18:00", value: false },
    { hour: "19:00", value: false },
    { hour: "20:00", value: false }
  ]);
  const [sabado, setSabado] = useState([
    { hour: "07:00", value: false },
    { hour: "08:00", value: false },
    { hour: "09:00", value: false },
    { hour: "10:00", value: false },
    { hour: "11:00", value: false },
    { hour: "12:00", value: false },
    { hour: "13:00", value: false },
    { hour: "14:00", value: false },
    { hour: "15:00", value: false },
    { hour: "16:00", value: false },
    { hour: "17:00", value: false },
    { hour: "18:00", value: false },
    { hour: "19:00", value: false },
    { hour: "20:00", value: false }
  ]);
  
  useEffect(
    () => {

      const ref = firebase.firestore().collection('Especialist').doc(props.match.params.id);
      ref.get().then((doc) => {
        if (doc.exists) {
          const especialista = doc.data();
          setNome({
            nome: especialista.nome
         });
         setCrm({
           crm: especialista.crm
        });
        setEspecialidade({
         especialidade: especialista.especialidade
      });
          console.log(doc.id, " => ", doc.data());
        } else {
          console.log("No such document!");
        }
      });
  }, [props]);



  // Funções para subir para o Firebase
  const handleNomeChange = e => setNome(e.target.value);
  const handleCrmChange = e => setCrm(e.target.value);
  const handleEspecialidadeChange = e => setEspecialidade(e.target.value);
 
 


  function onSubmit (e) {
    e.preventDefault();
    console.log("testando envio ->")

     
  const updateRef = firebase.firestore().collection('Especialist').doc(key);
    
    updateRef.set({
      nome,
      crm,
      especialidade
    }).then((docRef) => {
      setNome({
        nome: ''
     });
     setCrm({
       crm:''
    });
    setEspecialidade({
     especialidade: ''
  });
  setKey({
    Key: ''
 });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  function domingoHandleOnClick(index) {
    setDomingo(
      domingo.map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function segundaHandleOnClick(index) {
    setSegunda(
      segunda.map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function tercaHandleOnClick(index) {
    setTerca(
      terca.map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function quartaHandleOnClick(index) {
    setQuarta(
      quarta.map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function quintaHandleOnClick(index) {
    setQuinta(
      quinta.map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function sextaHandleOnClick(index) {
    setSexta(
      sexta.map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function sabadoHandleOnClick(index) {
    setSabado(
      sabado.map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  return (
    <div className="CreateEspecialist">
      <Navbar />
      <div class="panel-heading bodyhour">
        <h3 class="panel-title">Editar Especialista</h3>
      </div>
      <div className="bodyhour">
        <div className="col-md-14">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-1.5">
                <ul className="list-unstyled list-unstyled-noborder mb-0">
                  <li className="media">
                    <div className="media-body ml-1.5">
                      <button className="btn btn-secondary bodyschedule">
                        DOMINGO
                      </button>
                    </div>
                  </li>

                  {domingo.map((btn, i) => (
                    <li className="media">
                      <div class="media-body ml-1.5">
                        <MeuBotao
                          index={i}
                          value={btn.value}
                          hour={btn.hour}
                          handleClick={domingoHandleOnClick}
                        >
                          {btn.hour}
                        </MeuBotao>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="col-sm-1.5">
                <ul class="list-unstyled list-unstyled-noborder mb-0">
                  <li class="media">
                    <div class="media-body ml-1.5">
                      <button class="btn btn-secondary bodyschedule">
                        SEGUNDA
                      </button>
                    </div>
                  </li>

                  {segunda.map((btn, i) => (
                    <li className="media">
                      <div class="media-body ml-1.5">
                        <MeuBotao
                          index={i}
                          value={btn.value}
                          hour={btn.hour}
                          handleClick={segundaHandleOnClick}
                        >
                          {btn.hour}
                        </MeuBotao>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="col-sm-1.5">
                <ul class="list-unstyled list-unstyled-noborder mb-0">
                  <li class="media">
                    <div class="media-body ml-1.5">
                      <button class="btn btn-secondary bodyschedule">
                        TERÇA
                      </button>
                    </div>
                  </li>

                  {terca.map((btn, i) => (
                    <li className="media">
                      <div class="media-body ml-1.5">
                        <MeuBotao
                          index={i}
                          value={btn.value}
                          hour={btn.hour}
                          handleClick={tercaHandleOnClick}
                        >
                          {btn.hour}
                        </MeuBotao>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="col-sm-1.5">
                <ul class="list-unstyled list-unstyled-noborder mb-0">
                  <li class="media">
                    <div class="media-body ml-1.5">
                      <button class="btn btn-secondary bodyschedule">
                        QUARTA
                      </button>
                    </div>
                  </li>

                  {quarta.map((btn, i) => (
                    <li className="media">
                      <div class="media-body ml-1.5">
                        <MeuBotao
                          index={i}
                          value={btn.value}
                          hour={btn.hour}
                          handleClick={quartaHandleOnClick}
                        >
                          {btn.hour}
                        </MeuBotao>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="col-sm-1.5">
                <ul class="list-unstyled list-unstyled-noborder mb-0">
                  <li class="media">
                    <div class="media-body ml-1.5">
                      <button class="btn btn-secondary bodyschedule">
                        QUINTA
                      </button>
                    </div>
                  </li>

                  {quinta.map((btn, i) => (
                    <li className="media">
                      <div class="media-body ml-1.5">
                        <MeuBotao
                          index={i}
                          value={btn.value}
                          hour={btn.hour}
                          handleClick={quintaHandleOnClick}
                        >
                          {btn.hour}
                        </MeuBotao>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="col-sm-1.5">
                <ul class="list-unstyled list-unstyled-noborder mb-0">
                  <li class="media">
                    <div class="media-body ml-1.5">
                      <button class="btn btn-secondary bodyschedule">
                        SEXTA
                      </button>
                    </div>
                  </li>

                  {sexta.map((btn, i) => (
                    <li className="media">
                      <div class="media-body ml-1.5">
                        <MeuBotao
                          index={i}
                          value={btn.value}
                          hour={btn.hour}
                          handleClick={sextaHandleOnClick}
                        >
                          {btn.hour}
                        </MeuBotao>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div class="col-sm-1.5">
                <ul class="list-unstyled list-unstyled-noborder mb-0">
                  <li class="media">
                    <div class="media-body ml-1.5">
                      <button class="btn btn-secondary bodyschedule">
                        SABADO
                      </button>
                    </div>
                  </li>

                  {sabado.map((btn, i) => (
                    <li className="media">
                      <div class="media-body ml-1.5">
                        <MeuBotao
                          index={i}
                          value={btn.value}
                          hour={btn.hour}
                          handleClick={sabadoHandleOnClick}
                        >
                          {btn.hour}
                        </MeuBotao>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div onSubmit={onSubmit}>
        <div class="container">
          <div class="panel panel-default">
            <div class="panel-body">
              <form>
                <div class="form-group">
                  <label for="title">Nome:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="name"
                    value={nome.nome}
                    onChange={handleNomeChange}
                    placeholder="nome"
                  />
                </div>
                <div class="form-group">
                  <label for="description">CRM:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="CRM"
                    value={crm.crm}
                    onChange={handleCrmChange}
                    placeholder="CRM"
                  />
                </div>
                <div class="form-group">
                  <label for="description">Especialidade:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="Especialidade"
                    value={especialidade.especialidade}
                    onChange={handleEspecialidadeChange}
                    placeholder="Ex: Cardiologia, Psicologia, Dermatologia... "
                  />
                </div>
                <div />

                <button type="submit" class="btn btn-success">
                  Adicionar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="simple-footer">
        <p>
          Feito com <i className="fa fa-heart" /> em Cuiabá-MT
        </p>
      </div>
    </div>
  );
}

export default EditarHorarios;
