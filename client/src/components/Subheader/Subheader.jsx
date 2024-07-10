import "./Subheader.scss";
import BackIcon from "../../assets/icons/back.svg";

const Subheader = ({titleText}) => {
  return (
    <div className="subheader">
    <div className="subheader__content">
      <img src={BackIcon} alt={"Back Icon"} className="icon subheader__icon" />
      <h2 className="sub-header subheader__title">{titleText}</h2>
    </div>
    </div>
  );
};

export default Subheader;
