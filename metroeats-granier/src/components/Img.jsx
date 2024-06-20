import PropTypes from "prop-types";
import "./Img.style.css";

function Img({ route, alt, style }) {
  return (
    <div className={style}>
      <img src={route} alt={alt}/>
    </div>
  );
}

Img.propTypes = {
    route: PropTypes.string.isRequired,
  };

export default Img;
