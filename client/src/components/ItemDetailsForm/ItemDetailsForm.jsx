import TextInput from "../TextInput/TextInput";
import UploadIcon from "../../assets/icons/upload.svg";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemDetailsForm.scss"
import Button from "../Button/Button";
import uuid4 from "uuid4";
import axios from "axios";

const apiURL = import.meta.env.VITE_API_URL;

const ItemDetailsForm = () => {
  const navigate = useNavigate();

  const [imageURL, setImageURL] = useState();
  const fileUploadRef = useRef();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploadRef.current.click();
  }

  const handleImageDisplay = () =>{
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    setImageURL(cachedURL);
  }

  // const handleImageDisplay = async () =>{
  //   try {
  //     const uploadedFile = fileUploadRef.current.files[0];
  //     const formData = new FormData();
  //     formData.append("image", uploadedFile);
  
  //     const res = await axios.post(`${apiURL}/item`, formData);
  //     console.log(res);
  //     const data = res.data;
  //     setImageURL(data.image);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const postNewItem = async (itemsData) => {
  //   try {
  //     const res = await axios.post(`${apiURL}/item`, itemsData);
  //     console.log(res);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newItem ={
  //     id: uuid4(),
  //     image: event.target.image.files[0],
  //     name: event.target.name.value,
  //     category: event.target.category.value,
  //     color: event.target.color.value,
  //     season: event.target.season.value,
  //     brand: event.target.brand.value,
  //   };
  //   console.log(newItem);
  //   postNewItem(newItem);
  //   event.target.reset();
  //   alert("Your upload was successful! Click Ok to redirect to Homepage...");
  //   navigate("/");
  // };


  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const uploadedFile = fileUploadRef.current.files[0];

    if (uploadedFile) {
      formData.append("image", uploadedFile);
    }

    try {
      const res = await axios.post(`${apiURL}/item`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res);
      alert("Your upload was successful! Click Ok to redirect to Homepage...");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
      <form className="form" onSubmit={handleSubmit} >
        <div className="form__photo">
          <label className="form__title sub-header">Upload a Photo</label>
          <div className="form__image-box">
            {imageURL && <img src={imageURL} alt="Image Uploaded" className="form__image"/>}
            <input type="file" ref={fileUploadRef} onChange={handleImageDisplay} hidden/>
            <Button buttonVariant="primary" buttonIcon={UploadIcon} iconAltText="Upload Icon" onClickAction={handleImageUpload}/>
          </div>
        </div>
        <div className="form__detials">
        <label className="form__title sub-header">Item Detials</label>
        <TextInput name="name" label="NAME" placeholder="NAME OF THE ITEM"/>
        <TextInput name="catogory" label="CATOGORY" placeholder="CATOGORY OF THE ITEM"/>
        <TextInput name="color" label="COLOR" placeholder="COLOR OF THE ITEM"/>
        <TextInput name="season" label="SEASON" placeholder="SEASON OF THE ITEM"/>
        <TextInput name="brand" label="BRAND" placeholder="BRAND OF THE ITEM"/>
        <div className="form__button">
          <Button buttonVariant="delete" buttonLabel="Cancel" />
          <Button type="submit" buttonVariant="primary" buttonLabel="Submit" />
        </div>
        </div>
      </form>
  )
}

export default ItemDetailsForm
