"use client";
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import logo from '../../../public/assets/images/stable-icon.png';

export default function CadastroConsumidor() {
    const [nomeConsumidor, setNomeConsumidor] = useState("");
    const [nivelConsumo, setNivelConsumo] = useState(0);
    const [prioridade, setPrioridade] = useState(0);
    const [regiao, setRegiao] = useState("");
    const [status] = useState("Ativo");
    const [emissaoCarbono, setEmissaoCarbono] = useState(0);
    const [tipoFonte, setTipoFonte] = useState(""); // Fonte de energia
    const [login, setLogin] = useState(""); // Login do cliente
    const router = useRouter();

    useEffect(() => {
        const storedLogin = sessionStorage.getItem("clienteLogin");
        if (storedLogin) {
            setLogin(storedLogin); 
        } else {
            alert("Login não encontrado.");
        }
    }, []);

    const handleCadastroConsumidor = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!login) {
            alert("Login não encontrado. Por favor, faça login primeiro.");
            return; 
        }

        if (!nomeConsumidor || !nivelConsumo || !prioridade || !regiao || !tipoFonte || !emissaoCarbono) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const data = {
            consumidor: {
                nomeConsumidor,
                nivelConsumo,
                prioridade,
                regiao,
                status,
                emissaoCarbono
            },
            energia: {
                tipoFonte
            },
            login
        };

        try {
            const response = await axios.post('http://localhost:8080/consumidor', data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            });

            if (response.status === 201) {
                alert("Cadastro de consumidor realizado com sucesso!");
                router.push(`/dashboard?clienteLogin=${login}`);
            } else if (response.status === 400) {
                alert("Erro ao cadastrar o consumidor");
            }
        } catch (error) {
            console.error("Erro ao cadastrar consumidor:", error);
            alert("Ocorreu um erro ao tentar cadastrar o consumidor.");
        }
    };

    return (
        <section className='container formContainer'>
            <Link href='/dashboard'><Image src={logo} alt="Logo" className='logoForm'/></Link>
            <h3 className="titleForm">Cadastrar Consumidor</h3>
            <p className="subtitleForm">Por favor, insira os dados do consumidor</p>
            
            <form onSubmit={handleCadastroConsumidor}>
                <div className="mb-5">
                    <label className="labelForm">Nome do Consumidor</label>
                    <input 
                        type="text" 
                        className="inputsForm" 
                        onChange={(e) => setNomeConsumidor(e.target.value)} 
                        value={nomeConsumidor}
                    />
                </div>
                <div className="mb-5">
                    <label className="labelForm">Nível de Consumo</label>
                    <input 
                        type="number" 
                        className="inputsForm" 
                        onChange={(e) => setNivelConsumo(Number(e.target.value))} 
                        value={nivelConsumo}
                    />
                </div>
                <div className="mb-5">
                    <label className="labelForm">Prioridade</label>
                    <input 
                        type="number" 
                        className="inputsForm" 
                        onChange={(e) => setPrioridade(Number(e.target.value))} 
                        value={prioridade}
                    />
                </div>
                <div className="mb-5">
                    <label className="labelForm">Região</label>
                    <input 
                        type="text" 
                        className="inputsForm" 
                        onChange={(e) => setRegiao(e.target.value)} 
                        value={regiao}
                    />
                </div>
                <div className="mb-5">
                    <label className="labelForm">Emissão de Carbono</label>
                    <input 
                        type="number" 
                        className="inputsForm" 
                        onChange={(e) => setEmissaoCarbono(Number(e.target.value))} 
                        value={emissaoCarbono}
                    />
                </div>
                <div className="mb-5">
                    <label className="labelForm">Fonte de Energia</label>
                    <input 
                        type="text" 
                        className="inputsForm" 
                        onChange={(e) => setTipoFonte(e.target.value)} 
                        value={tipoFonte}
                    />
                </div>
                <button type="submit" className="botao w-full">Cadastrar Consumidor</button>
            </form>
        </section>
    );
}
