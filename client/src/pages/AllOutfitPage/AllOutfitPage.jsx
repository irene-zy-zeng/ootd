import Button from "../../components/Button/Button";
import AddIcon from "../../assets/icons/add.svg";
import ApparelIcon from "../../assets/icons/apparel.svg";
import { useNavigate } from "react-router-dom";


const OutfitPage = () => {
  const navigate = useNavigate();


  return (
    <>
        <div className="button-container">
        <Button buttonVariant="primary" buttonLabel="All Outfit" buttonIcon={ApparelIcon} />
        <Button buttonVariant="secondary" buttonLabel="Add New Outfit" buttonIcon={AddIcon} onClickAction={() => navigate("/outfit/new")}/>
      </div>
    </>
  )
}

export default OutfitPage
