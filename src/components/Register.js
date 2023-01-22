

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const RegisterModel = ({ show, handleModel }) => {
    return (
        <Modal
            show={show}
            onHide={() => handleModel(2,false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="text-center">
                    Register
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 mx-auto">
                    <div id="first">
				        <div className="myform form ">
                                <div className="logo mb-3">
                                    <div className="col-md-12 text-center">
                                        <h1 >Signup</h1>
                                    </div>
                                </div>
                                <form action="#" name="registration">
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">First Name</label>
                                        <input type="text" name="firstname" className="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Last Name</label>
                                        <input type="text" name="lastname" className="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Email address</label>
                                        <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputEmail1">Password</label>
                                        <input type="password" name="password" id="password" className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                                    </div>
                                    <div className="col-md-12 text-center mb-3">
                                        <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Get Started For Free</button>
                                    </div>
                                    <div className="col-md-12 ">
                                        <div className="form-group">
                                            <p className="text-center"><a href="#" id="signin">Already have an account?</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => handleModel(2,false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RegisterModel
