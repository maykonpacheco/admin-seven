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
          setNome(especialista.nome);
          setCrm(especialista.crm);
          setEspecialidade(especialista.especialidade);
          setDomingo(especialista.domingo);
          setSegunda(especialista.segunda);
          setTerca(especialista.terca);
          setQuarta(especialista.quarta);
          setQuinta(especialista.quinta);
          setSexta(especialista.sexta);
          setSabado(especialista.sabado);
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
    
    const updateRef = firebase.firestore().collection('Especialist').doc(props.match.params.id);

    updateRef.set({
      nome,
      crm,
      especialidade,
      domingo,
      segunda,
      terca,
      quarta,
      quinta,
      sexta,
      sabado
    }).then((docRef) => {
      setNome('');
      setCrm('');
      setEspecialidade('');
      setDomingo('');
      setSegunda('');
      setTerca('');
      setQuarta('');
      setQuinta('');
      setSexta('');
      setSabado('');
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    props.history.push('/Especialist')
  }

  function domingoHandleOnClick(index) {
    setDomingo(
      Object.values(domingo).map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function segundaHandleOnClick(index) {
    setSegunda(
       Object.values(segunda).map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function tercaHandleOnClick(index) {
    setTerca(
       Object.values(terca).map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function quartaHandleOnClick(index) {
    setQuarta(
       Object.values(quarta).map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function quintaHandleOnClick(index) {
    setQuinta(
       Object.values(quinta).map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function sextaHandleOnClick(index) {
    setSexta(
       Object.values(sexta).map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  function sabadoHandleOnClick(index) {
    setSabado(
       Object.values(sabado).map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }
  return (
    <div className="CreateEspecialist">
      <Navbar />
      <div className="panel-heading bodyhour">
        <h3 className="panel-title">Editar Especialista</h3>
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

                  {Object.values(domingo).map((btn, i) => (
                    <li className="media">
                      <div className="media-body ml-1.5">
                        <MeuBotao
                          index={i}
                          value={btn.value}
                          hour={btn.hour}
                          handleClick={domingoHandleOnClick}
                        >
                          {btn.hours}
                        </MeuBotao>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-1.5">
                <ul className="list-unstyled list-unstyled-noborder mb-0">
                  <li className="media">
                    <div className="media-body ml-1.5">
                      <button className="btn btn-secondary bodyschedule">
                        SEGUNDA
                      </button>
                    </div>
                  </li>

                  {Object.values(segunda).map((btn, i) => (
                    <li className="media">
                      <div className="media-body ml-1.5">
                        <MeuBotao
                          index={i}
                          value={btn.value}
                          hour={btn.hour}
                          handleClick={segundaHandleOnClick}
                        >
                          {btn.hours}
                        </MeuBotao>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-1.5">
                <ul className="list-unstyled list-unstyled-noborder mb-0">
                  <li className="media">
                    <div className="media-body ml-1.5">
                      <button className="btn btn-secondary bodyschedule">
                        TERÇA
                      </button>
                    </div>
                  </li>

                  {Object.values(terca).map((btn, i) => (
                    <li className="media">
                      <div className="media-body ml-1.5">
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
              <div className="col-sm-1.5">
                <ul className="list-unstyled list-unstyled-noborder mb-0">
                  <li className="media">
                    <div className="media-body ml-1.5">
                      <button className="btn btn-secondary bodyschedule">
                        QUARTA
                      </button>
                    </div>
                  </li>

                  {Object.values(quarta).map((btn, i) => (
                    <li className="media">
                      <div className="media-body ml-1.5">
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
              <div className="col-sm-1.5">
                <ul className="list-unstyled list-unstyled-noborder mb-0">
                  <li className="media">
                    <div className="media-body ml-1.5">
                      <button className="btn btn-secondary bodyschedule">
                        QUINTA
                      </button>
                    </div>
                  </li>

                  {Object.values(quinta).map((btn, i) => (
                    <li className="media">
                      <div className="media-body ml-1.5">
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
              <div className="col-sm-1.5">
                <ul className="list-unstyled list-unstyled-noborder mb-0">
                  <li className="media">
                    <div className="media-body ml-1.5">
                      <button className="btn btn-secondary bodyschedule">
                        SEXTA
                      </button>
                    </div>
                  </li>

                  {Object.values(sexta).map((btn, i) => (
                    <li className="media">
                      <div className="media-body ml-1.5">
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
              <div className="col-sm-1.5">
                <ul className="list-unstyled list-unstyled-noborder mb-0">
                  <li className="media">
                    <div className="media-body ml-1.5">
                      <button className="btn btn-secondary bodyschedule">
                        SABADO
                      </button>
                    </div>
                  </li>

                  {Object.values(sabado).map((btn, i) => (
                    <li className="media">
                      <div className="media-body ml-1.5">
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
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-body">
              <form>
                <div className="form-group">
                  <label for="title">Nome:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={nome}
                    onChange={handleNomeChange}
                    placeholder="nome"
                  />
                </div>
                <div className="form-group">
                  <label for="description">CRM:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="CRM"
                    value={crm}
                    onChange={handleCrmChange}
                    placeholder="CRM"
                  />
                </div>
                <div className="form-group">
                  <label for="description">Especialidade:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="Especialidade"
                    value={especialidade}
                    onChange={handleEspecialidadeChange}
                    placeholder="Ex: Cardiologia, Psicologia, Dermatologia... "
                  />
                </div>
                <div />

                <button type="submit" className="btn btn-success">
                  Salvar
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
