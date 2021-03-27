import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../breadcrumb";
import SearchBar from "../searchBar";
import { getItemById } from "./../../services";
import "./styles.scss";

const Item = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});

  const fetchData = async () => {
    const data = await getItemById(id);
    setItem(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(item);

  if (Object.keys(item).length === 0) {
    return null;
  } else {
    const {
      picture,
      condition,
      soldQuantity,
      title,
      price,
      categories,
    } = item.item;
    console.log(item);
    return (
      <>
        <SearchBar />
        <Breadcrumb info={categories} prod={title} />
        <div className="itemContainer">
          <div className="itemInfo">
            <img src={picture} alt="Item Picture" />
            <div className="price">
              <h5>{`${
                condition == "new" ? "Nuevo" : "Usado"
              } - ${soldQuantity} vendidos`}</h5>
              <h3>{title}</h3>
              <h2>{`$ ${price.amount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`}</h2>
              <button>Comprar</button>
            </div>
          </div>
          <div className="description">
            <h3>Descripción del producto</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </>
    );
  }
};

export default Item;
