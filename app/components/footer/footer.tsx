'use client'
import "./footer.scss";
import { AboutIcon, ContactIcon, AboutIconActive, HomeIcon, HomeIconActive, PortfolioIcon, PortfolioIconActive, ContactIconActive } from "@/app/icons/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Footer() {
    const pathname = usePathname();

    return (
        <footer className={`floating-box`}>
                <div className={`menu-items`}>
                    <div className={`menu-item ${pathname === '/' ? 'active' : ''}`}>
                        <Link href="/">{pathname === '/' ? <HomeIconActive />:<HomeIcon />}
                        </Link>
                        {pathname === '/' && <span>Home</span>}
                    </div>
                    <div className={`menu-item ${pathname === '/about' ? 'active' : ''}`}>
                    <Link href="/about">{pathname === '/about' ? <AboutIconActive />:<AboutIcon />}</Link>
                     {pathname === '/about' && <span>About</span>}
                    </div>
                    <div className={`menu-item ${pathname === '/portfolio' ? 'active' : ''}`}>
                    <Link href="/portfolio">{pathname === '/portfolio' ? <PortfolioIconActive />:<PortfolioIcon />}</Link>
                     {pathname === '/portfolio' && <span>Work</span>}
                    </div>
                    {/* <div className={`menu-item ${pathname === '/education' ? 'active' : ''}`}><Link href="/education">{pathname === '/education' ? <EducationIconActive /> : <EducationIcon />}</Link></div> */}
                    <div className={`menu-item ${pathname === '/projects' ? 'active' : ''}`}>
                    <Link href="/projects">{pathname === '/projects' ? <ContactIconActive /> : <ContactIcon />}</Link>
                        {pathname === '/projects' && <span>Projects</span>}
                    </div>
                </div>
        </footer>
    )
}