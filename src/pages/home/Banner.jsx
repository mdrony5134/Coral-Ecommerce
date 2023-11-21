import { FaShoppingBag } from 'react-icons/fa'
import bannerImg from '/images/banner.png'
const Banner = () => {
  return (
    <div className='bg-primaryBG py-12 xl:px-28 px-4'>
       <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>

       <div className="md:w-1/2">
            <img src={bannerImg} alt="" />
        </div>

       <div className='md:w-1/2'>
            <h1 className='text-5xl font-light mb-5'>Collection</h1>
            <p className='text-xl mb-7'>You can explores shop may different collection from various brand here.</p>
            <button className='bg-Black text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-orange-500'>
              <FaShoppingBag className='inline-flex'/>  Shop Now
            </button>
        </div>
       
       </div>
    </div>
  )
}

export default Banner