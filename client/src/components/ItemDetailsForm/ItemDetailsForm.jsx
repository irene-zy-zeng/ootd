import TextInput from "../TextInput/TextInput";
import UploadIcon from "../../assets/icons/upload.svg";
import { useState, useRef } from "react";
import "./ItemDetailsForm.scss"
import Button from "../Button/Button";

const ItemDetailsForm = () => {

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

  return (
      <form className="form">
        <div className="form__photo">
        <label className="form__title sub-header">Upload a Photo</label>
        <div className="form__image-box">
          {imageURL && <img src={imageURL} alt="Image Uploaded" className="form__image"/>}
          <input type="file" ref={fileUploadRef} onChange={handleImageDisplay} hidden/>
          <Button buttonVariant="primary" buttonIcon={UploadIcon} iconAltText="Upload Icon" onClickAction={handleImageUpload}/>
        </div>
        </div>
        <label className="form__title sub-header">Item Detials</label>
        <TextInput name="name" label="NAME" placeholder="NAME OF THE ITEM"/>
        <TextInput name="catogory" label="CATOGORY" placeholder="CATOGORY OF THE ITEM"/>
        <TextInput name="color" label="COLOR" placeholder="COLOR OF THE ITEM"/>
        <TextInput name="season" label="SEASON" placeholder="SEASON OF THE ITEM"/>
        <TextInput name="brand" label="BRAND" placeholder="BRAND OF THE ITEM"/>
      </form>
  )
}

export default ItemDetailsForm
