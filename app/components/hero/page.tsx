
import './hero.scss';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, Monitor } from 'lucide-react';

export default function Hero() {
    
    return (
    <section className="hero" style={{backgroundImage: `url('/media/Wave1.svg')`,backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center top'}}>
        <div className="hero-text">
            <p>Hi there👋</p>
            <h1 className='scroll-m-20 text-2xl font-semibold tracking-tight p-2'>A human being first,<br/>
                A Software Engineer at heart.
            </h1>
            <div className="hero-text-buttons mt-4">
                <Button asChild>
                 <a href="https://wa.me/+27729509295?text='Hi Bradley i have a project i want to discuss with you" className="hire-me">
                        Lets talk. <ChevronRightIcon />
                    </a>
                </Button>
                <Button variant={"outline"} asChild>
                    <Link href={'/portfolio'} className='hire-me'>
                        My work <Monitor/>
                    </Link>
                </Button>
            </div>
        </div>
        <div className="hero-image">
            <div className="hero-image-1" style={{ backgroundImage: `url("/media/hero-image.jpeg")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </div>
            <h2 className="hero-image-1-h2-one">React Enthusiast</h2>
                <h2 className="hero-image-1-h2-two">Passionate about UI/UX</h2>
                <h2 className="hero-image-1-h2-three">JavaScript Expert</h2>
                <h2 className="hero-image-1-h2-four">Strong Problem Solver</h2>
        </div>
    </section>
    )
}