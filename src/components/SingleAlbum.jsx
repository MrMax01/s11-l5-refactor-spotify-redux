import { Link } from "react-router-dom";

const SingleAlbum = (props) => {
  return (
    <div className="col text-center">
      <Link to="/">
        <img className="img-fluid" src={props.songInfo.album.cover_medium} alt="1" />
      </Link>
      <p>
        <Link to="/">
          Album: "
          {props.songInfo.album.title.length < 16
            ? `${props.songInfo.album.title}`
            : `${props.songInfo.album.title.substring(0, 16)}...`}
          "
        </Link>
        <Link to="/">Artist: {props.songInfo.artist.name}</Link>
      </p>
    </div>
  );
};
export default SingleAlbum;
