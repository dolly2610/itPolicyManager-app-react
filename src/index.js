/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import {StripeProvider} from 'react-stripe-elements';
// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";

import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// pages
import LandingPage from "views/LandingPage.js";
import ProfilePage from "views/landingSubPage/ProfilePage.js";
import ContactUsPage from "views/landingSubPage/ContactUsPage.js";
import SurveyPage from "views/landingSubPage/SurveyPage.js";
import SignIn from "views/landingSubPage/SignIn.js";
import Modal from "views/landingSubPage/RegModal.js";
import Dashboard from "views/Dashboard.jsx";
import PaySubscription from 'views/commonPage/PaySubscription.js';
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route 
        path="/landing-page" 
        render={props => <LandingPage  {...props} />} />
      <Route
        path="/profile-page"
        render={props => <ProfilePage {...props} />}
      />
      <Route
        path="/signin-page"
        render={props => <SignIn {...props} />}
      />
      <Route
        path="/register-modal"
        render={props => <Modal {...props} />}
      />
      <Route
        path="/contactus-page"
        render={props => <ContactUsPage {...props} />}
      />
      <Route
        path="/survey-page"
        render={props => <SurveyPage {...props} />}
      />
      <Route
        path="/dashboard"
        render={props => <Dashboard {...props} />}
      />
      <Route
        path="/subscription-payment"
        render={props => (
        <StripeProvider apiKey="pk_test_8Y0fO0o3fsqMsbciyZKt1YTI" >
          <PaySubscription {...props} />
        </StripeProvider>
        )}
      />
      <Redirect to="/landing-page" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
