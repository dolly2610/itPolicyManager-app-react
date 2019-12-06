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

// reactstrap components
import { Button, 
        Form, 
        Input, 
        InputGroupAddon,
        InputGroupText,
        InputGroup,
        Container, 
        Row, 
        Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ContactUs() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("register-page");
      return function cleanup() {
        document.body.classList.remove("register-page");
      };
});
  return (
    <>
      <IndexNavbar />
      <div style={{
          backgroundColor: "rgb(85, 85,85)",
          color: "white"
        }}
        className="section landing-section"
        >
        <Container>
        <Row>
            <Col className="ml-auto mr-auto" md="8">
            <h2 className="text-center">Contact Us </h2>
            <Form className="contact-form">
                <Row>
                <Col md="6">
                    <label>Name</label>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Name" type="text" />
                    </InputGroup>
                </Col>
                <Col md="6">
                    <label>Email</label>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Email" type="text" />
                    </InputGroup>
                </Col>
                
                </Row> <br/>
               <Row>
                <Col md="12">
                <label> Enter Contact </label> 
                    <InputGroup>
                   
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                        <i className="nc-icon nc-mobile" />
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Contact No " type="Number" />
                    </InputGroup>
                </Col>
                </Row> <br/>

                <label>Message</label>
                <Input
                placeholder="Enter Message "
                type="textarea"
                rows="7"
                />
                <Row>
                <Col className="ml-auto mr-auto" md="12">
                    <Button className="btn-fill" color="primary" size="lg">
                    Send Message
                    </Button>
                </Col>
                </Row>
            </Form>
            </Col>
        </Row>
        </Container>
    </div>
    <DemoFooter />
    </>
  );
}

export default ContactUs;





