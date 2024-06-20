import PropTypes from "prop-types";
import ChangingButton from "./ChangingButton";
import Img from "./Img";
import "./ProfileButton.style.css"

const ProfileButton = ({ text, style, link }) => {
  const onClick = () => {
    window.location.href = link; //TODO: Cambiar a link de React router
  };

  return (
    <div className="box">
        <Img route="/logoUnimet50x50.jpg" style="img"/>
        <ChangingButton text={text} style={style} onClick={onClick} />
    </div>
  );
};

/*TODO Link del Router en a*/ 

ProfileButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProfileButton;