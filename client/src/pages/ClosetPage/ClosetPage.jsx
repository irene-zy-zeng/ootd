import Button from "../../components/Button/Button";
import AddIcon from "../../assets/icons/add.svg";
import SortIcon from "../../assets/icons/sort.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ClosetPage.scss";

const apiURL = import.meta.env.VITE_API_URL;

const ClosetPage = () => {
  const [itemsData, setItemsData] = useState([]);

  const getAllItems = async () => {
    try {
      const res = await axios.get(`${apiURL}/closet`);
      const itemsData = res.data;
      // console.log(itemsData);
      setItemsData(itemsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  //Function to group items -> give you an array of catogories including an array of items
  const groupedItems = Object.groupBy(itemsData,({category})=> category);
  // console.log(groupedItems);

  return (
    <>
      <div className="button-container">
        <Button buttonVariant="primary" buttonLabel="Add New Item" buttonIcon={AddIcon}/>
        <Button buttonVariant="secondary" buttonLabel="Sort By ..." buttonIcon={SortIcon} />
      </div>
    <section className="allItems">
      {itemsData == null ? (
        <p>Loading...</p>
        ) : (
          Object.keys(groupedItems).map((category)=>(
            <div key={category} className="catogory-group">
              <h2 className="catogory-group__title sub-header">{category}</h2>
              <div className="catogory-group__content">
                {groupedItems[category].map((item) => (
                  <div key={item.id} className="catogory-group__image-card">
                    <img src={item.image} alt={item.name} className="catogory-group__image"/>
                  </div>
                ))}
              </div>
            </div>
          ))
      )}
    </section>
    </>
  );
  };

  export default ClosetPage;
