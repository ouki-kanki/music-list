import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './shared/Header';
import HomePage from './home/HomePageContainer';
import LoginPage from './account/LoginPage';
import ProfilePage from './account/ProfilePage';


export default function Template(props) {

    return (
        <Router>
            <div className="wrapper">
                <Header username="Entropy the god"/>
                <p>{props.progress}</p>
                <section className="page-content container-fluid">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/acount/login" component={LoginPage} />
                <Route path="/acount/profile/:id" component={ProfilePage} />
                </section>
            </div>
        </Router>

        );
}
