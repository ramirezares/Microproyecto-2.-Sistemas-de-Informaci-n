import PropTypes from "prop-types";
import "./ButtomImg.style.css"

const ButtomImg = ({ link, backgroundImage1, backgroundImage2 }) => {
  const onClick = () => {
    window.location.href = link; //TODO: Cambiar a link de React router
  };

  const buttonStyle = {
    backgroundImage: `url(${backgroundImage1}), url(${backgroundImage2})`,
    backgroundSize: '85%, cover',
    backgroundPosition: 'center, center'
};

  return (
    <button className="rest" onClick={onClick} style={buttonStyle} />   
  );
};

ButtomImg.propTypes = {
  link: PropTypes.string.isRequired,
  backgroundImage1: PropTypes.string.isRequired,
  backgroundImage2: PropTypes.string.isRequired,
};

export default ButtomImg;
