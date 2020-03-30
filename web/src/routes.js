import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Logon, 
         Register,
         Profile,
         NewIncident
        } from './pages'

export default () => (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Logon}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
                <Route path="/register" component={Register}/>
            </Switch>
        </BrowserRouter>
)    
