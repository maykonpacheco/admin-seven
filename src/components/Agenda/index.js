import React, { Component } from "react";
import firebase from "../../firebase";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import Navbar from "../Navbar";
import ButtonData from "./ButtonData";

class Agenda extends Component {
  

  render() {
   
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
            <div class="card-body">
              <div class="row">
                <div class="col-sm-1.5">
                  <ul class="list-unstyled list-unstyled-noborder mb-0">
                    <li class="media">
                      <div class="media-body ml-3">
                        <button class="btn btn-secondary bodyschedule">
                          DOMINGO
                        </button>
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='Dia Todo'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='07:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='08:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='09:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='10:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='11:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='12:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='13:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='14:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='15:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='16:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='17:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='18:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='19:00'
                        />
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
                      <ButtonData
                        text='Dia Todo'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='07:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='08:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='09:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='10:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='11:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='12:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='13:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='14:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='15:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='16:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='17:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='18:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='19:00'
                        />
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
                      <ButtonData
                        text='Dia Todo'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='07:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='08:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='09:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='10:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='11:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='12:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='13:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='14:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='15:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='16:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='17:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='18:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='19:00'
                        />
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
                      <ButtonData
                        text='Dia Todo'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='07:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='08:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='09:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='10:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='11:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='12:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='13:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='14:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='15:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='16:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='17:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='18:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='19:00'
                        />
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
                      <ButtonData
                        text='Dia Todo'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='07:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='08:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='09:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='10:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='11:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='12:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='13:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='14:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='15:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='16:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='17:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='18:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='19:00'
                        />
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
                      <ButtonData
                        text='Dia Todo'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='07:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='08:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='09:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='10:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='11:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='12:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='13:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='14:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='15:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='16:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='17:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='18:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='19:00'
                        />
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
                      <ButtonData
                        text='Dia Todo'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='07:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='08:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='09:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='10:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='11:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='12:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='13:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='14:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='15:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='16:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='17:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='18:00'
                        />
                      </div>
                    </li>
                    <li class="media">
                      <div class="media-body ml-3">
                      <ButtonData
                        text='19:00'
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Agenda;
