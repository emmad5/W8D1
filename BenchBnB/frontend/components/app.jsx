import React from 'react';
import GreetingContainer from './greeting_container';
import {Route } from 'react-router-dom';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
    <div>
        <header className="head">
        <h1>Bench BnB</h1>
        <div className="greeting">
        <GreetingContainer/>
        </div>
        </header>

        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;