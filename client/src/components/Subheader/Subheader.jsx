import "./Subheader.scss";
import BackIcon from "../../assets/icons/back.svg";
import { useNavigate } from "react-router-dom";

const Subheader = ({titleText}) => {
  const navigate = useNavigate();

  return (
    <div className="subheader">
    <div className="subheader__content">
      <img src={BackIcon} alt={"Back Icon"} className="icon subheader__icon" onClick={() => navigate(-1)}/>
      <h2 className="sub-header subheader__title">{titleText}</h2>
    </div>
    </div>
  );
};

export default Subheader;
