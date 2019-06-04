import React, { Component } from "react";
import firebase from "../../../firebase";
import "../../../assets/css/style.css";
import "../../../assets/css/components.css";
import Navbar from "../../Navbar";
import ButtonData from "./ButtonData";

class EditarAgenda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',  
      dom: {
        diaTodo: '',
        sete: '',
        oito: '',
        nove: '',
        dez: '',
        onze: '',
        doze: '',
        treze: '',
        quatorze: '',
        quinze: '',
        dezesseis: '',
        dezessete: '',
        dezoito: '',
        dezenove: '',
        vinte: ''
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      dom: !prevState.dom
    }));
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('Agenda').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const Agenda = doc.data();
        this.setState({
          key: doc.id,
          dom: Agenda.dom
          
        });
      } else {
        console.log("No such document!");
      }
    });
  }


  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({Agenda:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { dom } = this.state;

    const updateRef = firebase.firestore().collection('Agenda').doc(this.state.key);
    updateRef.set({
        dom
    }).then((docRef) => {
      this.setState({
        key: '',
        dom: ''
      });
      this.props.history.push("/EditarAgenda/:id"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

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
                            value={this.state.dom}
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
                            value={this.state.diaToda}
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

export default EditarAgenda;
