import PropTypes from "prop-types";
import "./ChangingButton.style.css"

const ChangingButton = ({ text, style, link }) => {
  const onClick = () => {
    window.location.href = link; //TODO: Cambiar a link de React router
  };

  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
};

ChangingButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ChangingButton;