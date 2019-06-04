import React, { Component } from "react";
import firebase from "../../firebase";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import Navbar from "../Navbar";
import ButtonData from "./ButtonData";

class Agenda extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection("Agenda");
    this.state = {
      dom: {
        diaTodo: false,
        sete: false,
        oito: false,
        nove: false,
        dez: false,
        onze: false,
        doze: false,
        treze: false,
        quatorze: false,
        quinze: false,
        dezesseis: false,
        dezessete: false,
        dezoito: false,
        dezenove: false,
        vinte: false
      }
    };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState(prevState => ({
      ButtonData: !prevState.ButtonData
    }));
    console.log(this.state.ButtonData)
  }


  onChange = e => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmit = e => {
    e.preventDefault();

    const { dom } = this.state;

    this.ref
      .add({
        dom
      })
      .then(docRef => {
        this.setState({
          dom: ""
        });
        this.props.history.push("/Agenda");
      })
      .catch(error => {
        console.error("Error adding document: ", error);
      });
  };

  render() {
    const { dom, sete, diaTodo } = this.state;
    let checkbox = "btn btn-success bodyschedule" < "btn btn-outline-primary bodyschedule" ? true : false; 

    return (
      <div>
        <Navbar />
        <div class="col-md-12">
          <div class="card cardcardschedule">
            <div class="card-header">
              <h4>Tempo médio de consulta</h4>
              <div class="card-header-action">
                <div class="btn-group">
                  <a href="#" class="btn btn-primary">
                    15 min
                  </a>
                  <a href="#" class="btn btn-primary">
                    30 min
                  </a>
                  <a href="#" class="btn btn-primary">
                    1 hora
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={this.onSubmit}>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-1.5">
                    <ul class="list-unstyled list-unstyled-noborder mb-0">
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData
                            name="dom"
                            class="btn btn-secondary bodyschedule"
                            value={dom}
                            onChange={this.onChange}
                            text="DOMINGO"
                            onClick={this.handleClick}
                          />
                        </div>
                      
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData
                            name="diatodo"
                            onClick={this.handleClick}
                            text="Dia todo"
                            value={diaTodo}
                            onChange={this.onChange}
                          />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData
                            name="sete"
                            type="checkbox"
                            text="07:00"
                            value={sete}
                            onChange={this.onChange}
                          />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="08:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="09:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="10:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="11:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="12:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="13:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="14:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="15:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="16:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="17:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="18:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="19:00" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-1.5">
                    <ul class="list-unstyled list-unstyled-noborder mb-0">
                      <li class="media">
                        <div class="media-body ml-3">
                          <button class="btn btn-secondary bodyschedule">
                            SEGUNDA
                          </button>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="Dia Todo" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="07:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="08:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="09:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="10:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="11:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="12:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="13:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="14:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="15:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="16:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="17:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="18:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="19:00" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-1.5">
                    <ul class="list-unstyled list-unstyled-noborder mb-0">
                      <li class="media">
                        <div class="media-body ml-3">
                          <button class="btn btn-secondary bodyschedule">
                            TERÇA
                          </button>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="Dia Todo" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="07:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="08:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="09:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="10:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="11:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="12:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="13:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="14:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="15:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="16:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="17:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="18:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="19:00" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-1.5">
                    <ul class="list-unstyled list-unstyled-noborder mb-0">
                      <li class="media">
                        <div class="media-body ml-3">
                          <button class="btn btn-secondary bodyschedule">
                            QUARTA
                          </button>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="Dia Todo" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="07:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="08:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="09:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="10:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="11:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="12:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="13:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="14:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="15:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="16:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="17:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="18:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="19:00" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-1.5">
                    <ul class="list-unstyled list-unstyled-noborder mb-0">
                      <li class="media">
                        <div class="media-body ml-3">
                          <button class="btn btn-secondary bodyschedule">
                            QUINTA
                          </button>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="Dia Todo" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="07:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="08:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="09:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="10:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="11:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="12:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="13:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="14:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="15:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="16:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="17:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="18:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="19:00" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-1.5">
                    <ul class="list-unstyled list-unstyled-noborder mb-0">
                      <li class="media">
                        <div class="media-body ml-3">
                          <button class="btn btn-secondary bodyschedule">
                            SEXTA
                          </button>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="Dia Todo" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="07:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="08:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="09:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="10:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="11:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="12:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="13:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="14:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="15:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="16:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="17:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="18:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="19:00" />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-1.5">
                    <ul class="list-unstyled list-unstyled-noborder mb-0">
                      <li class="media">
                        <div class="media-body ml-3">
                          <button class="btn btn-secondary bodyschedule">
                            SABADO
                          </button>
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="Dia Todo" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="07:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="08:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="09:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="10:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="11:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="12:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="13:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="14:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="15:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="16:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="17:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="18:00" />
                        </div>
                      </li>
                      <li class="media">
                        <div class="media-body ml-3">
                          <ButtonData text="19:00" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <button type="submit" class="btn btn-success">Adicionar</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Agenda;
