import PropTypes from "prop-types";
import "./ChangingButton.style.css";
import { useNavigate } from "react-router-dom";

const ChangingButton = ({ text, style, link }) => {
  
  const navigate = useNavigate();

  const onClick = () => {
    navigate(link);
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
