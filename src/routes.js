import React from "react";
import Queries from './components/Queries';
import Edit from './components/Queries/Edit';
import Create from './components/Queries/Create';
import Show from './components/Queries/Show'; 

import Especialist from './components/Especialist';
import CreateEspecialist from './components/Especialist/Create';
import especialistEdit from './components/Especialist/Edit';
import especialistShow from './components/Especialist/Show';

import EditarHorarios from './components/Especialist/EditarHorarios';

import Agendamentos from './components/Agendamentos';

import SignIn from "./components/Login";
import SignUp from "./components/SignUp";

import { AuthProvider } from "./components/Login/Auth";
import PrivateRoute from "./privateRouter";
import { BrowserRouter as Router, Route } from "react-router-dom";


const Routes = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path='/' component={Agendamentos} />
          <PrivateRoute exact path='/editarhorarios/:id' component={EditarHorarios} />
          <PrivateRoute exact path='/Queries' component={Queries} />
          <PrivateRoute exact path='/edit/:id' component={Edit} />
          <PrivateRoute exact path='/create' component={Create} />
          <PrivateRoute exact path='/show/:id' component={Show} />
          <PrivateRoute exact path='/Especialist' component={Especialist} />
          <PrivateRoute exact path='/CreateEspecialist' component={CreateEspecialist} />
          <PrivateRoute exact path='/especialistEdit/:id' component={especialistEdit} />
          <PrivateRoute exact path='/especialistShow/:id' component={especialistShow} />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default Routes;

