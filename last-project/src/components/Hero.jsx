import Navigation from "./Nav";


export default function Hero () {
    return (
        <div style={{ backgroundImage: "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url('https://tribratanews.polri.go.id/web/image/blog.post/55721/image')" }}>
            <Navigation/>
            <div className="hero lg:py-20">
                <div className="hero-text text-center lg:text-center py-20 lg:p-0 w-11/12 lg:w-5/12 m-auto xl:w-7/12 2xl:w-11/12 text-white">
                    <div data-aos="zoom-in" data-aos-duration="1500">
                        <h3 className="text-sm mb-2 lg:pb-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, ratione!</h3>
                        <h1 className="font-bold text-3xl lg:text-6xl w-72 lg:w-full lg:pr-10 m-auto mb-1 lg:pb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                        <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                        <a href='#contact'>
                            <button className='m-auto mb-2 bg-blue-600 hover:bg-slate-50 hover:text-blue-600 focus:ring-transparent transition-all duration-500 w-40 p-3 rounded-xl'>
                                <h3 className='text-md font-bold'>Lorem!</h3>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}