'use client'
import "./footer.scss";
import { AboutIcon, ContactIcon, AboutIconActive, EducationIcon, EducationIconActive, HomeIcon, HomeIconActive, PortfolioIcon, PortfolioIconActive, ContactIconActive } from "@/app/icons/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
    const pathname = usePathname();
    console.log('pathname', pathname);

    return (
        <footer>
                <div className={`menu-items`}>
                    <div className={`menu-item ${pathname === '/' ? 'active' : ''}`}><Link href="/">{pathname === '/' ? <HomeIconActive />:<HomeIcon />}</Link></div>
                    <div className={`menu-item ${pathname === '/about' ? 'active' : ''}`}><Link href="/about">{pathname === '/about' ? <AboutIconActive />:<AboutIcon />}</Link></div>
                    <div className={`menu-item ${pathname === '/portfolio' ? 'active' : ''}`}><Link href="/portfolio">{pathname === '/portfolio' ? <PortfolioIconActive />:<PortfolioIcon />}</Link></div>
                    {/* <div className={`menu-item ${pathname === '/education' ? 'active' : ''}`}><Link href="/education">{pathname === '/education' ? <EducationIconActive /> : <EducationIcon />}</Link></div> */}
                    <div className={`menu-item ${pathname === '/projects' ? 'active' : ''}`}><Link href="/projects">{pathname === '/projects' ? <ContactIconActive /> : <ContactIcon />}</Link></div>
                </div>
        </footer>
    )
}