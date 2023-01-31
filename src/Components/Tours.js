import React from "react";
import Product from "./Product";
import { useState } from "react";

function Tours() {
  const products = [
    {
      id: "1",
      image: "Rectangle6.svg",
      title: "Sighnagi",
      price: "40$",
    },
    {
      id: "2",
      image: "Rectangle7.svg",
      title: "Tskaltubo",
      price: "60$",
    },
    {
      id: "3",
      image: "Rectangle8.svg",
      title: "Gordi",
      price: "30$",
    },
    {
      id: "4",
      image: "Rectangle9.svg",
      title: "Sataflia",
      price: "75$",
    },
    {
      id: "5",
      image: "Rectangle15.svg",
      title: "Racha",
      price: "120$",
    },
    {
      id: "6",
      image: "Rectangle17.svg",
      title: "Lechkhumi",
      price: "240$",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="container items-center mt-14 lg:mt-28 ">
      <h2 className=" text-3xl  ">
        <strong>Tours around the country</strong>
      </h2>
      <button className="text-bookmark-purple mt-4 " onClick={toggleShowMore}>
        {" "}
        {showMore ? "Show Less" : "Show More"}
      </button>
      <div className="lg:grid-cols-4 grid grid-cols-1 gap-2 mt-4">
        {products.slice(0, showMore ? products.length : 4).map((val, key) => (
          <Product id={val.id} image={val.image} title={val.title} price={val.price} />
        ))}
      </div>
    </div>
  );
}

export default Tours;
