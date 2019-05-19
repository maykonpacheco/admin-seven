import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Queries from './components/Queries';
import Edit from './components/Queries/Edit';
import Create from './components/Queries/Create';
import Show from './components/Queries/Show'; 

import Especialist from './components/Especialist';
import especialistCreate from './components/Especialist/Create';
import especialistEdit from './components/Especialist/Edit';
import especialistShow from './components/Especialist/Show';

import Agendamentos from './components/Agendamentos';

import { BrowserRouter, Switch, Route } from "react-router-dom";



const Routes = () => (
<BrowserRouter>
      <Switch>
        <Route exact path='/' component={Agendamentos} />
        <Route exact path='/Queries' component={Queries} />
        <Route exact path='/edit/:id' component={Edit} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/show/:id' component={Show} />
        <Route exact path='/Especialist' component={Especialist} />
        <Route exact path='/especialistCreate' component={especialistCreate} />
        <Route exact path='/especialistEdit' component={especialistEdit} />
        <Route exact path='/especialistShow' component={especialistShow} />

      </Switch>
  </BrowserRouter>
);

export default Routes;