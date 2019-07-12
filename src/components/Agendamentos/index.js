import React, { Component } from "react";
import "../../assets/css/style.css";
import "../../assets/css/components.css";
import Navbar from '../Navbar';

class Agendamentos extends Component {
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
                      <th>#</th>
                      <th>Name</th>
                      <th>Created At</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Irwansyah Saputra</td>
                      <td>2017-01-09</td>
                      <td>
                        <div className="badge badge-success">Active</div>
                      </td>
                      <td>
                        <a href="#" className="btn btn-secondary">
                          Detail
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Rizal Fakhri</td>
                      <td>2017-01-11</td>
                      <td>
                        <div className="badge badge-success">Active</div>
                      </td>
                      <td>
                        <a href="#" className="btn btn-secondary">
                          Detail
                        </a>
                      </td>
                    </tr>
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
