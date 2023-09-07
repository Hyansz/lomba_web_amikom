import AOS from 'aos';
import 'aos/dist/aos.css';
import './../css/style1.css'
import './../css/styles.css'
AOS.init();

export default function Pengantar () {
    return (
        <div className='content'>
            <div className="hero lg:p-10 xl:px-20 bg-pink-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-purple-500 xl:bg-green-500 2xl:bg-blue-500 py-16 md:py-16 lg:py-20 xl:py-32 2xl:py-36">
                <div className="img-hero w-11/12 m-auto pt-12 md:w-7/12 lg:m-auto lg:p-0">
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <img className='rounded-3xl' src="https://s3-ceph.indoteam.id/chatnews-bucket-production/wp-content/production/uploads/2022/07/20184921/kulit3-1536x942.jpg" alt="" />
                    </div>
                </div>
                <div className="hero-text text-center md:text-md md:p-12 lg:text-left py-20 lg:p-0 w-11/12 lg:w-6/12 m-auto xl:w-7/12 2xl:w-9/12">
                    <div data-aos="zoom-in" data-aos-duration="1500">
                        <h1 className="font-bold text-3xl lg:text-3xl w-72 lg:w-full m-auto mb-1 md:text-4xl md:pb-5">Pengantar</h1>
                        <p className='md:text-xl'>Wayang merupakan salah satu keanekaragaman budaya yang ada di Jawa. Hingga saat ini pertunjukan wayang masih jadi favorit bagi masyarakat Jawa. Namun di zaman modern ini banyak dari kalangan pemuda-pemuda tidak tahu tentang budaya ini. Padahal wayang sudah menjadi ciri khas negara Indonesia.  Disini kami akan menjelaskan seputar karya seni wayang Indonesia.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}