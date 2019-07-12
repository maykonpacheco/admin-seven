import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
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


import { BrowserRouter, Switch, Route } from "react-router-dom";

import firebase from './firebase';


export default function Routes () {
  
 
return  (


<BrowserRouter>
      <Switch>
      <Route exact path="/login" component={SignIn} />
        <Route exact path='/' component={Agendamentos} />
        <Route exact path='/editarhorarios/:id' component={EditarHorarios} />
        <Route exact path='/Queries' component={Queries} />
        <Route exact path='/edit/:id' component={Edit} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/show/:id' component={Show} />
        <Route exact path='/Especialist' component={Especialist} />
        <Route exact path='/CreateEspecialist' component={CreateEspecialist} />
        <Route exact path='/especialistEdit/:id' component={especialistEdit} />
        <Route exact path='/especialistShow/:id' component={especialistShow} />
      </Switch>
  </BrowserRouter>

  );

}