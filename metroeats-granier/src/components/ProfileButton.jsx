import PropTypes from "prop-types";
import ChangingButton from "./ChangingButton";
import "./ProfileButton.style.css"

const ProfileButton = ({ text, style, link }) => {
  
  return (
    <div className="box">
        <img height="40" src="/iconopeque.png" alt="" />
        <ChangingButton text={text} style={style} link="" />
    </div>
  );
};

ProfileButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProfileButton;