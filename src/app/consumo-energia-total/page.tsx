"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { LateralNav } from "@/components/lateralNav/LateralNav";
export default function UsoEnergiaRegiao() {

    const [energiaTotal, setEnergiaTotal] = useState<number | null>(null);
    const [login, setLogin] = useState("");
    const regiao = "Sudeste"; //PARA ALTERAR A REGIÃO MUDE AQUI OBS:CADASTRE CONSUMIDORES PARA VER, SE N QUISER PODE USAR ESTE LOGIN: enel.sp SENHA: 123

    useEffect(() => {
        const storedLogin = sessionStorage.getItem("clienteLogin");
        if (storedLogin) {
            setLogin(storedLogin);
        } else {
            alert("Login não encontrado.");
        }
    }, []);

    useEffect(() => {
        if (login) {
            const fetchEnergiaTotal = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:8080/fonte/soma-consumo-total/${regiao}/${login}`
                    );

                    console.log("Resposta do backend:", response.data);

                   
                    if (typeof response.data === "number") {
                        setEnergiaTotal(response.data);
                    } else {
                        console.error("Resposta inesperada do backend:", response.data);
                    }
                } catch (error) {
                    console.error("Erro ao buscar o consumo total de energia:", error);
                    alert("Ocorreu um erro ao buscar os dados.");
                }
            };

            fetchEnergiaTotal();
        }
    }, [login]);

    useEffect(() => {
        if (login && regiao) {
            const fetchEnergiaTotal = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:8080/fonte/soma-consumo-total/Sudeste/${login}`
                    );
                    setEnergiaTotal(response.data.energiaTotal);  
                } catch (error) {
                    console.error("Erro ao buscar o consumo total de energia:", error);
                    alert("Ocorreu um erro ao buscar os dados.");
                }
            };

            fetchEnergiaTotal();
        }
    }, [login, regiao]);

    return (
        <div className="flex">
           <LateralNav />
           
           <div className="w-full justify-center">
            <section className="container">
                <h3 className="text-3xl">Uso total de energia da região {regiao}:</h3>
                <p className="text-corP1 text-5xl">{energiaTotal }</p>
            </section>
            </div>
        </div>
    );
}