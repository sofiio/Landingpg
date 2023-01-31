function Product({ title, image, price }) {
  return (
    <div>
      <img src={image} alt="" className="w-full" />

      <div className=" rounded-md bg-[#F6FBF4] my-4 ">
        <h2 className="text-[20px]">{title}</h2>
        <h2 className="text-[20px] text-[#4B8673]">{price}</h2>
      </div>
    </div>
  );
}

export default Product;
