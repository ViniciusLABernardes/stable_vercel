"use client"

import { LateralNav } from "@/components/lateralNav/LateralNav";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const [login, setLogin] = useState<string | null>(null);
    const [energiaConsumo, setEnergiaConsumo] = useState<Record<string, number>>({});
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true); 

    useEffect(() => {
        const storedLogin = sessionStorage.getItem("clienteLogin");
        setLogin(storedLogin);
    }, []);

    useEffect(() => {
        if (login) {
            const fetchConsumoEnergia = async () => {
                try {
                    setLoading(true);                                                  /*POR ENQUANTO DEIXAR NA REGIÃO SUDESTE, funciona as outras mas para melhor visualição utilizala junto do login: enel.sp senha: 123*/
                    const response = await axios.put(`http://localhost:8080/fonte/Sudeste/${login}`);
                    if (response.status === 204) {
                        
                        const updatedConsumo = await axios.get(`http://localhost:8080/fonte/Sudeste/${login}`);
                        
                        if (updatedConsumo.status === 200 && Array.isArray(updatedConsumo.data)) {
                            const somaConsumo: Record<string, number> = {};
    
                            updatedConsumo.data.forEach(item => {
                                const { energia, nivelConsumo } = item;
                                somaConsumo[energia] = (somaConsumo[energia] || 0) + nivelConsumo;
                            });
    
                            setEnergiaConsumo(somaConsumo);
                            setLoading(false); 
                            console.log('Consumo atualizado:', somaConsumo); 
                        }
                    } else {
                        setError("Erro ao tentar realocar consumidores.");
                        setLoading(false); 
                    }
                } catch (err) {
                    console.error("Erro ao tentar realocar consumidores:", err);
                    setError("Ocorreu um erro ao tentar realocar consumidores.");
                    setLoading(false); 
                }
            };

            const intervalId = setInterval(() => {
                fetchConsumoEnergia();
            }, 10000);
    
            return () => {
                clearInterval(intervalId); 
            };
        }
    }, [login]); 

    if (error) {
        return <div>Erro: {error}</div>;
    }

    const maxConsumo = Math.max(...Object.values(energiaConsumo));

    return (
        <div className="flex">
           <LateralNav />
           
           <div className="w-full justify-center">
                <div className="w-full pt-10">
                    <h3 className="text-center">Bem-vindo de volta <span className="text-corP1">{login}</span></h3>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-[400px]">
                        <div className="animate-spin border-4 border-t-4 border-green-500 rounded-full w-16 h-16"></div> {/* Bolinha de carregamento */}
                    </div>
                ) : (
                    <div className="grafico-container flex justify-around items-end h-[400px] mt-52">
                        {Object.entries(energiaConsumo).map(([energia, consumo]) => (
                            <div
                                key={energia}
                                className="mx-2 w-[150px] flex justify-center items-end bg-green-500 text-white font-bold rounded-tl-lg rounded-tr-lg"
                                style={{
                                  height: `${(consumo / maxConsumo) * 100}%`
                                }}
                            >
                                <span>{energia}</span>
                            </div>
                        ))}
                        <ul>
                            {Object.entries(energiaConsumo).map(([energia, consumo]) => (
                                <li key={energia} className="text-green-700">
                                    {energia}: {consumo} kWh
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );

}