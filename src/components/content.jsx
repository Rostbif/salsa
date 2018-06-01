import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/home';
import Ofir from 'components/ofir';

export default class Content extends Component {

    render() {
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path='/Ofir' component={Ofir}/>
            </Switch>
        )
    }

}
