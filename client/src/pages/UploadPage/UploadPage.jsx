import ItemDetailsForm from "../../components/ItemDetailsForm/ItemDetailsForm";
import Subheader from "../../components/Subheader/Subheader";
import Button from "../../components/Button/Button";
import UploadIcon from "../../assets/icons/upload.svg";
import "./UploadPage.scss";

const UploadPage = () => {
  return (
    <div >
      <Subheader titleText="Upload A New Item" />
      <section className="upload">
      {/* <div className="upload__photo">
        <h2 className="upload__title sub-header">Upload a Photo</h2>
        <div className="upload__image-box">
          <img src={UploadIcon} alt="Upload Icon" className="upload__icon"/>
        </div>
      </div> */}
      <div className="upload__form">
      <ItemDetailsForm />
      </div>
      <div className="upload__button">
        <Button type="submit" buttonVariant="primary" buttonLabel="Submit" />
      </div>
      </section>
    </div>
  );
};

export default UploadPage;
