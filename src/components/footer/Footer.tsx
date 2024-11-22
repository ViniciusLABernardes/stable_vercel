import Link from "next/link";
import Image from 'next/image';

import logoFooter from '../../../public/assets/images/stable-footer.png';
import githubIcon from '../../../public/assets/svg/github-icon-footer.svg';


import { Inter, Roboto } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const Footer = () => {    
    return (
        <footer className="bg-preto">
            <div className='pt-[60px] pb-10 grid grid-cols-1 gap-[60px] md:grid-cols-custom md:gap-10 max-w-screen-2xl mx-auto px-5'>
                <Link href="/"><Image src={logoFooter} alt="Logo"/></Link>
                <div>
                    <h3 className={`${inter.className} text-branco text-2xl font-medium mb-8`}>Contato</h3>
                    <ul className="mb-8">
                        <li className="mb-4 text-lg"><a href="tel:+55119999999999" className={`${roboto.className} text-[#979797] hover:text-branco`}>+55 11 99999-99999</a></li>
                        <li className="mb-4 text-lg"><a href="mailto:contato@innovaautocare.com.br" className={`${roboto.className} text-[#979797] hover:text-branco`}>contato@stable.com</a></li>
                        <hr className="border-[#121212] max-w-[360px]"/>
                        <li className={`${roboto.className} text-lg mt-4 mb-4 text-[#979797]`}>Av. Paulista, 1106 - Bela Vista</li>
                        <li className={`${roboto.className} text-lg mb-4 text-[#979797]`}>São Paulo - SP</li>
                        <hr className="border-[#121212] max-w-[360px]"/>
                    </ul>
                    <div>
                        <a href="https://github.com/stabletdspy/stable" target="_blank"><Image src={githubIcon} alt="Icone GitHub"/></a>
                    </div>
                </div>
                <div className=''>
                    <h3 className={`${inter.className} text-branco text-2xl font-medium mb-8`}>Informações</h3>
                    <nav>
                        <ul>
                            <li className="mb-4 text-lg"><Link href="/integrantes"  className={`${roboto.className} text-[#979797] hover:text-branco`}>Quem somos nós</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-span-full">
                    <p className={`${roboto.className} text-cinzaEscuro md:mt-10 text-lg`}>STABLE ® Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};