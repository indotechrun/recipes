import React, { useState, useEffect, useRef } from "react";

function HeaderNav() {
    const prevScrollY = useRef(0);
    const [goingUp, setGoingUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const header = document.querySelector('header');
            header.classList.toggle("sticky", currentScrollY > 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp]);

    return (
        <div>
            <header className="">
                <a href="#" className="logo">food<span>Love</span></a>
                <ul className="navigation">
                    <li><a href="#banner">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#expert">Expert</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </header>
        </div>
    )
}

export default HeaderNav
