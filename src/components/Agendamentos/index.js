import React, { Component } from "react";
import Navbar from "../Navbar";
import "../../assets/css/style.css";
import "../../assets/css/components.css";

class Agendamentos extends Component {
  render() {
    return (
      <div>
        <Navbar />

        
          <div class="col-md-12">
            <div class="card">
              <div class="card-header">
                <h4>Agendamentos</h4>
                <div class="card-header-action">
                  <div class="btn-group">
                    <a href="#" class="btn btn-primary">
                      Hoje
                    </a>
                    <a href="#" class="btn btn-primary">
                      Semana
                    </a>
                    <a href="#" class="btn btn-primary">
                      Mês
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-bordered table-md">
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
                        <div class="badge badge-success">Active</div>
                      </td>
                      <td>
                        <a href="#" class="btn btn-secondary">
                          Detail
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Rizal Fakhri</td>
                      <td>2017-01-11</td>
                      <td>
                        <div class="badge badge-success">Active</div>
                      </td>
                      <td>
                        <a href="#" class="btn btn-secondary">
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
