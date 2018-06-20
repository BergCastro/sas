import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import Prova from '../prova/prova'
import TipoTeste from '../tipoTeste/tipoTeste'
import TesteFisico from '../testeFisico/testeFisico'
import Ope from '../ope/ope'
import TipoOpe from '../tipoOpe/tipoOpe'


export default props => (
    <div className='content-wrapper'> 
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/billingCycles' component={BillingCycle} />
            <Route path='/provas' component={Prova} />
            <Route path='/testesFisicos' component={TesteFisico} />
            <Route path='/opes' component={Ope} />
            <Route path='/tiposOpes' component={TipoOpe} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)