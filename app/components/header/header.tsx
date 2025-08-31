"use client"
import { Button } from "@/components/ui/button";
import "./header.scss";
import { useMenu } from "@/app/Context/MenuContext";

export default function Header() {
     const { toggleMenu, isMenuOpen } = useMenu();
     
    return (
        <header>
             <h2 className="scroll-m-20 border-b text-2xl font-semibold tracking-tight first:mt-0">
                Bradley Matjie
            </h2>
        </header>
    )
}