import "./AddOutfitPage.scss";
import Button from "../../components/Button/Button";
import AddIcon from "../../assets/icons/add.svg";
import ApparelIcon from "../../assets/icons/apparel.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const apiURL = import.meta.env.VITE_API_URL;

const AddOutfitPage = () => {

  const [itemsData, setItemsData] = useState([]);
  const navigate = useNavigate();

  const getAllItems = async () => {
    try {
      const res = await axios.get(`${apiURL}/item`);
      const itemsData = res.data;
      setItemsData(itemsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  const groupedItems = Object.groupBy(itemsData,({category})=> category);


  return (
    <>
      <div className="button-container">
        <Button buttonVariant="secondary" buttonLabel="All Outfit" buttonIcon={ApparelIcon} onClickAction={() => navigate("/outfit")}/>
        <Button buttonVariant="primary" buttonLabel="Add New Outfit" buttonIcon={AddIcon} />
      </div>
      <div className="new-outfit-page">
      <section className="new-outfit">
        <h1 className="new-outfit__title page-header">NEW OUTFIT</h1>
        <div className="new-outfit__canvas">

        </div>
        <div className="new-outfit__button">
          <Button buttonVariant="delete" buttonLabel="Cancel" />
          <Button buttonVariant="primary" buttonLabel="Save" />
        </div>
      </section>
      <section className="all-items">
        <h1 className="all-items__title page-header">ALL ITEMS</h1>
        {itemsData == null ? (
        <p>Loading...</p>
        ) : (
          Object.keys(groupedItems).map((category)=>(
            <div key={category} className="group">
              <h2 className="group__title sub-header">{category}</h2>
              <div className="group__content">
                {groupedItems[category].map((item) => (
                  <div key={item.id} className="group__image-card">
                    <img src={item.image} alt={item.name} className="group__image"/>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </section>
      </div>
    </>
  )
}

export default AddOutfitPage
