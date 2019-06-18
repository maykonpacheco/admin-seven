import React, { useState } from "react";
import ReactDOM from "react-dom";
import firebase from "../../firebase";
import { Link } from "react-router-dom";
//import Navbar from "../Navbar";
import SelecaoEspecialista from "./SelecaoEspecialista";
import AdicionarAgenda from "../Especialist/Agenda//AdicionarAgenda";
import ButtonData from "../Especialist/Agenda/ButtonData";



const MeuBotao = ({ index, hour, value, handleClick }) => (
  <button
    onClick={() => handleClick(index)}
    style={{
      background: value ? "lime" : "red"
    }}
  >
    {hour}
  </button>
);


function CreateEspecialist () {
  const [buttons, setButtons] = useState([
      { disponibilidade: [
        {
          day:'Domingo', 
          hours: [
            {hour: '07:00', value: false},
            {hour: '08:00', value: false},
            {hour: '09:00', value: false},
            {hour: '10:00', value: false},
            {hour: '11:00', value: false},
            {hour: '12:00', value: false},
            {hour: '13:00', value: false},
            {hour: '14:00', value: false},
            {hour: '15:00', value: false},
            {hour: '16:00', value: false},
            {hour: '17:00', value: false},
            {hour: '18:00', value: false},
          ]
        }
      ]
    }
  ]);

  
  function handleOnClick(index) {
    setButtons(
      buttons.map((b, i) => (i === index ? { ...b, value: !b.value } : b))
    );
  }

  
    return (
      <div className='CreateEspecialist' >
              
            {buttons.map((btn, i,) => (
               
      
            <div class="card-body">
            <div class="row">  
              <div class="col-sm-1.5">
                <ul class="list-unstyled list-unstyled-noborder mb-0">
                  <li class="media">
                    <div class="media-body ml-1.5">
                      <button class="btn btn-secondary bodyschedule">
                        {btn.day}
                      </button>
                    </div>
                  </li>
              
                  
                  <li className="media">
                    <div class="media-body ml-1.5">
                      <MeuBotao
                       index={i}
                       value={btn.value}
                       hour={btn.hour}
                       handleClick={handleOnClick}
                      >
                      {btn.hour}
                      </MeuBotao>

                    </div>
                  </li>
           
                </ul>
              </div>
              </div>
              </div>
                
                ))}
            </div>
    );

}


export default CreateEspecialist;
