import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const AlbumPage = () => {
  const { albumId } = useParams();
  const [album, setAlbum] = useState(null);
  let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
  });

  useEffect(() => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId, {
      method: "GET",
      headers,
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        }
      })
      .then((data) => {
        console.log(data);
        setAlbum(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    album && (
      <Row>
        <Col md={3} className=" pt-5 text-center" id="img-container">
          <img src={album.cover} className="card-img img-fluid" alt="Album" />
          <div className="mt-4 text-center">
            <p className="album-title">{album.title}</p>
          </div>
          <div className="text-center">
            <p className="artist-name">{album.artist.name}</p>
          </div>
          <div className="mt-4 text-center">
            <button id="btnPlay" className="btn btn-success" type="button">
              Play
            </button>
          </div>
        </Col>
        <Col md={8} className=" p-5">
          <Row>
            <Col md={10} className=" mb-5" id="trackList">
              <div>
                {album.tracks.data.map((track) => (
                  <div className="py-3 trackHover" key={track.id}>
                    <Link to="#" className="card-title trackHover px-3 text-white">
                      {track.title}
                    </Link>
                    <small className="duration text-white">
                      {Math.floor(
                        parseInt(track.duration) / 60 // setting the duration minutes
                      )}
                      :
                      {parseInt(track.duration) % 60 < 10
                        ? "0" + (parseInt(track.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                        : parseInt(track.duration) % 60}
                    </small>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  );
};
export default AlbumPage;
