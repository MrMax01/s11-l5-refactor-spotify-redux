import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SingleAlbum from "./SingleAlbum";

const SongList = (props) => {
  const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
  let headers = new Headers({
    // sets the headers
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
  });
  const [songInfoArr, setSongInfoArr] = useState([]);
  useEffect(() => {
    let randomArtists = [];

    while (randomArtists.length < 4) {
      // pushes elements inside the array until it has 4 strings
      let artist = props.arrArtists[Math.floor(Math.random() * props.arrArtists.length)]; // select an element from the array with an index between 0 and 7
      if (!randomArtists.includes(artist)) {
        // checks if the artist is not already present in the array
        randomArtists.push(artist); // pushes the artist in the array
      }
    }
    for (let j = 0; j < randomArtists.length; j++) {
      fetch(baseEndpoint + randomArtists[j], {
        method: "GET",
        headers,
      })
        .then((response) => {
          if (response.ok) {
            return response.json(); // transforms the response to json
          } else {
            console.log("error");
          }
        })
        .then((result) => {
          setSongInfoArr((prevArray) => [...prevArray, result.data[0]]);
        })
        .catch((err) => console.log(err));
    }
  }, []);
  return (
    <Row>
      <Col xs={10}>
        <div id="hiphop">
          <h2>{props.listName}</h2>
          <Row className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
            {songInfoArr ? (
              songInfoArr.map((songInfo) => <SingleAlbum key={songInfo.id} songInfo={songInfo} />)
            ) : (
              <div>c'è un problema</div>
            )}
          </Row>
        </div>
      </Col>
    </Row>
  );
};
export default SongList;
