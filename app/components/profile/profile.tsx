import { Button } from "@/components/ui/button";
import "./profile.scss";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

export default function Profile() {
    return (
        <section className="profile shadow-md">
            <div>
                <span className="scroll-m-20 text-1xl font-semibold tracking-tight">Full Stack Software Engineer</span>
                <h2 className="scroll-m-20 text-5xl font-semibold tracking-tight">Bradley Matjie</h2>
            </div>
            <div>
                 <Button variant="secondary" size="icon" className="size-8 button">
                    <Link href={'/portfolio'}>
                        Portfolio
                    </Link>
                    <ChevronRightIcon />
                </Button>
            </div>
        </section>
    )
}