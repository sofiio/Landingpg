import React from "react";
import Product from "./Product";
import { useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";

function Hotels() {
  const { t } = useTranslation();
  const hotels = [
    {
      id: "1",
      image: "Rectangle10.svg",
      title: t('Shaory Resort'),
      price: "150$",
    },
    {
      id: "2",
      image: "Rectangle11.svg",
      title: t('Kakheti Resort'),
      price: "180$",
    },
    {
      id: "3",
      image: "Rectangle12.svg",
      title: t('Sadmeli Resort'),
      price: "90$",
    },
    {
      id: "4",
      image: "Rectangle13.svg",
      title: t('Kutaisi Resort'),
      price: "225$",
    },
    {
      id: "5",
      image: "Rectangle9.svg",
      title: t('Sataflia Resort'),
      price: "100$",
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="container items-center mt-14 lg:mt-28" id="hotels">
      <h2 className=" text-3xl  ">
        <strong>{t('Stay at the hotel')}</strong>
      </h2>
      <button className="text-bookmark-purple mt-4 " onClick={toggleShowMore}>
        {" "}
        {showMore ? "Show Less" : "Show More"}
      </button>
      <div className="lg:grid-cols-4 grid grid-cols-1 gap-2 mt-4">
        {hotels.slice(0, showMore ? hotels.length : 4).map((val, key) => (
          <Product id={val.id} image={val.image} title={val.title} price={val.price} />
        ))}
      </div>
    </div>
  );
}

export default Hotels;
