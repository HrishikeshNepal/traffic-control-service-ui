import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import SignUpFormComponent from './SignUpFormComponent'; // Your existing signup form

function NavBarComponent() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleShowSignUp = () => setShowSignUpModal(true);
  const handleCloseSignUp = () => setShowSignUpModal(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Button variant="primary" onClick={handleShowSignUp}>
                Sign Up
              </Button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Modal for Signup */}
      <Modal show={showSignUpModal} onHide={handleCloseSignUp} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SignUpFormComponent closeModal={handleCloseSignUp} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default NavBarComponent;
