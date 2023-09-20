import AOS from 'aos';
import 'aos/dist/aos.css';
import './../css/style1.css'
import './../css/styles.css'
AOS.init();

export default function Sejarah () {
    return (
        <div className='content' style={{ maxWidth: "2000px", margin: "auto" }} id='about2'>
            <div className="pengantar lg:p-10 xl:px-20 py-16 md:py-16 lg:py-20 xl:py-32 2xl:py-36 gap-24 flex flex-col md:flex-col lg:flex-row">
                <div className="img-hero w-11/12 m-auto pt-12 md:w-7/12 lg:m-auto lg:p-0">
                    <div data-aos="fade-left" data-aos-duration="1500">
                        <img className='rounded-3xl' src="https://s3-ceph.indoteam.id/chatnews-bucket-production/wp-content/production/uploads/2022/07/20184921/kulit3-1536x942.jpg" alt="" />
                    </div>
                </div>
                <div className="hero-text text-center md:text-md md:p-12 lg:text-left py-20 lg:p-0 w-11/12 lg:w-6/12 m-auto xl:w-7/12 2xl:w-9/12">
                    <div data-aos="zoom-in" data-aos-duration="1500">
                        <h1 className="font-bold text-3xl pb-3 lg:text-3xl w-72 lg:w-full m-auto mb-1 md:text-4xl md:pb-5">Sejarah Wayang</h1>
                        <p className='md:text-xl text-justify'>
                            Asal-usul kesenian wayang hingga kini masih belum diketahui secara pasti. Para ahli memperkirakan bahwa wayang sudah ada dan berkembang sejak zaman kuno sekitar 1500 SM, jauh sebelum agama dan budaya dari luar masuk ke Indonesia. Beberapa ahli mengungkapkan bahwa wayang merupakan kesenian yang berasal dari China, ada yang mengatakan wayang berasal dari wiracarita Mahabharata dan Ramayana.
                            <br />
                            <br />
                            Namun, tidak sedikit yang menyebutkan bahwa wayang merupakan produk asli Indonesia khususnya Jawa, hal ini dikaitkan dengan inisiasi dan penghormatan terhadap nenek moyang, serta diperkuat dengan istilah-istilah teknis dalam pertunjukan yang khas Jawa.
                            <br />
                            <br />
                            Selain juga terdapat perbedaan bentuk wayang yang pada mulanya tidak sama dengan bentuk wayang sekarang. Bagaimana bentuk pertunjukan dan wayang pada awal mulanya tidak dapat diketahui secara pasti. Informasi tertua mengenai pertunjukan wayang termuat di dalam sebuah prasasti dari Kerajaan Mataram Kuno dari abad ke-9. Selanjutnya berkembang di era kerajaan Kediri dan Kerajaan Majapahit pada abad ke-15.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}