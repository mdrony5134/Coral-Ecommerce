import { Link } from "react-router-dom"

const Category = () => {
    const companyLogo = [
        {id: 1, image:"/images/company/brand1.png"},
        {id: 2, image:"/images/company/brand2.png"},
        {id: 3, image:"/images/company/brand3.png"},
        {id: 4, image:"/images/company/brand4.png"},
        {id: 5, image:"/images/company/brand5.png"},
    ]
  return (
    <div className="max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28">
        <div className="flex items-center justify-around flex-wrap gap-4 py-5">
            {companyLogo.map(({id, image})=>(
                <div key={id}>
                    <img src={image} alt={id} />
                </div>
            ))}
        </div>

        {/* category product */}
        <div className="mt-8 flex flex-col md:flex-row items-center gap-4">
            <p className="bg-Black text-white uppercase font-semibold text-center inline-flex md:px-1.5 p-2 md:-rotate-90 rounded-sm">Explorer new and popular style.</p>

            <div>
                <Link to={"/"}><img src="/images/category/image1.png"  className="w-full hover:scale-105 transition-all duration-200"/></Link>
            </div>
            <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-2">
             <Link to={"/"}><img src="/images/category/image2.png"  className="w-full hover:scale-105 transition-all duration-200"/></Link>
             <Link to={"/"}><img src="/images/category/image3.png"  className="w-full hover:scale-105 transition-all duration-200"/></Link>
             <Link to={"/"}><img src="/images/category/image4.png"  className="w-full hover:scale-105 transition-all duration-200"/></Link>
             <Link to={"/"}><img src="/images/category/image5.png"  className="w-full hover:scale-105 transition-all duration-200"/></Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Category