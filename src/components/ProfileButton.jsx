import React from "react";
import PropTypes from "prop-types";
import ChangingButton from "./ChangingButton";
import { useNavigate } from "react-router-dom";
import "./ProfileButton.style.css";

const ProfileButton = ({ text, style, link }) => {
  
  const navigate = useNavigate()
  
  const onClick = (link) => {
    navigate(link);
  };

  return (
    <div className="box">
      <img height="40" src="/iconopeque.png" alt="" />
      <ChangingButton
        text={text}
        style={style}
        onClick={() => {
          onClick("/inprogress");
        }}
      />
    </div>
  );
};

ProfileButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProfileButton;
