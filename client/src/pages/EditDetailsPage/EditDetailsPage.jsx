import Subheader from "../../components/Subheader/Subheader";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditDetailsPage.scss";

const apiURL = import.meta.env.VITE_API_URL;

const EditDetailsPage = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getSelectedItem = async () => {
    try {
      const res = await axios.get(`${apiURL}/item/${id}`);
      setSelectedItem(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSelectedItem(id);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem({ ...selectedItem, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", selectedItem.name);
    formData.append("category", selectedItem.category);
    formData.append("color", selectedItem.color);
    formData.append("season", selectedItem.season);
    formData.append("brand", selectedItem.brand);

    try {
      await axios.put(`${apiURL}/item/${id}`, formData);
      alert("Item updated successfully!");
      navigate(`/closet/${id}`);
    } catch (error) {
      console.error(error);

    }
  }

  const handleCancel = (event) => {
    event.preventDefault();
    navigate(`/closet/${id}`);
  };

  if (selectedItem === null) {
    return <div>loading...</div>;
  }

  return (
    <div>
        <Subheader titleText="Edit" onClickAction={() => navigate(`/closet/${id}`)}/>
        <section className="edit-detials">
          <div className="edit-detials__item">
          <div className="edit-detials__title">
            <h2 className="sub-header"> Edit Item Details</h2>
          </div>
          <div className="edit-detials__image-card">
            <img src={selectedItem.image} alt={selectedItem.name} className="edit-detials__image"/>
          </div>
          </div>
        <form className="edit-detials__form" onSubmit={handleSubmit}>
        <TextInput name="name" label="NAME" placeholder="NAME OF THE ITEM" value={selectedItem.name} onChange={handleInputChange}/>
          <TextInput name="category" label="CATEGORY" placeholder="CATEGORY OF THE ITEM" value={selectedItem.category} onChange={handleInputChange}/>
          <TextInput name="color" label="COLOR" placeholder="COLOR OF THE ITEM" value={selectedItem.color} onChange={handleInputChange}/>
          <TextInput name="season" label="SEASON" placeholder="SEASON OF THE ITEM" value={selectedItem.season} onChange={handleInputChange}/>
          <TextInput name="brand" label="BRAND" placeholder="BRAND OF THE ITEM" value={selectedItem.brand} onChange={handleInputChange}/>
          <div className="item-details__button">
            <Button buttonVariant="delete" buttonLabel="Cancel" onClickAction={handleCancel}/>
            <Button type="submit" buttonVariant="primary" buttonLabel="Save" />
          </div>
      </form>
      </section>
    </div>
  )
}

export default EditDetailsPage
