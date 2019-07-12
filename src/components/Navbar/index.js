import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import "../../assets/css/style.css";
import "../../assets/css/components.css";

//import './styles.css';

class Navbar extends Component {
    render() {
        return(
          <div >
        <div className="section">
          <div className="section-header">
            <h1>Seven</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><Link  to="/">Agendamentos</Link></div>
              <div className="breadcrumb-item"><Link to='/Especialist' >Especialistas</Link></div>
              <div className="breadcrumb-item"><Link  to="/Queries">Consultas</Link></div>
            </div>
          </div>
          </div>
          
        </div>
        );
    }
}

export default Navbar;

