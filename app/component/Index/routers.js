import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Content from './Content'
import Details from './Deatails'
import Blank from './Content/Blank'

export default () => {
    return <Switch>
        <Route exact path='/' component={Blank} />
        <Route path='/Search/:criteria' component={Content} />
        <Route path='/film/:id' component={Details} />
    </Switch>
}