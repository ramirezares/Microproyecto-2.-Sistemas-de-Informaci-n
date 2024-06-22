import PropTypes from "prop-types";
import ChangingButton from "./ChangingButton";
import "./ProfileButton.style.css"
import { useNavigate } from "react-router-dom";

const ProfileButton = ({ text, style, link }) => {
  
  const navigate = useNavigate();
  
  const onClick = () => {
    navigate(link)
  };

  return (
    <div className="box">
        <img className="img-fluid" src="/Icono de perfil.png" alt="" />
        <ChangingButton text={text} style={style} onClick={onClick} />
    </div>
  );
};

ProfileButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProfileButton;