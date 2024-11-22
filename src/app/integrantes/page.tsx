import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

import Image from 'next/image';

import brendonGithub from '../../../public/assets/images/brendon-github.jpg'
import viniciusGithub from '../../../public/assets/images/vinicius-github.jpg'
import daviGithub from '../../../public/assets/images/david-github.jpg'
import githubIcon from '../../../public/assets/svg/github-icon-footer.svg';

import { Inter } from "next/font/google";
import { CardIntegrante } from '../../components/cardIntegrante/CardIntegrante';
const inter = Inter({ subsets: ["latin"] });

export default function Integrantes() {
    return (
      <>
        <Header/>
        <section className="container">
            <h1 className={`${inter.className} text-5xl sm:text-6xl font-semibold mb-8 text-center`}>Equipe <span className="text-corP1">STABLE</span></h1>
            <ul className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-5">
                <li>
                    <CardIntegrante
                        foto={brendonGithub}
                        nome='Brendon Brasil'
                        rm='RM559196'
                        turma='Turma TDSPY'
                        linkGithub='https://github.com/Brendon-Brasil'
                        linkLinkedin='https://www.linkedin.com/in/brendon-119970236/'
                    />
                </li>
                <li>
                    <CardIntegrante
                        foto={daviGithub}
                        nome='David Gomes'
                        rm='RM6607'
                        turma='Turma TDSPY'
                        linkGithub='https://github.com/David-Rapeckman'
                        linkLinkedin='https://www.linkedin.com/in/davidrapeckman/'
                    />
                </li>
                <li>
                    <CardIntegrante
                         foto={viniciusGithub}
                         nome='Vinícius Leandro'
                         rm='RM554728'
                         turma='Turma TDSPY'
                         linkGithub='https://github.com/ViniciusLABernardes'
                         linkLinkedin='https://www.linkedin.com/in/vinicius-leandro-de-araujo-bernardes-765a49254/'
                    />
                </li>
            </ul>
            <a href="https://github.com/stabletdspy/stable" className='bg-corP1 text-branco uppercase py-4 px-8 rounded-lg text-base font-semibold cursor-pointer hover:bg-corP5 hover:text-branco transition-colors flex items-center mx-auto gap-2 max-w-fit' target="_blank">Repositório Git <Image src={githubIcon} alt="Icone GitHub"/></a>
        </section>
        <Footer/>
      </>
    );
  }
  