import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowCircleRight, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("/product.json");
        const data = await response.json();
        const foundProduct = data.find((product) => product.id == id);
        if (foundProduct) {
          // console.log("Found product:", foundProduct);
          setProduct(foundProduct);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.log("Fetch error", error);
      }
    };
    fetchProduct();
  }, [id]);

  const { title, image, description, price } = product;

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-4 flex items-center gap-1">
          <a href="/" className="text-gray-600">Home </a>
          <FaAngleRight/>
          <a href="#" className="font-bold text-black">Shop</a>
        </div>
        <div className="mt-6 sm:mt-10">
          {product && (
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
              <div>
                <img src={image} alt="" className="w-full" />
              </div>
              <div>
                <h1 className="title text-left">{title}</h1>
                <p className="mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4">{description}</p>
                <div className="flex items-center text-xl text-yellow-500 my-2 gap-1 sm:my-4">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              <p className="text-xl text-red-500 font-semibold md:text-2xl">${price}</p>

              <div className="mt-4">
               <div className="flex flex-col gap-2 w-full text-left">
               <label>Quantity</label>
                <input type="number" id="price" name="price" defaultValue={1} className="border border-gray-300 font-semibold text-sm mb-1 w-full max-w-full px-4 py-3 rounded-md outline-none m-0" />
               </div>
               <div className="text-left w-full my-2">
                <button className="flex items-center justify-center gap-2 bg-red-500 text-white w-full py-3 px-4 text-xl font-bold rounded-md"> <span>Confirm Order</span> <FaArrowCircleRight/> </button>
               </div>
              </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
