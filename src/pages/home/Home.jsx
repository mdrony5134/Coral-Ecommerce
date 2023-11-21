import Banner from "./Banner"
import BestSellProducts from "./BestSellProducts"
import Category from "./Category"
import Product from "./Product"

const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <Product/>
        <BestSellProducts/>
    </div>
  )
}

export default Home