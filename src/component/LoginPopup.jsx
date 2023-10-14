import React, { useState } from 'react';
import { MDBCol, MDBRow, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Button, Modal } from 'react-bootstrap';
import SignupPopup from './SignupPopup';

const LoginPopup = ({ show, handleClose }) => {
    const [showSignup, setShowSignup] = useState(false); // State to control the SignupPopup visibility

    const handleShowSignup = () => {
      setShowSignup(true);
    };
  
    const handleCloseSignup = () => {
      setShowSignup(false);
    };
  
  const handleLoginClose = () => {
    handleClose(); // Close the login popup
  };

  return (
    <Modal show={show} onHide={handleLoginClose} centered size="lg">
      <div className="modal-content">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBRow>
            <MDBCol col="12" md="6" lg="8" className="mb-4">
              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="formControlLg"
                type="email"
                size="lg"
                className="rounded-4"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="formControlLg"
                type="password"
                size="lg"
                className="rounded-4"
              />
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or Sign-in With</p>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center">
                <button className="btn btn-primary me-2" type="button">
                  <MDBIcon fab icon="facebook-f" className="me-2" />
                  Facebook
                </button>
                <button className="btn btn-primary me-2" type="button">
                  <MDBIcon fab icon="twitter" className="me-2" />
                  Twitter
                </button>
                <button className="btn btn-primary me-2" type="button">
                  <MDBIcon fab icon="linkedin-in" className="me-2" />
                  LinkedIn
                </button>
              </div>
              <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
                <a href="#!">Forgot password?</a>
              </div>
              <div className="text-center text-md-start mt-4 pt-2">
                <button className="btn btn-primary me-2" type="button">
                  <MDBIcon fab icon="login" className="me-2" />
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-2">
                  Don't have an account?{' '}
                 
                  <button type="button" className="btn btn-link btn-floating mx-1" onClick={() => setShowSignup(true) }>
                            <i className="fab fa-twitter">SignUp</i>
                          </button>
                </p>
              </div>
            </MDBCol>
            <MDBCol col="12" md="6" lg="4" className="mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </MDBCol>
          </MDBRow>
          {showSignup && <SignupPopup show={showSignup} handleClose={handleCloseSignup} />}
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default LoginPopup;
