import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackToHub() {
    return (
        <div className="pt-32 pb-8 px-8 max-w-7xl mx-auto">
            <Link 
                href="/iimc"
                className="inline-flex items-center text-white/50 hover:text-white transition-colors duration-300 group"
            >
                <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-semibold tracking-wider uppercase text-sm">Back to Hub</span>
            </Link>
        </div>
    );
}
