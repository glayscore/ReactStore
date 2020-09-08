import React from "react";
import {
    Button,
    Container,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from "reactstrap";

const Feedback = (props: any) => {
    return (
        <>
            <div className="main">
                <div className="section landing-section">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="text-center">Keep in touch?</h2>
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
                                    </Row>
                                    <label>Message</label>
                                    <Input
                                        placeholder="Tell us your thoughts and feelings..."
                                        type="textarea"
                                        rows="4"
                                    />
                                    <Row>
                                        <Col className="ml-auto mr-auto" md="4">
                                            <Button className="btn-fill" size="lg" style={{ backgroundColor: "#c4bc87" }}> {/* One of the primaries colors */}
                                                Send Message
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
}
export default Feedback;