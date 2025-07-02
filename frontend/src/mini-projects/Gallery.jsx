import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import './Gallery.css'
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";


const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [selectedimg, selectSet] = useState("");
  //   const [idSearch, searchId] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [filteredGallery, setFilteredGallery] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://api.slingacademy.com/v1/sample-data/photos")
      .then((res) => {
        setGallery(res.data.photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setFilteredGallery(gallery);
      return;
    }
    setFilteredGallery(
      gallery.filter((img) => img.title.toLowerCase().includes(searchValue.toLowerCase())) 
    );
  }, [searchValue, gallery]);

  //   const searchImage = () => {
  //     if (idSearch === "") {
  //       addGallery(gallery);
  //       return(<h1>No image found</h1>);
  //     }
  //     const filteredGallery = gallery.filter((img) => {
  //       if (img.title.toLowerCase().includes(idSearch.toLowerCase())) {
  //         return img;
  //       }

  //     });
  //     addGallery(filteredGallery);
  //   };

  return (
    <div>
      <div className="container">
        <h1 className="top-text">Image Gallery</h1>
        <div className="search-bar">
          <input
            placeholder="search by name"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearchValue();
              }
            }}
          ></input>
          <Button
          variant="contained"
          color="primary"
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate("/nav")}
          sx={{ px: 3, borderRadius: 2 }}
        >
          Back to Projects
        </Button>
          {/* <button onClick={() => searchTitle()}>Search</button>
          <button onClick={() => searchId("")}>Remove</button> */}
        </div>
        <br></br>
        <div className="grid">
          {filteredGallery.map((img, index) => (
            <div key={index}>
              <div
                className="image-wrapper"
                key={index}
                onClick={() => selectSet(img.url)}
              >
                <img src={img.url} alt={`${img.title}`} key={img.id}></img>
                <p className="img-title">
                  {img.title} key={img.id}
                </p>
              </div>
              {selectedimg && (
                <div className="lightbox" onClick={() => selectSet(null)}>
                  <div
                    className="lightbox-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="close-btn"
                      onClick={() => selectSet(null)}
                    >
                      ✖
                    </button>
                    <img src={selectedimg} alt="Full view" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
