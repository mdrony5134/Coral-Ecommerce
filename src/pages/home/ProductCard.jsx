import { Link } from "react-router-dom";

const ProductCard = ({ filterProducts }) => {
  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center gap-12 shadow-sm">
      {filterProducts.slice(0, 8).map((item) => (
        <div key={item.id} className="">
          <Link to={`/shop/${item.id}`}>
            <img src={item.image} alt={item.title} className="w-[288px] h-[369px] hover:scale-105 transition-all duration-300"/>
          </Link>
          <div className="mt-4 px-4">
            <h4 className="text-base font-semibold mb-4">{item.title}</h4>
            <div className="flex justify-between">
              <p className="text-Black/50">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
