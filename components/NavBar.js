import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Container } from "react-bootstrap";

const NavBar = () => {
    return (
        <Router>
        <Container>
            <Switch>
            <Route path="/" exact component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            </Switch>
        </Container>
        </Router>
    );
    };

export default NavBar;