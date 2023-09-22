import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SongList from "./SongList";

const Main = () => {
  let rockArtists = ["queen", "u2", "thepolice", "eagles", "thedoors", "oasis", "thewho", "bonjovi"];

  let popArtists = ["maroon5", "coldplay", "onerepublic", "jamesblunt", "katyperry", "arianagrande"];

  let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];
  return (
    <>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="searchResults" className="d-none">
            <h2>Search Results</h2>
            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></Row>
          </div>
        </Col>
      </Row>
      <SongList listName="rock" arrArtists={rockArtists} />
      <SongList listName="pop" arrArtists={popArtists} />
      <SongList listName="HipHop" arrArtists={hipHopArtists} />
    </>
  );
};
export default Main;
