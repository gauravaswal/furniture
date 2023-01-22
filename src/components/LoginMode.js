
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const LoginModel = ({show,handleModel}) => {
  return (
    <Modal
     show={show}
      onHide={() => handleModel(1,false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="text-center">
           Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="container">
        <div className="row">
			<div className="col-md-6 mx-auto">
			<div id="first">
				<div className="myform form ">
                   <form action="" method="post" name="login">
                           <div className="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" name="email"  className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                           </div>
                           <div className="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" name="password" id="password"  className="form-control" aria-describedby="emailHelp" placeholder="Enter Password" />
                           </div>
                           <div className="form-group">
                              <p className="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div className="col-md-12 text-center ">
                              <button type="submit" className=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
                           </div>
                           <div className="col-md-12 ">
                              <div className="login-or">
                                 <hr className="hr-or" />
                                 <span className="span-or">or</span>
                              </div>
                           </div>
                           <div className="col-md-12 mb-3">
                              <p className="text-center">
                                 <a href="javascript:void();" className="google btn mybtn"><i className="fa fa-google-plus">
                                 </i> Signup using Google
                                 </a>
                              </p>
                           </div>
                           <div className="form-group">
                              <p className="text-center">Don't have account? <a href="#" id="signup">Sign up here</a></p>
                           </div>
                        </form>
                 
				</div>
			</div>
            </div>
            </div>
            </div>
      </Modal.Body>
      <Modal.Footer>
        <Button  onClick={()=>handleModel(1,false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default LoginModel
