import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <Form>
      <Card style={{ width: "38rem" }} className="m-auto p-3">
        <Card.Text className="mb-0">
          <h3>Contact Us</h3>
          <hr />
          <p>Have a question about your order or need help ordering?</p>
          <p>Please fill out the form below:</p>
          <hr />
        </Card.Text>
        <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
          <Form.Control type="text" placeholder="name" />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingPassword"
          label="Email Address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Question" className="mb-3">
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="question"
            style={{ height: "9rem" }}
          />
        </FloatingLabel>
        <Button type="submit">Submit</Button>
      </Card>
    </Form>
  );
}

export default Contact;
