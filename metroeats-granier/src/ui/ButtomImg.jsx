import PropTypes from "prop-types";
import "./ButtomImg.style.css"

const ButtomImg = ({ link }) => {
  const onClick = () => {
    window.location.href = link; //TODO: Cambiar a link de React router
  };

  return (
    <button className="rest" onClick={onClick} />   
  );
};

ButtomImg.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default ButtomImg;
