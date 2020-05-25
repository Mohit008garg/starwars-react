import React, { Suspense } from 'react';
import { bool } from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import WelcomeComponent from '../components/welcome/welcome';
import NotFoundPage from '../components/notFound/notFound';
import NotAuthorisedPage from '../components/notAuthorized/notAuthorized';
import Loader from '../components/Loader/loader';
import StarWars from '../components/starWars/starWarsList';
import PrivateRoute from './privateRoute';
import signUp from '../components/signUpOrSignIn/signUp';
import signIn from '../components/signUpOrSignIn/signIn';
import LogOut from '../components/logout/logOut';

const Routes = ({ isAuthorised }) => {
    return (
        <Suspense fallback={<Loader />}>
            <Switch>
                <PrivateRoute exact path="/" component={WelcomeComponent} isAuthorised={true} />
                <PrivateRoute exact path="/signup" component={signUp} isAuthorised={true}/>
                <PrivateRoute exact path="/signin" component={signIn} isAuthorised={true}/>
                <PrivateRoute exact path="/starwars" component={StarWars} isAuthorised={isAuthorised}/>
                <PrivateRoute exact path="/logout" component={LogOut} isAuthorised={true}/>
                <Route exact path="/notFound" component={NotFoundPage} />
                <Route exact path="/notAuthorised" component={NotAuthorisedPage} />
                {!isAuthorised ? <Redirect to="/notAuthorised" /> : <Redirect to="/" />}
            </Switch>
        </Suspense>
    );
}

Routes.propTypes = {
    isAuthorised: bool.isRequired
}

export default Routes;