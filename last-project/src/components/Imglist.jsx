// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./../css/styles2.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import Cards from "./Card";

export default function App() {
    return (
        <div className="pt-28 w-11/12 m-auto" style={{ maxWidth: "2000px", margin: "auto" }} id='about3'>
            <div className="text-center 2xl:pb-10">
                <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl pb-3">Apa Saja Jenis-Jenis Wayang</h1>
                <p className="px-10">Tidak hanya wayang kulit, tetapi wayang memiliki banyak macam seperti berikut</p>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper p-10 m-auto hidden 2xl:block"
            >
                <SwiperSlide>
                    <Cards 
                        img={"https://media.suara.com/pictures/970x544/2021/03/28/86598-wayang-orang.jpg"}
                        name={"Wayang Orang"}
                        desc={"Wayang yang dijalankan atau dimainkan secara langsung oleh manusia."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://r1.community.samsung.com/t5/image/serverpage/image-id/5014401i5254999A192C7846/image-size/large?v=v2&px=999"}
                        name={"Wayang Golek"}
                        desc={"Wayang yang terbuat dari kayu kemudian dibentuk menjadi boneka dan dimainkan di atas panggung."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://scontent.xx.fbcdn.net/v/t1.15752-9/371907253_1247174559287781_3122450202811684782_n.jpg?stp=dst-jpg_p403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=bwtGdnTXN1sAX8jfvCT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSSf19pypcSi0fSFfEUqRgPM6ApOrPIeVn8K-ZgFxwInw&oe=652D31BA"}
                        name={"Wayang Beber"}
                        desc={"Wayang ini terbuat dari kertas yang berisikan lukisan kemudian digulung dan direntangkan (dibeber) saat pertunjukan."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://scontent.xx.fbcdn.net/v/t1.15752-9/371925787_819131352932181_6857191775696171918_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=lr4YpRh11ZoAX-hMOyf&_nc_oc=AQnBzWzgG6zPmSqwVhV6KcWAvENfgKh97T08_o46PPk03Ergk9gT9cg2hz4MQoFPkph_bgSk1FlpviMIXzlFHITe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS-f8z-tOf49EGR53kCTbv_J43k-I3d8oTD-kJzse8DYg&oe=652D2454"}
                        name={"Wayang Klitik"}
                        desc={"wayang atau pemain di panggung terbuat dari kayu pipih berbentuk boneka."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://radarcirebon.id/wp-content/uploads/2023/06/Pandawa.png"}
                        name={"Wayang Kulit"}
                        desc={"Wayang ini merupakan salah satu jenis wayang di Indonesia yang dimainkan oleh seorang pemain di panggung dan terbuat dari kulit hewan atau tulang."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards
                        img={"https://indonesiakaya.com/wp-content/uploads/2020/10/Meskipun_hanya_dimainkan_dengan_jari_aksi_laga_yang_ditampilkan_dalam_wayang_potehi_memerlukan_keahlian_khusus_2.jpg"}
                        name={"Wayang Potehi"}
                        desc={"Wayang tersebut terbuat kain perca, merupakan kesenian tradisional China yang diyakini sudah ada sejak tahun 265 hingga 420 masehi dan dikenal di Indonesia pada abad ke 16"}
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper2 p-10 m-auto hidden md:block lg:hidden xl:hidden 2xl:hidden"
            >
                <SwiperSlide>
                    <Cards 
                        img={"https://media.suara.com/pictures/970x544/2021/03/28/86598-wayang-orang.jpg"}
                        name={"Wayang Orang"}
                        desc={"Wayang yang dijalankan atau dimainkan secara langsung oleh manusia."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://r1.community.samsung.com/t5/image/serverpage/image-id/5014401i5254999A192C7846/image-size/large?v=v2&px=999"}
                        name={"Wayang Golek"}
                        desc={"Wayang yang terbuat dari kayu kemudian dibentuk menjadi boneka dan dimainkan di atas panggung."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://scontent.xx.fbcdn.net/v/t1.15752-9/371907253_1247174559287781_3122450202811684782_n.jpg?stp=dst-jpg_p403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=bwtGdnTXN1sAX8jfvCT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSSf19pypcSi0fSFfEUqRgPM6ApOrPIeVn8K-ZgFxwInw&oe=652D31BA"}
                        name={"Wayang Beber"}
                        desc={"Wayang ini terbuat dari kertas yang berisikan lukisan kemudian digulung dan direntangkan (dibeber) saat pertunjukan."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://scontent.xx.fbcdn.net/v/t1.15752-9/371925787_819131352932181_6857191775696171918_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=lr4YpRh11ZoAX-hMOyf&_nc_oc=AQnBzWzgG6zPmSqwVhV6KcWAvENfgKh97T08_o46PPk03Ergk9gT9cg2hz4MQoFPkph_bgSk1FlpviMIXzlFHITe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS-f8z-tOf49EGR53kCTbv_J43k-I3d8oTD-kJzse8DYg&oe=652D2454"}
                        name={"Wayang Klitik"}
                        desc={"wayang atau pemain di panggung terbuat dari kayu pipih berbentuk boneka."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://radarcirebon.id/wp-content/uploads/2023/06/Pandawa.png"}
                        name={"Wayang Kulit"}
                        desc={"Wayang ini merupakan salah satu jenis wayang di Indonesia yang dimainkan oleh seorang pemain di panggung dan terbuat dari kulit hewan atau tulang."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards
                        img={"https://indonesiakaya.com/wp-content/uploads/2020/10/Meskipun_hanya_dimainkan_dengan_jari_aksi_laga_yang_ditampilkan_dalam_wayang_potehi_memerlukan_keahlian_khusus_2.jpg"}
                        name={"Wayang Potehi"}
                        desc={"Wayang tersebut terbuat kain perca, merupakan kesenian tradisional China yang diyakini sudah ada sejak tahun 265 hingga 420 masehi dan dikenal di Indonesia pada abad ke 16"}
                    />
                </SwiperSlide>
            </Swiper>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper3 p-10 m-auto block md:hidden lg:hidden xl:hidden 2xl:hidden"
            >
                <SwiperSlide>
                    <Cards 
                        img={"https://media.suara.com/pictures/970x544/2021/03/28/86598-wayang-orang.jpg"}
                        name={"Wayang Orang"}
                        desc={"Wayang yang dijalankan atau dimainkan secara langsung oleh manusia."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://r1.community.samsung.com/t5/image/serverpage/image-id/5014401i5254999A192C7846/image-size/large?v=v2&px=999"}
                        name={"Wayang Golek"}
                        desc={"Wayang yang terbuat dari kayu kemudian dibentuk menjadi boneka dan dimainkan di atas panggung."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://scontent.xx.fbcdn.net/v/t1.15752-9/371907253_1247174559287781_3122450202811684782_n.jpg?stp=dst-jpg_p403x403&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=bwtGdnTXN1sAX8jfvCT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSSf19pypcSi0fSFfEUqRgPM6ApOrPIeVn8K-ZgFxwInw&oe=652D31BA"}
                        name={"Wayang Beber"}
                        desc={"Wayang ini terbuat dari kertas yang berisikan lukisan kemudian digulung dan direntangkan (dibeber) saat pertunjukan."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://scontent.xx.fbcdn.net/v/t1.15752-9/371925787_819131352932181_6857191775696171918_n.jpg?stp=dst-jpg_s600x600&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=lr4YpRh11ZoAX-hMOyf&_nc_oc=AQnBzWzgG6zPmSqwVhV6KcWAvENfgKh97T08_o46PPk03Ergk9gT9cg2hz4MQoFPkph_bgSk1FlpviMIXzlFHITe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS-f8z-tOf49EGR53kCTbv_J43k-I3d8oTD-kJzse8DYg&oe=652D2454"}
                        name={"Wayang Klitik"}
                        desc={"wayang atau pemain di panggung terbuat dari kayu pipih berbentuk boneka."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards 
                        img={"https://radarcirebon.id/wp-content/uploads/2023/06/Pandawa.png"}
                        name={"Wayang Kulit"}
                        desc={"Wayang ini merupakan salah satu jenis wayang di Indonesia yang dimainkan oleh seorang pemain di panggung dan terbuat dari kulit hewan atau tulang."}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Cards
                        img={"https://indonesiakaya.com/wp-content/uploads/2020/10/Meskipun_hanya_dimainkan_dengan_jari_aksi_laga_yang_ditampilkan_dalam_wayang_potehi_memerlukan_keahlian_khusus_2.jpg"}
                        name={"Wayang Potehi"}
                        desc={"Wayang tersebut terbuat kain perca, merupakan kesenian tradisional China yang diyakini sudah ada sejak tahun 265 hingga 420 masehi dan dikenal di Indonesia pada abad ke 16"}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
