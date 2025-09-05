'use client'
import "./footer.scss";
import { AboutIcon, ContactIcon, AboutIconActive, EducationIcon, EducationIconActive, HomeIcon, HomeIconActive, PortfolioIcon, PortfolioIconActive, ContactIconActive } from "@/app/icons/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
    const pathname = usePathname();
    console.log('pathname', pathname);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <footer className={`floating-box ${isSticky ? "sticky" : ""}`}>
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