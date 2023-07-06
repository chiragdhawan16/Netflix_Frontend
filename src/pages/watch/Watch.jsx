
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link, useLocation } from "react-router-dom";
import "./watch.scss";
// import '../video/video1.mp4'

export default function Watch() {
  const location = useLocation();
   const movie = location.state.movie
  console.log(location)
  return (
    <div className="watch">
      <Link to="/">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <video className="video" autoPlay progress controls src={movie.video} />
      

    </div>
  );
}
