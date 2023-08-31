"use client";

import { Tabs } from "flowbite-react";

export default function Contents() {
    return (
        <div className="w-11/12 m-auto text-center py-20">
            <div data-aos="zoom-in" data-aos-duration="3000">
                <h1 className="font-semibold py-5 italic text-3xl">Wayang?</h1>
                <Tabs.Group aria-label="Default tabs" style="default" className="m-auto">
                    <Tabs.Item active title="Apa Itu Wayang">
                        <div className="about py-16 md:py-8" id="about">
                            <div className="bg-slate-300 w-full m-auto text-center p-2 rounded-2xl ring-4 ring-slate-200 shadow-2xl shadow-slate-300">
                                <h1 className="font-semibold py-5">Apa Itu Wayang?</h1>
                                <p className="pb-6 w-full lg:w-full m-auto md:w-full 2xl:w-11/12">
                                    Dikutip dari KBBI, wayang adalah boneka tiruan orang yang terbuat dari pahatan kulit atau kayu dan sebagainya yang dapat dimanfaatkan untuk memerankan tokoh dalam pertunjukan drama tradisional, biasanya dimainkan oleh seorang yang disebut dalang.
                                    <br />
                                    <br />
                                    Di sisi lain, wayang juga memiliki makna ayang-ayang (bayangan), karena yang dilihat adalah bayangan dalam kelir, bayangan yang diartikan sebagai angan-angan yang memiliki bentuk sesuai dengan apa yang dibayangkan. Misalnya tokoh atau orang baik digambarkan dengan badannya kurus, mata tajam dan sebagainya. Sedangkan mulut lebar, muka lebar dan seterusnya merupakan penggambaran tokoh atau orang jahat.
                                </p>
                                {/* <a href="https://doc-14-94-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/5q1kfchkaomos0fvkb4gh55fvfp9j8ak/8i5eurgt9ijavt0g87n76a85el5vl0eh/1687765725000/3/104520605745824761691/APznzabNbskzOQBOe_ZxuP4OUoyVH3eqN8q6ltEtxSck8HzRMCivX8U35ClPBH3LeYFMRi8-VHmR_0B42q-pZIw6TMDEfHwPS2UWKYRBcDEAvpoLjA0MpxmlRHrvR7D4oL9gpwVrDt8__MT3JFwau9-T8mn2ITr9RyUxKh97fhRrTQnb1UArbALhgjBE-bq9NO2VbOvFnjCk_jpbR8Nw0GvMJHPDFp4U7wlwAUWw4vx2NRCW60FvMLN0lUqmRgfIK8CaL6c77vSQNUFQhp0KlvPcOxtZd2J3LpkjJ6QSSt_ZZ3-HgoVqrnZW1JtvKM6vabklMqb3CalURKl6Ji5aFuZ-XTHqlPk3D7Wm-63h_nHW_Cguwb3nvJ-yHAl_kp_90KZE-pnn7x88n--t-BZArbE8cTWOOETOzg==?authuser=0&nonce=dnmtm7cg1dp8e&user=104520605745824761691&hash=88btpqu53l9dsb7r5fhe54s6v579aado" target="blank">
                                    <button className="px-5 py-3 mb-5 bg-slate-200 rounded-xl">Lihat Selengkapnya</button>
                                </a> */}
                            </div>
                        </div>
                    </Tabs.Item>
                    <Tabs.Item title="Sejarah Wayang">
                        <div className="about py-16 md:py-8" id="about">
                            <div data-aos="zoom-in" data-aos-duration="3000">
                                <div className="bg-slate-300 w-full m-auto text-center p-2 rounded-2xl ring-4 ring-slate-200 shadow-2xl shadow-slate-300">
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
                                    {/* <a href="https://ppqita.com/profile/" target="blank">
                                        <button className="px-5 py-3 mb-5 bg-slate-200 rounded-xl">Lihat Selengkapnya</button>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </Tabs.Item>
                </Tabs.Group>
            </div>
        </div>
    );
}
