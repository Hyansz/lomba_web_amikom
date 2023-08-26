"use client";

import { Navbar } from "flowbite-react";
import "./../css/style1.css"

export default function Navigation() {
    return (
        <div className="w-11/12 m-auto">
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
                        <p className="link">About</p>
                    </Navbar.Link>
                    <Navbar.Link href="#about" className="text-white">
                        <p className="link">Link 1</p>
                    </Navbar.Link>
                    <Navbar.Link href="#about" className="text-white">
                        <p className="link">Link 2</p>
                    </Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
