"use client";

import { Tabs } from "flowbite-react";
import './../css/styles.css'

export default function Contents() {
    return (
        <div className="content w-11/12 m-auto text-center py-20">
            <div data-aos="zoom-in" data-aos-duration="3000">
                <h1 className="font-semibold py-5 italic text-3xl">Wayang?</h1>
                <Tabs.Group aria-label="Default tabs" style="default" className="m-auto text-white">
                    <Tabs.Item active title="Apa Itu Wayang">
                        <div className="about py-16 md:py-8" id="about">
                            <div className="w-full m-auto text-center p-2 rounded-2xl shadow-2xl shadow-slate-300" id="content">
                                <h1 className="font-semibold py-5">Apa Itu Wayang?</h1>
                                <p className="pb-6 w-full lg:w-full m-auto md:w-full 2xl:w-11/12">
                                    Dikutip dari KBBI, wayang adalah boneka tiruan orang yang terbuat dari pahatan kulit atau kayu dan sebagainya yang dapat dimanfaatkan untuk memerankan tokoh dalam pertunjukan drama tradisional, biasanya dimainkan oleh seorang yang disebut dalang.
                                    <br />
                                    <br />
                                    Di sisi lain, wayang juga memiliki makna ayang-ayang (bayangan), karena yang dilihat adalah bayangan dalam kelir, bayangan yang diartikan sebagai angan-angan yang memiliki bentuk sesuai dengan apa yang dibayangkan. Misalnya tokoh atau orang baik digambarkan dengan badannya kurus, mata tajam dan sebagainya. Sedangkan mulut lebar, muka lebar dan seterusnya merupakan penggambaran tokoh atau orang jahat.
                                </p>
                            </div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Sejarah Wayang">
                        <div className="about py-16 md:py-8" id="about">
                            <div data-aos="zoom-in" data-aos-duration="3000">
                                <div className="w-full m-auto text-center p-2 rounded-2xl shadow-2xl shadow-slate-300" id="content">
                                    <h1 className="font-semibold py-5">Sejarah Wayang</h1>
                                    <p className="pb-6 w-full lg:w-full m-auto md:w-full 2xl:w-11/12">
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
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </div>
    );
}
