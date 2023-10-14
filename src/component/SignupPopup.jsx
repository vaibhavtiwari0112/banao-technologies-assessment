import React from 'react';
import { Modal } from 'react-bootstrap';

const SignupPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <div className="modal-content" style={{ maxWidth: "1200px" }}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className="text-center text-lg-start">
            <style>
              {`.cascading-right {
                margin-right: -15px;
              }

              @media (max-width: 991.98px) {
                .cascading-right {
                  margin-right: 0;
                }
              }
              
              /* Custom Styles */
              .card.card-signup {
                background: none;
                border: none;
              }
              
              .form-outline {
                border: none;
              }
              
              .form-control-lg {
                
                border-bottom: 1px solid #ccc;
                border-radius: 0;
                box-shadow: none;
              }
              .form{
                width:100%
              }
              .btn-signup {
                background-color: #007bff;
                border-color: #007bff;
                border-radius: 30px;
              }`}
            </style>

            <div className="container py-4">
              <div className="row g-0 align-items-center">
                <div className="col-lg-6 mb-5 mb-lg-0">
                  <div className="card card-signup cascading-right" style={{
                    background: "hsla(0, 0%, 100%, 0.9)",
                    backdropFilter: "blur(10px)"
                  }}>
                    <div className="card-body p-4 shadow text-center">
                      <h2 className="fw-bold mb-4">Sign up now</h2>
                      <form className='form'>
                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <div className="form-outline">
                              <input type="text" id="form3Example1" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="form3Example1">First name</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-3">
                            <div className="form-outline">
                              <input type="text" id="form3Example2" className="form-control form-control-lg" />
                              <label className="form-label" htmlFor="form3Example2">Last name</label>
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-3">
                          <input type="email" id="form3Example3" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example3">Email address</label>
                        </div>

                        <div className="form-outline mb-3">
                          <input type="password" id="form3Example4" className="form-control form-control-lg" />
                          <label className="form-label" htmlFor="form3Example4">Password</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block btn-signup">
                          Sign up
                        </button>

                        <div className="text-center">
                          <p>or sign up with:</p>
                          <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f">Facebook</i>
                          </button>

                          <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google">Google</i>
                          </button>

                          <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter">Twitter</i>
                          </button>

                          <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-5 mb-lg-0">
                  <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" className="w-100 rounded-4 shadow" alt="" />
                </div>
              </div>
            </div>
          </section>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default SignupPopup;
