"use client";

import { Navbar } from "flowbite-react";
import "./../css/style1.css"

export default function Navigation() {
    return (
        <div className="w-11/12 m-auto p-0">
            <Navbar id="navbar">
                <Navbar.Brand>
                    <a href="#hero">
                        <h1 className="italic">BudayaKu</h1>
                    </a>
                </Navbar.Brand>
                <div>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#hero" className="text-white">
                        <p className="link">Home</p>
                    </Navbar.Link>
                    <Navbar.Link href="#about" className="text-white">
                        <p className="link">Wayang?</p>
                    </Navbar.Link>
                    <Navbar.Link href="#about" className="text-white">
                        <p className="link">Sejarah</p>
                    </Navbar.Link>
                    <Navbar.Link href="#about" className="text-white">
                        <p className="link">Galerry</p>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
