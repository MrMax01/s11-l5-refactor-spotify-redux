import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Row className="mb-3">
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>
      <Row>
        <Col md={3} className="pt-5 text-center" id="img-container"></Col>
        <Col md={8} className=" p-5">
          <Row>
            <Col md={10} className=" mb-5" id="trackList"></Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default Main;
