import AOS from 'aos';
import 'aos/dist/aos.css';
import './../css/style1.css'
import './../css/styles.css'
AOS.init();

export default function Pengantar2 () {
    return (
        <div className='content'>
            <div className="hero lg:p-10 xl:px-20 bg-pink-500 sm:bg-green-500 md:bg-yellow-500 lg:bg-purple-500 xl:bg-green-500 2xl:bg-blue-500 py-16 md:py-16 lg:py-20 xl:py-32 2xl:py-36 gap-20">
                <div className='w-11/12 m-auto'>
                    <div className="img-hero w-full m-auto pt-12 md:w-7/12 lg:m-auto lg:p-0">
                        <p className='pt-5 pb-28' id='t-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsum!</p>
                        {/* <div data-aos="fade-left" data-aos-duration="1500"> */}
                            <img className='rounded-3xl' src="https://s3-ceph.indoteam.id/chatnews-bucket-production/wp-content/production/uploads/2022/07/20184921/kulit3-1536x942.jpg" alt="" />
                        {/* </div> */}
                        <p className='pt-5 pb-28' id='t-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsum!</p>
                    </div>
                    <div className="img-hero m-auto pt-12 lg:m-auto lg:p-0">
                        {/* <div data-aos="fade-left" data-aos-duration="1500"> */}
                            <img className='rounded-3xl' style={{ width: "1500px" }} src="https://s3-ceph.indoteam.id/chatnews-bucket-production/wp-content/production/uploads/2022/07/20184921/kulit3-1536x942.jpg" alt="" />
                        {/* </div> */}
                    </div>
                    <div className="img-hero w-full m-auto pt-12 md:w-7/12 lg:m-auto lg:p-0">
                        <p className='pb-5 pt-28' id='t-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsum!</p>
                        {/* <div data-aos="fade-left" data-aos-duration="1500"> */}
                            <img className='rounded-3xl' src="https://s3-ceph.indoteam.id/chatnews-bucket-production/wp-content/production/uploads/2022/07/20184921/kulit3-1536x942.jpg" alt="" />
                        {/* </div> */}
                        <p className='pb-5 pt-28' id='t-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, ipsum!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}