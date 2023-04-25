import React from "react";
import Product from "./Product";
import { useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";

function Tours() {
  const { t } = useTranslation();

  const products = [
    {
      id: "1",
      image: "Rectangle6.svg",
      title: t('Sighnagi'),
      price: "40$",
    },
    {
      id: "2",
      image: "Rectangle7.svg",
      title: t('Tskaltubo'),
      price: "60$",
    },
    {
      id: "3",
      image: "Rectangle8.svg",
      title: t('Gordi'),
      price: "30$",
    },
    {
      id: "4",
      image: "Rectangle9.svg",
      title: t('Sataflia'),
      price: "75$",
    },
    {
      id: "5",
      image: "Rectangle15.svg",
      title: t('Racha'),
      price: "120$",
    },
    {
      id: "6",
      image: "Rectangle17.svg",
      title: t('Lechkhumi'),
      price: "240$",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="container items-center mt-14 lg:mt-28 " id="tours">
      <h2 className=" text-3xl  ">
        <strong>{t('Tours around the country')}</strong>
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
