"use client";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import logo from '../../../public/assets/images/stable-icon.png';
import addFonte from '../../../public/assets/images/adicionar.png';
import addConsu from '../../../public/assets/images/consumidores.png';
import sairIcon from '../../../public/assets/svg/sairIcon.svg';
import deleteFont from '../../../public/assets/images/remover.png';
import menorConsu from '../../../public/assets/images/energia-sustentavel.png';
import somaEner from '../../../public/assets/images/raio.png';
import Link from 'next/link';
export const LateralNav = () => {
    const router = useRouter();

    const handleLogout = () => {
        sessionStorage.removeItem('clienteLogin'); 
        router.push('/login'); 
    };

    return (
        <>
            <div className='max-w-max'>
                <nav className='flex flex-col items-center h-screen justify-between py-[50px] border-r-1 border-solid border-[#E9E9E9]'>
                  <Link href="/"><Image src={logo} alt="Logo" className='w-[190px]'/></Link> 
                   <Link href="/inserir-fonte" className='p-3 bg-gradient-to-r from-green-500 to-green-700 rounded-full'><Image src={addFonte} alt='Adicionar fonte' className='w-[40px] filter invert'/></Link>
                   <Link href="/inserir-consumidor" className='p-3 bg-gradient-to-r from-green-500 to-green-700 rounded-full'><Image src={addConsu} alt='Adicionar consumidor'className='w-[40px] filter invert'/></Link>
                   <Link href="/consumo-energia-total" className='p-3 bg-gradient-to-r from-green-500 to-green-700 rounded-full'><Image src={somaEner} alt='Adicionar fonte'className='w-[40px] filter invert'/></Link>
                   <Link href="/menor-emissor" className='p-3 bg-gradient-to-r from-green-500 to-green-700 rounded-full'><Image src={menorConsu} alt='Adicionar fonte'className='w-[40px] filter invert'/></Link>
                   <Link href="/deletar-fonte" className='p-3 bg-gradient-to-r from-green-500 to-green-700 rounded-full'><Image src={deleteFont} alt='Adicionar fonte'className='w-[40px] filter invert'/></Link>
                   <ul className='flex flex-col items-center gap-10'>
                        <li><button onClick={handleLogout} className='p-3 bg-[#F0F0F0] rounded-full hover:bg-[#d6d6d6]'><Image src={sairIcon} alt='Sair'/></button></li>
                   </ul>
                </nav>
            </div>
        </>
    );
};