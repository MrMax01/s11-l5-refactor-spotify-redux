import { Col, Container, Row } from "react-bootstrap";
import SideBarVertical from "./SideBarVertical";
import Main from "./Main";

const HomePage = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={2}>
          <SideBarVertical />
        </Col>
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Main />
        </Col>
      </Row>
    </Container>
  );
};
export default HomePage;
