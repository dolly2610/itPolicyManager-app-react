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
import React, {Component} from "react";
import { NavLink, Link} from "react-router-dom";
import Axios from "axios";
import { toast } from "react-toastify";

// reactstrap components
import {
    Button,
    Modal,
    Form,
    FormGroup, 
    Input,
    InputGroup,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

toast.configure();

class RegModal extends Component {
  constructor(props) {
      super(props);

      this.onChangeInput = this.onChangeInput.bind(this);
      this.onRegisterClick = this.onRegisterClick.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
      this.routeChange = this.routeChange.bind(this);
      
      this.state = {
        modal: true,
        bNameInput: '',
        nzbnInput: '',
        bEmail: '',
        bContact: '',
        bAddr: '',
        bAddr2: '',
        bCity: '',
        bState: '',
        bZip: '',
        bDescription: '',
      }

    document.documentElement.classList.remove("nav-open"); 
  }

  componentDidMount() {
    document.body.classList.add("register-page");
    document.addEventListener('mousedown', this.handleClickOutside, true);
  }

  componentDidUpdate() {
    document.body.classList.remove("register-page");
  }

  routeChange() {
    let path = `/signin-page`;
    this.props.history.push(path);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, true);
}

  toggleModal(){
    this.setState({
      modal: !this.state.modal
    });
  };


  //button handler
  onRegisterClick(e) {
    e.preventDefault();
    this.toggleModal();
    console.log("onRegisterClick clicked! ");
    const RegisterDetails = {
      bNameInput: this.state.bNameInput,
      nzbnInput: this.state.nzbnInput,
      bEmail: this.state.bEmail,
      bContact: this.state.bContact,
      bAddr: this.state.bAddr,
      bAddr2: this.state.bAddr2,
      bCity: this.state.bCity,
      bState: this.state.bState,
      bZip: this.state.bZip,
      bDescription: this.state.bDescription
    };
    
    Axios.post('http://localhost:5000/register', RegisterDetails)
    .then(res => {console.log(res.data);
      if(res.data.value === true){
        toast("Thank You for registering!\n Please check your email for your login credentials and update you password.", { 
          type: "success", 
          position: toast.POSITION.TOP_CENTER,
          onClose: ()=> {
            window.location.href = '/landing-page'
          }
        });
      }else{
        toast("Registration Failed!\n Company already exist, login instead.", { 
          type: "error", 
          position: toast.POSITION.TOP_CENTER,
          onClose: ()=> {
            window.location.href = '/signin-page'
          }
        });
      }
    });
  }

  onChangeInput(e) {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      
      this.setState({
        [name]: value
      });
  }
    
  render(){
    return (
      <>
        <ExamplesNavbar />
        <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <div className="filter" />
      </div>
         {/* Modal */}
         <Container>   
          <Modal isOpen={this.state.modal} toggle={this.toggleModal} size="xl">
            <div>
              <div  className="modal-header">
                  <NavLink to="/signin-page" 
                      tag={Link}
                      aria-label="Close"
                      className="close"
                  >
                      <span aria-hidden={true}>×</span>
                  </NavLink>
                  <h5
                      className="modal-title text-center"
                      id="exampleModalLabel"
                  >
                  <h4>Sign Up</h4>
                  </h5>
              </div>
            <div className="modal-body">
              <Form className="register-form">
                  <Row>
                      <Col md="6">
                          <FormGroup>
                              <label><h6>Business Name</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input placeholder="Name" type="text" name="bNameInput"
                                   onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>New Zealand Business Number</h6></label>
                              <Row>
                              <InputGroup className="form-group-no-border">
                                  <Col className="car-register-nzbn" lg="8">
                                      <Input placeholder="NZBN" type="text"  name="nzbnInput" 
                                      onChange={this.onChangeInput}/>
                                  </Col>
                                  <Col lg="4">
                                      <Input type="checkbox" value="nzbn"/>
                                  </Col>
                              </InputGroup>
                              </Row>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>Business Email</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input placeholder="Email@email.com" type="text" 
                                  name="bEmail"
                                  onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>Contact Number</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input placeholder="+64" type="number" 
                                  name="bContact"
                                  onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                      </Col>
                      <Col md="6" className="modal-body-divider">
                          <FormGroup>
                              <label><h6>Address</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input placeholder="Address1" type="text" 
                                  name="bAddr"
                                  onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>Address 2</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input placeholder="Address2" type="text" 
                                  name="bAddr2"
                                  onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                          <FormGroup>
                              <Row>
                                  <InputGroup className="form-group-no-border">
                                      <Col md="6">
                                          <label for="city">City</label>
                                          <Input type="text" id="city"
                                          name="bCity"
                                          onChange={this.onChangeInput}/>
                                      </Col>
                                      <Col md="4">
                                          <label for="state">State</label>
                                          <Input type="text" id="state"
                                          name="bState"
                                          onChange={this.onChangeInput}/>
                                      </Col>
                                      <Col md="2">
                                          <label for="zip">Zip</label>
                                          <Input type="text" id="zip"
                                          name="bZip"
                                          onChange={this.onChangeInput}/>
                                      </Col>
                                  </InputGroup>
                              </Row>
                          </FormGroup>
                          <FormGroup>
                              <label><h6>Description of Business</h6></label>
                              <InputGroup className="form-group-no-border">
                                  <Input type='textarea' maxLength='500' id='description' rows={4} aria-multiline='true'
                                  name="bDescription"
                                  onChange={this.onChangeInput}/>
                              </InputGroup>
                          </FormGroup>
                          </Col>
                      </Row>
              </Form>
          </div>
              <div className="modal-footer">
                  <div className="left-side">
                  <Button
                      className="btn-link"
                      color="Info"
                      type="button"
                      onClick={this.onRegisterClick}
                      to="/signin-page"
                  >
                      Register
                  </Button>
                  </div>
                  <div className="divider" />
                  <div className="right-side">
                    <Button 
                      className="btn-link" 
                      color="danger" 
                      type="button"
                      modal={false}
                      onClick={this.routeChange}
                    >
                        Already a member?
                    </Button>
                  </div>
              </div>
              </div>
            </Modal>
          </Container>
          <DemoFooter />
      </>
    );
  }
}

export default RegModal;
