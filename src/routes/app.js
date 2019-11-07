import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Login from '../containers/Login';
import Register from '../containers/Register';
import PlaceDetail from '../containers/PlaceDetail';


const App = () => (

    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/placeDetail/:id' component={PlaceDetail} />
                <Route component={NotFound}/>
            </Switch>
        </Layout>
    </BrowserRouter>

);

export default App; 