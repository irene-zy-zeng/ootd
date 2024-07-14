import ItemDetailsForm from "../../components/ItemDetailsForm/ItemDetailsForm";
import Subheader from "../../components/Subheader/Subheader";
import Button from "../../components/Button/Button";
import UploadIcon from "../../assets/icons/upload.svg";
import { useNavigate } from "react-router-dom";


const UploadPage = () => {
  const navigate = useNavigate();


  return (
    <div >
      <Subheader titleText="Upload A New Item" onClickAction={() => navigate(`/`)} />
      <section className="upload">
      <ItemDetailsForm />
      </section>
    </div>
  );
};

export default UploadPage;
