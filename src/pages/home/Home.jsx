import Banner from "./Banner"
import BestSellProducts from "./BestSellProducts"
import Category from "./Category"
import NewsLetter from "./NewsLetter"
import Product from "./Product"

const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <Product/>
        <BestSellProducts/>
        <NewsLetter/>
    </div>
  )
}

export default Home