import Subheader from "../../components/Subheader/Subheader";
import ItemDetailsForm from "../../components/ItemDetailsForm/ItemDetailsForm";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ItemDetailsPage.scss";

const apiURL = import.meta.env.VITE_API_URL;

const ItemDetailsPage = (selectedItemId) => {
  const [selectedItem, setSeletedItem] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getSelectedItem = async (itemId) => {
    try {
      const res = await axios.get(`${apiURL}/item/${id}`);
      setSeletedItem(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSelectedItem(selectedItemId);
  }, [selectedItemId]);

  const deleteItem = async () =>{
    try {
      await axios.delete(`${apiURL}/item/${id}`);
      alert("Item deleted successfully! Click Ok to redirect to Homepage...");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  if (selectedItem === null) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <Subheader titleText="Details" />
      <main className="item-details">
      <div className="item-details__title">
        <h2 className="sub-header">{selectedItem.name}</h2>
      </div>
    <div className="item-details__content">
      <div className="item-details__image-card">
        <img src={selectedItem.image} alt={selectedItem.name} className="item-details__image"/>
      </div>
      <div className="item-details__detials">
        <div className="item-details__detials-group">
          <label className="item-details__label label-text">CATOGORY</label>
          <p className="item-details__text body-medium">
            {selectedItem.category}
          </p>
        </div>
        <div className="item-details__detials-group">
          <label className="item-details__label label-text">COLOR</label>
          <p className="item-details__text body-medium">{selectedItem.color}</p>
        </div>
        <div className="item-details__detials-group">
          <label className="item-details__label label-text">SEASON</label>
          <p className="item-details__text body-medium">
            {selectedItem.season}
          </p>
        </div>
        <div className="item-details__detials-group">
          <label className="item-details__label label-text">BRAND</label>
          <p className="item-details__text body-medium">{selectedItem.brand}</p>
        </div>
        <div className="item-details__button">
          <Button buttonVariant="delete" buttonLabel="Delete" onClickAction={deleteItem}/>
          <Button buttonVariant="primary" buttonLabel="Edit" />
        </div>
      </div>
      </div>
      </main>
    </div>
  );
};

export default ItemDetailsPage;
