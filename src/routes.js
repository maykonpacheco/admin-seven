import React from 'react';
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

import AdicionarAgenda from './components/Especialist/Agenda/AdicionarAgenda';

import Agendamentos from './components/Agendamentos';

import EditarAgenda from './components/Especialist/Agenda/EditarAgenda';

import { BrowserRouter, Switch, Route } from "react-router-dom";



const Routes = () => (
<BrowserRouter>
      <Switch>
        <Route exact path='/EditarAgenda/:id' component={EditarAgenda} />
        <Route exact path='/' component={Agendamentos} />
        <Route exact path='/AdicionarAgenda/:id' component={AdicionarAgenda} />
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

export default Routes;