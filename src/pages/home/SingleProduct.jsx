import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const SingleProduct = () => {
    const[products, setProducts] = useState([])
    const {id} = useParams()
    
      useEffect(() => {
        const fetchProduct = async () => {
            try {
              const response = await fetch("/product.json");
              const data = await response.json();
              const product = data.filter((product)=> product.id === id)
              console.log(product)
              setProducts(product);
            } catch (error) {
              console.log("fetch error", error);
            }
          };
        fetchProduct();
      }, [id]);

      const {image} = products;

  return (
    <div className="mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="p-3 max-w-7xl m-auto">
            <div className="mt-6 sm:mt-10">
                <div>
                    <div>
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct