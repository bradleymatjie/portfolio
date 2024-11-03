'use client'
import { useState } from "react";
import "./footer.scss";
import { AboutIcon, ContactIcon, AboutIconActive, EducationIcon, EducationIconActive, HomeIcon, HomeIconActive, PortfolioIcon, PortfolioIconActive, ContactIconActive } from "@/app/icons/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
    // const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    console.log('pathname', pathname);

    return (
        <footer>
                <div className={`menu-items`}>
                    <div className={`menu-item ${pathname === '/' ? 'active' : ''}`}><Link href="/">{pathname === '/' ? <HomeIconActive />:<HomeIcon />}</Link></div>
                    <div className={`menu-item ${pathname === '/about' ? 'active' : ''}`}><Link href="/about">{pathname === '/about' ? <AboutIconActive />:<AboutIcon />}</Link></div>
                    <div className={`menu-item ${pathname === '/portfolio' ? 'active' : ''}`}><Link href="/portfolio">{pathname === '/portfolio' ? <PortfolioIconActive />:<PortfolioIcon />}</Link></div>
                    <div className={`menu-item ${pathname === '/education' ? 'active' : ''}`}><Link href="/education">{pathname === '/education' ? <EducationIconActive /> : <EducationIcon />}</Link></div>
                    <div className={`menu-item ${pathname === '/contact' ? 'active' : ''}`}><Link href="/contact">{pathname === '/contact' ? <ContactIconActive /> : <ContactIcon />}</Link></div>
                </div>
                {/* <div className={`hamburger-menu`} onClick={() => setIsOpen(!isOpen)}>
                    <div className={`line ${isOpen ? 'open' : ''}`} ></div>
                </div> */}
        </footer>
    )
}