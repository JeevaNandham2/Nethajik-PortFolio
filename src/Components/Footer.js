import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
/*import logo from "../assets/img/noisylogo2.JPEG";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";*/

 const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer;