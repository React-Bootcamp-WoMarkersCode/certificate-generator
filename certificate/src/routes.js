import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import  Home from './pages/home/index'
import  ConfirmCertificateToSend  from './pages/confirm-certificate-to-send/index'
import  CreateEevent  from './pages/create-event/index'
import  EditEvent  from './pages/edit-event/index'
import  EditProfile  from './pages/edit-profile/index'
import  ListOfEvents  from './pages/list-of-events/index'
import  PageConfirmation  from './pages/page-confirmation/index'
import  PageNotFound  from './pages/page-not-found/index'
import  Profile  from './pages/profile/index'
import  SignIn  from './pages/signIn/index'
import  SignUp  from './pages/signUp/index'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/confirm-certificate-to-send" component={ConfirmCertificateToSend} />
      <Route exact path="/create-event" component={CreateEevent} />
      <Route exact path="/edit-event" component={EditEvent} />
      <Route exact path="/edit-profile" component={EditProfile} />
      <Route exact path="/list-of-events" component={ListOfEvents} />
      <Route exact path="/page-confirmation" component={PageConfirmation} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />

      <Route path="*" component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);


export default Routes;
