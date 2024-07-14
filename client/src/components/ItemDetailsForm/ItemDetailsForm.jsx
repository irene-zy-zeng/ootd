import TextInput from "../TextInput/TextInput";
import UploadIcon from "../../assets/icons/upload.svg";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemDetailsForm.scss"
import Button from "../Button/Button";
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
      alert("Your upload was successful! Click Ok to redirect to Homepage...");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = (event) => {
    event.preventDefault();
    navigate("/");
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
          <p className="body-large">
            * Take a photo of your clothing item and click upload icon to upload.<br />
            * Removing the background of your photo is highy recommended.
          </p>
        </div>
        <div className="form__detials">
        <label className="form__title sub-header">Item Detials</label>
        <TextInput name="name" label="NAME" placeholder="NAME OF THE ITEM"/>
        <TextInput name="category" label="CATEGORY" placeholder="CATEGORY OF THE ITEM"/>
        <TextInput name="color" label="COLOR" placeholder="COLOR OF THE ITEM"/>
        <TextInput name="season" label="SEASON" placeholder="SEASON OF THE ITEM"/>
        <TextInput name="brand" label="BRAND" placeholder="BRAND OF THE ITEM"/>
        <div className="form__button">
          <Button buttonVariant="delete" buttonLabel="Cancel" onClickAction={handleCancel}/>
          <Button type="submit" buttonVariant="primary" buttonLabel="Submit" />
        </div>
        </div>
      </form>
  )
}

export default ItemDetailsForm
