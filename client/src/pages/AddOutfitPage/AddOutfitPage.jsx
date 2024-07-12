import "./AddOutfitPage.scss";
import Button from "../../components/Button/Button";
import AddIcon from "../../assets/icons/add.svg";
import ApparelIcon from "../../assets/icons/apparel.svg"

const AddOutfitPage = () => {
  return (
    <div>
        <div className="button-container">
         <Button buttonVariant="secondary" buttonLabel="All Outfit" buttonIcon={ApparelIcon} onClickAction={() => navigate("/outfit")}/>
          <Button buttonVariant="primary" buttonLabel="Add New Outfit" buttonIcon={AddIcon} />
      </div>
    </div>
  )
}

export default AddOutfitPage
