import Navigation from "./Nav";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Hero () {
    return (
        <div style={{ backgroundImage: "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url('https://tribratanews.polri.go.id/web/image/blog.post/55721/image')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
            <div style={{ maxWidth: "2000px", margin: "auto" }} className="m-auto" id="hero">
                <Navigation/>
                <div className="py-32 md:py-64 lg:py-20 xl:py-72 2xl:py-80">
                    <div className="hero-text text-center lg:text-center py-20 lg:p-0 w-11/12 lg:w-5/12 m-auto xl:w-7/12 2xl:w-11/12 text-white">
                        <div data-aos="zoom-in" data-aos-duration="1500">
                            <h1 className="font-bold text-3xl italic lg:text-4xl w-72 lg:w-full m-auto mb-1 lg:pb-6" id="title_hero">Tidak ada budaya yang bisa hidup jika berusaha menjadi eksklusif.</h1>
                            <h1 className='mb-6'>−Mahatma Gandhi−</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}