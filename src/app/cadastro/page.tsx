"use client"
import Link from "next/link";
import Image from 'next/image';

import logoHeader from '../../../public/assets/images/stable-icon.png';
import { Inter } from "next/font/google";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Cadastro() {
    const router = useRouter();
    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [dataAbertura, setDataAbertura] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confSenha, setConfSenha] = useState('');

    const handleCadastro = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (senha !== confSenha) {
            alert("As senhas não coincidem!");
            return;
        }


        const data = {
            nome,
            cnpj,
            dataAbertura,
            email,
            telefone,
            login,
            senha,
    
        };

        try {
            const response = await axios.post('http://localhost:8080/empresa', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });
            if (response.status === 201) {
                sessionStorage.setItem('clienteLogin', login);
                alert("Cadastro realizado com sucesso!");
                router.push(`/dashboard?clienteLogin=${login}`); 
            }
            if (response.status === 400){
                alert("Erro ao buscar login do cliente")
            }
        } catch (error) {
            console.error("Erro ao criar cadastro:", error);
            alert("Ocorreu um erro ao tentar cadastrar.");
        }
    };
    return (
        <>
            <section className='container formContainer'>
               
                   
                  

                <Link href="/"><Image src={logoHeader} alt="logo" className='logoForm' /></Link>
                <h3 className={`${inter.className} titleForm`}>Cadastro</h3>
                <p className={`${inter.className} subtitleForm`}>Complete com seus dados para criar sua conta</p>

                <form onSubmit={handleCadastro}>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Nome Empresa</label>
                        <input type="text" placeholder="Eletropaulo" className="inputsForm" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idCnpj" className={`${inter.className} labelForm`}>CNPJ</label>
                        <input
                        type="text"
                        id="idCnpj"
                        placeholder="XX.XXX.XXX/0001-XX"
                        required
                        minLength={18}
                        maxLength={18}
                        name="txtCnpj"
                        className="inputsForm"
                        value={cnpj} 
                        onChange={(e) => {
                            let formattedCnpj = e.target.value.replace(/\D/g, "");  
                            formattedCnpj = formattedCnpj.replace(/(\d{2})(\d)/, "$1.$2");
                            formattedCnpj = formattedCnpj.replace(/(\d{3})(\d)/, "$1.$2"); 
                            formattedCnpj = formattedCnpj.replace(/(\d{3})(\d{4})/, "$1/$2"); 
                            formattedCnpj = formattedCnpj.replace(/(\d{4})(\d{2})$/, "$1-$2"); 
                        
                            setCnpj(formattedCnpj); 
                        }}
                        />
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Data abertura</label>
                        <input type="text" placeholder="00/00/2003" className="inputsForm" value={dataAbertura} onChange={(e) => setDataAbertura(e.target.value)}/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Email</label>
                        <input type="email" id="idEmail" placeholder="exemplo@email.com" className="inputsForm" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Telefone</label>
                        <input type="text" placeholder="(11) 99999-9999" className="inputsForm" value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        minLength={11} maxLength={11}/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="" className={`${inter.className} labelForm`}>Nome de usuário</label>
                        <input type="text" placeholder='eletro.paulo' className="inputsForm" value={login} onChange={(e) => setLogin(e.target.value)} required/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idSenhaLoja" className={`${inter.className} labelForm`}>Senha</label>
                        <input type="password" id="idSenhaLoja" name="txtSenhaLoja" placeholder="************" className="inputsForm" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <div className='mb-5'>
                        <label htmlFor="idConfSenhaLoja" className={`${inter.className} labelForm`}>Confirmar senha</label>
                        <input type="password" id="idConfSenhaLoja" name="txtConfSenhaLoja" placeholder="************" className="inputsForm" value={confSenha} onChange={(e) => setConfSenha(e.target.value)}/>
                    </div>
                    <button className='botao w-full'>CRIAR CONTA</button>
                </form>
            </section>
        </>
    );
}
