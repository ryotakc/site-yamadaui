import {Twitter, Github ,Mail, Linkedin, Instagram} from "lucide-react";
import Link from "next/link";


export default function Sns(){

    return (
        <div className="flex gap-3">
            <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <Github color="#333"/>
            </Link>
            <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <Linkedin color="#0077B5"/>
            </Link>
            <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <Instagram color="#E1306C"/>
            </Link>
            <Link href="mailto:example@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail color="#333"/>
            </Link>
            
            
            
            
        </div>
    )
}
