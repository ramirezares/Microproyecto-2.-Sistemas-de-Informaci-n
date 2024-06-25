import "./ChangingButton.style.css";

const ChangingButton = ({ text, style, onClick }) => {
  
  return (
    <button className={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default ChangingButton;
