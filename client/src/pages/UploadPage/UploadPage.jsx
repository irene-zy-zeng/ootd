import ItemDetailsForm from "../../components/ItemDetailsForm/ItemDetailsForm";
import Subheader from "../../components/Subheader/Subheader";
import Button from "../../components/Button/Button";
import UploadIcon from "../../assets/icons/upload.svg";

const UploadPage = () => {
  return (
    <div >
      <Subheader titleText="Upload A New Item" />
      <section className="upload">
      <ItemDetailsForm />
      </section>
    </div>
  );
};

export default UploadPage;
