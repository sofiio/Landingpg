import React from "react";
import Product from "./Product";
import { useState } from "react";
import { useTranslation, initReactI18next } from "react-i18next";

function Landmarks() {
  const { t } = useTranslation();
  const landmarks = [
    {
      id: "1",
      image: "Rectangle15.svg",
      title: t('Tsalka'),
    },
    {
      id: "2",
      image: "Rectangle16.svg",
      title: t('Tsikhisdziri'),
    },
    {
      id: "3",
      image: "Rectangle17.svg",
      title: t('Sairme'),
    },
    {
      id: "4",
      image: "Rectangle16.svg",
      title:  t('Tskaltubo'),
    },
  ];

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="container items-center mt-14 lg:mt-28" id="landmarks">
      <h2 className=" text-3xl  ">
        <strong>{t('Discover a new landmark')}</strong>
      </h2>
      <button className="text-bookmark-purple mt-4" onClick={toggleShowMore}>
        {" "}
        {showMore ? "Show Less" : "Show More"}
      </button>
      <div className="lg:grid-cols-4 grid grid-cols-1 gap-2 mt-4">
        {landmarks.slice(0, showMore ? landmarks.length : 3).map((val, key) => (
          <Product id={val.id} image={val.image} title={val.title}/> 
        ))}
      </div>
    </div>
  );
}

export default Landmarks;
