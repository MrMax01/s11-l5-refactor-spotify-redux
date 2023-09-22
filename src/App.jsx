import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PlayerBar from "./components/PlayerBar";
import { Col, Container, Row } from "react-bootstrap";
import SideBarVertical from "./components/SideBarVertical";
import AlbumPage from "./components/AlbumPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col xs={2}>
              <SideBarVertical />
            </Col>
            <Col xs={12} md={9} className="offset-md-3 mainPage">
              <PlayerBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/album-page/:albumId" element={<AlbumPage />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
