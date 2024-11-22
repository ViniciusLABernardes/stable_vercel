"use client";
import Link from "next/link";
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import axios from 'axios';

import logo from '../../../public/assets/images/stable-icon.png';


import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function CadastroFonte() {
    const [login, setLogin] = useState("");
    const [fonte, setFonte] = useState("");
    const router = useRouter();

    useEffect(() => {
        const storedLogin = sessionStorage.getItem("clienteLogin");
        if (storedLogin) {
            setLogin(storedLogin); 
        } else {
            alert("Login não encontrado.");
        }
    }, []);
    
    const handleFonte = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!login) {
            alert("Login não encontrado. Por favor, faça login primeiro.");
            return; 
        }
    
        if (!fonte) {
            alert("Por favor, insira um tipo de fonte de energia.");
            return;
        }
   
        const data = {
            fonteEnergia: {
                tipoFonte: fonte 
            },
            login: login 
        };
    
        try {
            const response = await axios.post('http://localhost:8080/fonte', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
    
            if (response.status === 201) {
                alert("Cadastro de fonte realizado com sucesso!");
                router.push(`/dashboard?clienteLogin=${login}`);
            } else if (response.status === 400) {
                alert("Erro ao buscar login do cliente");
            }
        } catch (error) {
            console.error("Erro ao cadastrar fonte:", error);
            alert("Ocorreu um erro ao tentar cadastrar a fonte.");
        }
    };
    return (
        <>
            <section className='container formContainer'>
                <Link href='/dashboard'><Image src={logo} alt="Logo" className='logoForm'/></Link>
                <h3 className={`${inter.className} titleForm`}>Inserir fonte</h3>
                <p className={`${inter.className} subtitleForm`}>Por favor, insira a fonte desejada</p>
              
             
                <form onSubmit={handleFonte}>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Fonte de energia</label>
                        <input type="text" className="inputsForm" onChange={(e) => setFonte(e.target.value)} value={fonte}/>
                    </div>
                  
                    <button type='submit' className='botao w-full'>Cadastrar fonte</button>
                </form>
            </section>
        </>
    );
}
