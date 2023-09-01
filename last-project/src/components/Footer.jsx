'use client';

import 'remixicon/fonts/remixicon.css'

export default function Footer() {
    return (
        <div data-aos="zoom-in" data-aos-duration="2000">
            <footer className="dark:bg-gray-900 w-11/12 m-auto mt-20" id='contact'>
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between text-center">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">&copy; 2023 PPQ Al Mahir. All Rights Reserved
                        </span>
                        <div className="flex mt-4 space-x-6 justify-center sm:mt-0">
                            <a href="https://www.instagram.com/ppqalmahir/" target='blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <i className="ri-instagram-line"></i>
                            </a>
                            <a href="https://www.facebook.com/ppqalmahir" target='blank' className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <i className="ri-facebook-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}