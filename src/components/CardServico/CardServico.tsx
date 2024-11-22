import Image from 'next/image';

import { Inter, Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

interface CardServicoProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
}

export const CardServico = ({ imageSrc, imageAlt, title, description }: CardServicoProps) => {
    return (
        <article className="flex flex-col items-center md:items-start">
            <Image 
                src={imageSrc} 
                alt={imageAlt} 
                width={64} 
                height={64}
                className="mb-[10px]"
            />
            <h3 className={`${inter.className} text-3xl mb-5 font-semibold text-center md:text-start`}>{title}</h3>
            <p className={`${roboto.className} text text-center md:text-start`}>{description}</p>
        </article>
    );
};