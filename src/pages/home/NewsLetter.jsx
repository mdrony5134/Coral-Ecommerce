 

const NewsLetter = () => {
  return (
    <div className="bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16">
        <h2 className="title mb-12">Subscribe to our News Letter</h2>
        <form className="md:w-1/2 mx-auto text-center">
            <input type="email" id="email" name="email" placeholder="Email address..." className="h-8 bg-transparent outline-none border-b-2 pl-2 border-Black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4"/>
            <input type="submit" value={"Submit"} className="bg-black text-white px-6 py-1 rounded-sm"/>
        </form>
    </div>
  )
}

export default NewsLetter