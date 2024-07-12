import Button from "../../components/Button/Button";
import AddIcon from "../../assets/icons/add.svg";
import ApparelIcon from "../../assets/icons/apparel.svg";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./AllOutfitPage.scss"

const apiURL = import.meta.env.VITE_API_URL;


const OutfitPage = () => {
  const navigate = useNavigate();

  const [outfitsData, setOutfitsData] = useState([]);

  const getAllOutfits = async () => {
    try {
      const res = await axios.get(`${apiURL}/outfit`);
      const outfitsData = res.data;
      console.log(outfitsData);
      setOutfitsData(outfitsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOutfits();
  }, []);

  return (
    <>
      <div className="button-container">
        <Button buttonVariant="primary" buttonLabel="All Outfit" buttonIcon={ApparelIcon} />
        <Button buttonVariant="secondary" buttonLabel="Add New Outfit" buttonIcon={AddIcon} onClickAction={() => navigate("/outfit/new")}/>
      </div>
      <section className="all-outfits">
        <h2 className="all-outfits__title sub-header">All Outfits</h2>
        {outfitsData == null ? (
        <p>There's no outfit currently.</p>
        ) : (
          outfitsData.map((outfit) => (
            <div key={outfit.id} className="all-outfits__image-card">
              <img src={outfit.image} alt={outfit.name} className="all-outfits__image" />
            </div>
          ))
      )}
      </section>
    </>
  )
}

export default OutfitPage
