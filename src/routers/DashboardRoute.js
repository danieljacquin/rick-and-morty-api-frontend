import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Characters from '../pages/characters/Characters';
import About from '../pages/about/About';
import Footer from '../components/footer/Footer';
import SearchCharacter from '../pages/searchCharacter/SearchCharacter';

const DashboardRoute = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Switch>
                    <Route path="/characters" component={Characters}></Route>
                    <Route path="/search" component={SearchCharacter}></Route>
                    <Route path="/about" component={About}></Route>

                    <Redirect to="/characters" />
                </Switch>
                <Footer/>
            </Router>
        </>
    )
}

export default DashboardRoute
