import Image from 'next/image';

import { Header } from '@/components/header/Header';

import Consumidores from '../../public/assets/images/consumidores.png';
import Balanca from '../../public/assets/images/balancas.png';
import Energia from '../../public/assets/images//sustainable-energy.png';
import { Inter, Roboto } from "next/font/google";
import { Footer } from '@/components/footer/Footer';
import { CardServico } from '@/components/CardServico/CardServico';
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function PageHome() {
  return (
    <>
      <Header/>    
      <main className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="self-center order-2 md:order-1 texto_main">
          <h1 className={`${inter.className} text-5xl sm:text-6xl font-semibold mb-8`}>
            Uma nova maneira de economizar <span className="text-corP1">energia</span>
          </h1>
          <p className="text mb-5">
           Crie aqui sua conta para gerenciar suas fontes de energia
          </p>
          <Link className="botao" href="/login">FAZER LOGIN</Link>
        </div>
        <div className="order-1 md:order-2">
        <div
          className="imagem_main w-full h-[350px] sm:h-[477px] md:h-[554px] bg-center bg-cover rounded-tl-[140px] rounded-tr-[20px] rounded-br-[140px] rounded-bl-[20px]"
          style={{ backgroundImage: `url("../../assets/images/imagem-main.png")` }}
          />
        </div>
      </main>

      <section className="bg-cinzaClaro" id="sobre-serviço" aria-label="Sobre o Serviço">
        <div className="container flex flex-col gap-16 justify-center">

          <div className="flex flex-col">
            <h2 className={`${inter.className} text-4xl sm:text-5xl font-semibold mb-5 text-center`}>Por que utilizar o <span className="text-corP1">serviço STABLE</span>?</h2>
            <p className={`${roboto.className} text text-center w-fullmd:w-1/2 mx-auto`}>Nossa tecnologia inovadora simplifica o processo de realocação e melhora a eficiência energética de suas fontes de enêrgia.</p>
          </div>     
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CardServico
              imageSrc={Balanca}
              imageAlt="Realocação"
              title="Realocação precisa e 100%  online"
              description="Nossa tecnologia inovadora simplifica processos e melhora a eficiência nos centros automotivos."
            />
            <CardServico
              imageSrc={Energia}
              imageAlt="energia"
              title="Facíl de inserir novas energias"
              description="Basta apenas clicar em adicionar nova fonte para associala a sua empresa!"
            />
            <CardServico
              imageSrc={Consumidores}
              imageAlt="consumidores"
              title="Adicione novos consumidores"
              description="Adicione novos consumidores a sua empresa de acordo com a região deles e a fonte que será utilizada inicialmente"
            />
          </div>
          <Link href="/login" className="botao text-center">UTILIZE O SERVIÇO</Link>

        </div>
      </section>

    
     
      <Footer/>
    </>
  );
}
