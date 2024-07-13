import "./AddOutfitPage.scss";
import Button from "../../components/Button/Button";
import AddIcon from "../../assets/icons/add.svg";
import ApparelIcon from "../../assets/icons/apparel.svg";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import html2canvas from "html2canvas";
import domtoimage from 'dom-to-image';

const apiURL = import.meta.env.VITE_API_URL;

const AddOutfitPage = () => {
  const [itemsData, setItemsData] = useState([]);
  const [canvasItems, setCanvasItems] = useState([]);
  const navigate = useNavigate();
  const canvasRef = useRef(null);

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

  const groupedItems = Object.groupBy(itemsData, ({ category }) => category);

  // const handleImageClick = (item) => {
  //   if (canvasItems.length < 4) {
  //     setCanvasItems([...canvasItems, item]);
  //   } else {
  //     alert("You can only add up to 4 items.");
  //   }
  // };
  const handleImageClick = (item) => {
    if (canvasItems.length < 4) {
      const newItem = { ...item, loaded: false };
      setCanvasItems([...canvasItems, newItem]);
    } else {
      alert("You can only add up to 4 items.");
    }
  };
  const handleImageLoad = (index) => {
    const newCanvasItems = [...canvasItems];
    newCanvasItems[index].loaded = true;
    setCanvasItems(newCanvasItems);
  
    // Debug: Log the load state
    console.log("Image loaded at index:", index, newCanvasItems);
  };

  const handleCanvasImageClick = (index) => {
    const newCanvasItems = [...canvasItems];
    newCanvasItems.splice(index, 1);
    setCanvasItems(newCanvasItems);
  };

  const clearCanvas = () => {
    setCanvasItems([]);
  };

  // const saveCanvasAsPNG = () => {
  //   html2canvas(canvasRef.current).then((canvas) => {
  //     const imgData = canvas.toDataURL("image/png");
  //     console.log(imgData);
  //     console.log("clicked!")
  //   });
  // };

  // const saveCanvasAsPNG = () => {
  //   html2canvas(canvasRef.current).then((canvas) => {
  //     canvas.toBlob((blob) => {
  //       const formData = new FormData();
  //       formData.append("image", blob, "outfit.png");

  //       axios
  //         .post(`${apiURL}/outfit`, formData, {
  //           headers: {
  //             "Content-Type": "multipart/form-data",
  //           },
  //         })
  //         .then((response) => {
  //           console.log("Outfit saved successfully:", response.data);
  //           alert("New outfit created successfully!");
  //           navigate(`/outfit`);
  //         })
  //         .catch((error) => {
  //           console.error("Error saving outfit:", error);
  //           // Handle error as needed
  //         });
  //     }, "image/png");
  //   });
  // };

  const saveCanvasAsPNG = () => {
    if (canvasItems.some(item => !item.loaded)) {
      alert("Please wait until all images are loaded.");
      return;
    }
  
    domtoimage.toBlob(canvasRef.current)
      .then(blob => {
        const formData = new FormData();
        formData.append("image", blob, "outfit.png");
  
        axios.post(`${apiURL}/outfit`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("Outfit saved successfully:", response.data);
          alert("New outfit created successfully!");
          navigate(`/outfit`);
        })
        .catch((error) => {
          console.error("Error saving outfit:", error);
          // Handle error as needed
        });
      })
      .catch((error) => {
        console.error("Error capturing canvas:", error);
      });
  };


  return (
    <>
      <div className="button-container">
        <Button
          buttonVariant="secondary"
          buttonLabel="All Outfit"
          buttonIcon={ApparelIcon}
          onClickAction={() => navigate("/outfit")}
        />
        <Button
          buttonVariant="primary"
          buttonLabel="Add New Outfit"
          buttonIcon={AddIcon}
        />
      </div>
      <div className="new-outfit-page">
        <section className="new-outfit">
          <h1 className="new-outfit__title page-header">NEW OUTFIT</h1>
          <div className="new-outfit__canvas" ref={canvasRef}>
            {canvasItems.map((item, index) => (
              <img
                key={index}
                src={item.image}
                alt={item.name}
                className="new-outfit__canvas-image"
                onClick={() => handleCanvasImageClick(index)}
                onLoad={() => handleImageLoad(index)}
              />
            ))}
          </div>
          <div className="new-outfit__button">
            <Button
              buttonVariant="delete"
              buttonLabel="Cancel"
              onClickAction={clearCanvas}
            />
            <Button
              buttonVariant="primary"
              buttonLabel="Save"
              onClickAction={saveCanvasAsPNG}
            />
          </div>
        </section>
        <section className="all-items">
          <h1 className="all-items__title page-header">ALL ITEMS</h1>
          {itemsData == null ? (
            <p>Loading...</p>
          ) : (
            Object.keys(groupedItems).map((category) => (
              <div key={category} className="group">
                <h2 className="group__title sub-header">{category}</h2>
                <div className="group__content">
                  {groupedItems[category].map((item) => (
                    <div
                      key={item.id}
                      className="group__image-card"
                      onClick={() => handleImageClick(item)}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="group__image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </>
  );
};

export default AddOutfitPage;
