import React, { Component } from "react";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import Navbar from '../Navbar';
import firebase from "../../firebase";

class Agendamentos extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection("Agendamento");
    this.unsubscribe = null;
    this.state = {
      Agendamento: [],
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('Agendamento').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }
  
  onCollectionUpdate = querySnapshot => {
    const Agendamento = [];
    querySnapshot.forEach(doc => {
      const { email, nome } = doc.data();
      Agendamento.push({
        key: doc.id,
        doc, // DocumentSnapshot
        email,
        nome
      });
        // console.log(doc.id, " => ", doc.data());
    });
    this.setState({
      Agendamento
    });
    
    console.log(Agendamento);
  };

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }
  
  render() {
    return (
      <div>
       <Navbar />
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Agendamentos</h4>
                <div className="card-header-action">
                  <div className="btn-group">
                    <a href="#" className="btn btn-primary">
                      Hoje
                    </a>
                    <a href="#" className="btn btn-primary">
                      Semana
                    </a>
                    <a href="#" className="btn btn-primary">
                      Mês
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-md">
                    <tr>
                      <th>Horário</th>
                      <th>Paciênte</th>
                      <th>Convênio</th> 
                      <th>Médico</th>                     
                    </tr>
                    {this.state.Agendamento.map(i => (       
                    <tr>
                      <td>07:10</td>
                      <td>{i.email}</td>
                      <td>Particular</td>
                      <td>{i.nome}</td>
                    </tr>
                    ))} 
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

    );
  }
}

export default Agendamentos;
