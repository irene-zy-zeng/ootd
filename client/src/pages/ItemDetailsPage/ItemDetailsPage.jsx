import Subheader from "../../components/Subheader/Subheader";
import ItemDetailsForm from "../../components/ItemDetailsForm/ItemDetailsForm";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

const ItemDetailsPage = (selectedItemId) => {
  const [selectedItem, setSeletedItem] = useState(null);
  const { id } = useParams();


  const getSelectedItem = async (itemId)=>{
    try {
      const res = await axios.get(`${apiURL}/item/${id}`);
      setSeletedItem(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getSelectedItem(selectedItemId)
  },[selectedItemId])

  if (selectedItem === null) {
    return <div>loading...</div>;
}

  return (
    <div>
      <Subheader titleText="Details"/>
      <div className="item-details__image-card">
        <img src={selectedItem.image} alt={selectedItem.name} className="item-details__image"/>
      </div>
      <form className="form">
        <label className="form__title sub-header">{selectedItem.name}</label>
        <TextInput name="catogory" label="CATOGORY" placeholder="CATOGORY OF THE ITEM" value={selectedItem.category}/>
        <TextInput name="color" label="COLOR" placeholder="COLOR OF THE ITEM" value={selectedItem.color}/>
        <TextInput name="season" label="SEASON" placeholder="SEASON OF THE ITEM" value={selectedItem.season}/>
        <TextInput name="brand" label="BRAND" placeholder="BRAND OF THE ITEM" value={selectedItem.brand}/>
      </form>
      <div className="item-details__button">
      <Button buttonVariant="delete" buttonLabel="Delete"/>
      <Button buttonVariant="primary" buttonLabel="Edit"/>
      </div>
    </div>
  )
}

export default ItemDetailsPage
