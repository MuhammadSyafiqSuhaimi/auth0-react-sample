import React from "react";
import {
  Button,
  Col,
  Row
} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../assets/logo.svg";

const Hero = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return (
    <div className="text-center hero my-5">
      <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
      <h1 className="mb-4">React.js Sample Project</h1>

      <p className="lead">
        This is a sample application that demonstrates an authentication flow for
        an SPA, using <a href="https://reactjs.org">React.js</a>
      </p>
      {!isAuthenticated && (
        <Row>
          <Col
            sm={{
              offset: 1,
              size: 'auto'
            }}>
            <Button
              id="qsLoginBtn"
              color="primary"
              className="btn-margin"
              onClick={() => loginWithRedirect({ authorizationParams: { connection: 'email' } })}
            >
              Log in with email (OTP)
            </Button>
          </Col>
          <Col
            sm={{
              offset: 1,
              size: 'auto'
            }}>
            <Button
              id="qsLoginBtn"
              color="primary"
              className="btn-margin"
              onClick={() => loginWithRedirect({ authorizationParams: { connection: 'hirer-db' } })}
            >
              Log in with password
            </Button>
          </Col>
        </Row>
      )}
    </div>
  )
};

export default Hero;
