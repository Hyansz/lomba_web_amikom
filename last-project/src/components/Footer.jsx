'use client';

import 'remixicon/fonts/remixicon.css'

export default function Footer() {
    return (
        <div style={{ backgroundImage: "linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7)), url('https://tribratanews.polri.go.id/web/image/blog.post/55721/image')", backgroundAttachment: "fixed", backgroundRepeat: "no-repeat", backgroundPosition: "bottom", backgroundSize: "cover" }}>
            <div data-aos="zoom-in" data-aos-duration="2000">
                <footer className="dark:bg-gray-900 w-11/12 m-auto mt-20 pb-10" id='contact'>
                    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <div className="sm:flex sm:items-center sm:justify-between text-center">
                            <span className="text-sm text-white sm:text-center dark:text-gray-400">&copy; 2023 PPQ Al Mahir. All Rights Reserved
                            </span>
                            <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
                                <a href="https://www.instagram.com/ppqalmahir/" target='blank' className="text-white hover:text-gray-900 dark:hover:text-white">
                                    <i className="ri-instagram-line"></i>
                                </a>
                                <a href="https://www.facebook.com/ppqalmahir" target='blank' className="text-white hover:text-gray-900 dark:hover:text-white">
                                    <i className="ri-facebook-line"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}