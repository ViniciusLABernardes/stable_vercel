import Image, { StaticImageData } from 'next/image';

import githubIcon from '../../../public/assets/svg/github-icon-integrantes.svg';
import linkedinIcon from '../../../public/assets/svg/linkedin-icon-integrantes.svg';

import { Inter, Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

interface CardIntegranteProps {
    foto: StaticImageData | string,
    nome: string,
    rm: string,
    turma: string,
    linkGithub: string,
    linkLinkedin: string
}

export const CardIntegrante = ({ foto, nome, rm, turma, linkGithub, linkLinkedin }: CardIntegranteProps) => {
    return (
        <article className="p-10 rounded-[10] shadow flex flex-col items-center">
            <Image src={foto} alt="" className="w-[120px] h-[120px] rounded-full"/>
            <h3 className={`${inter.className} text-2xl font-semibold mt-5 textce`}>{nome}</h3>
            <p className={`${roboto.className} text-cinzaEscuro text-2xl mt-1 text-center`}>{rm} - {turma}</p>
            <div className="flex gap-5 p-[10] mt-5">
                <a href={linkGithub} target="_blank"><Image src={githubIcon} alt="Logo Github"/></a>
                <a href={linkLinkedin} target="_blank"><Image src={linkedinIcon} alt="Logo LinkedIn"/></a>
            </div>
        </article>
    );
};