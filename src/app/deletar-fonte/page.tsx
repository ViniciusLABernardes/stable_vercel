"use client";
import Image from 'next/image';
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import logo from '../../../public/assets/images/stable-icon.png';

export default function DeleteFonte() {
    const [login, setLogin] = useState("");
    const [energia, setEnergia] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        const storedLogin = sessionStorage.getItem("clienteLogin");
        if (storedLogin) {
            setLogin(storedLogin);
        } else {
            alert("Login não encontrado.");
        }
    }, []);

    const handleDelete = async () => {
        if (!energia) {
            alert("Por favor, insira o tipo de energia para deletar.");
            return;
        }

        try {
            const response = await axios.delete(
                `http://localhost:8080/empresa?login=${login}&energia=${energia}`
            );

            if (response.status === 200 || response.status === 204) {
                setMessage(`Fonte de energia "${energia}" foi deletada com sucesso.`);
            } else {
                setMessage("Não foi possível deletar a fonte de energia.");
            }
        } catch (error) {
            console.error("Erro ao deletar a fonte de energia:", error);
            setMessage("Ocorreu um erro ao tentar deletar a fonte de energia.");
        }
    };

    return (
        <section className='container formContainer'>
          <Link href='/dashboard'><Image src={logo} alt="Logo" className='logoForm'/></Link>
                <h3>Deletar Fonte de Energia</h3>
            <p>Login atual: <strong>{login}</strong></p>
            <div>
                <label htmlFor="energia">Tipo de Energia:</label>
                <input
                    type="text"
                    id="energia"
                    value={energia}
                    onChange={(e) => setEnergia(e.target.value)}
                    placeholder="Ex.: Eólica"
                    className="inputsForm"
                />
            </div>
            <button onClick={handleDelete} className="botao mt-4">
                Deletar Fonte de Energia
            </button>
            {message && <p className="mt-4">{message}</p>}
            </section>
       
    );
}