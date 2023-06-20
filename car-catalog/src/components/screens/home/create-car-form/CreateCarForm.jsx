import { useState } from "react";
import styles from "./CreateCarForm.module.scss";

const CreateCarForm = ({setCars}) => {
  const [name, setName] = useState(""); // useState помогает управлять состоянием
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const createCar = (e) => {
    e.preventDefault();
    
    setCars(prev => [{ id: prev.length + 1, name, price, image }, ...prev])
  };

  return (
    <form className={styles.form}>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        placeholder="Image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />

      <button className="btn" onClick={(e) => createCar(e)}>Create</button>
    </form>
  );
};

export default CreateCarForm;
