import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const ArtistPage = () => {
  const [artist, setArtist] = useState(null);
  const [tracks, setTracks] = useState([]);
  const { artistId } = useParams();
  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
  });
  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId, {
      method: "GET",
      headers,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        setArtist(data);
        fetch(
          // await the fetch of the artist songs
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + data.name,
          {
            method: "GET",
            headers,
          }
        )
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((trackObj) => {
            console.log(trackObj);
            setTracks(trackObj.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    artist && (
      <>
        <Row>
          <Col xs={12} md={10} className=" mt-5">
            <h2 className="titleMain">{artist.name}</h2>
            <div id="followers">{artist.nb_fan + " followers"}</div>
            <div className="d-flex justify-content-center" id="button-container">
              <button className="btn btn-success mr-2 mainButton " id="playButton">
                PLAY
              </button>
              <button className="btn btn-outline-light mainButton" id="followButton">
                FOLLOW
              </button>
            </div>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col xs={10} className=" offset-1 p-0">
            <div className="mt-4 d-flex justify-content-start">
              <h2 className="text-white font-weight-bold">Tracks</h2>
            </div>
            <div className="pt-5 mb-5">
              <Row id="apiLoaded">
                {artist &&
                  tracks.length > 0 &&
                  tracks.map((track) => (
                    <Col className="col-sm-auto col-md-auto text-center mb-5" key={track.id}>
                      <Link to={"/album-page/" + track.album.id}>
                        <img
                          className="img-fluid"
                          src={
                            track.album.cover_medium // creating the album image anchor
                          }
                          alt="1"
                        />
                      </Link>
                      <p>
                        <Link to="#">
                          Track: "$
                          {
                            track.title.length < 16 ? `${track.title}` : `${track.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                          }
                          "
                        </Link>
                        <Link to={"/album-page/" + track.album.id}>
                          Album: "$
                          {
                            track.album.title.length < 16
                              ? `${track.album.title}`
                              : `${track.album.title.substring(0, 16)}...` // setting the track title, if it's longer than 16 chars cuts the rest
                          }
                          "
                        </Link>
                      </p>
                    </Col>
                  ))}
              </Row>
            </div>
          </Col>
        </Row>
      </>
    )
  );
};
export default ArtistPage;
