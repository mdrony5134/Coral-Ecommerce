import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const BestSellProducts = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const [products, setProducts] = useState([]);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

   const bestSellers = products?.filter((item)=> item.status === "Best Sellers")
   console.log(bestSellers)

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="title mb-12">Best Sells Products</h2>

      <Swiper
       slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        
       {
            bestSellers.map((item)=>(
                <SwiperSlide key={item.id}>
                <Link to={`/shop/${item.id}`}>
            <img src={item.image} alt={item.title} className="mx-auto w-[288px] h-[369px] hover:scale-105 transition-all duration-300"/>
          </Link>
          <div className="mt-4 px-">
            <h4 className="text-base font-semibold mb-4 ml-6">{item.title}</h4>
            {/* <div className="flex justify-around">
              <p className="text-Black/50">{item.category}</p>
              <p className="font-semibold">${item.price}</p>
            </div> */}
            </div>
              </SwiperSlide>
            ))
        }
       
         
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default BestSellProducts;
