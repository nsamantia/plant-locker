import React, { useState, useEffect } from "react";
import axios from "axios";

const InPlant = (props) => {
  const [plant, setPlant] = useState("");
  const [image, setImage] = useState("");
  const [comment, setComment] = useState("");

  useEffect(() => {
    getPlant();
    return () => {
      setPlant([]);
    };
  }, []);

  const getPlant = () => {
    axios
      .get(`/api/plants/plant/${props.match.params.id}`)
      .then((res) => {
        setPlant(res.data[0].plant);
        setImage(res.data[0].plant_image);
        setComment(res.data[0].plant_comment);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <p>InPLant.js</p>
      <p>{plant}</p>
      <img src={image} alt="plant" />
      <p>{comment}</p>
    </div>
  );
};

export default InPlant;
