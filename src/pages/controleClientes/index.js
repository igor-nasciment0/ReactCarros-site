import './index.scss';

import BarraLateral from "../../components/barraLateral";
import Cabecalho from "../../components/header";
import Form from '../../components/form';
import { useState } from 'react';

export default function ControleClientes() {

    const [inputsForm, setInputsForm] = useState([
        {nome: "Nome", tipo: "text"},
        {nome: "Email", tipo: "text"},
        {nome: "Telefone", tipo: "text"},
        {nome: "CPF", tipo: "text"},
        {nome: "CNH", tipo: "text"}
    ])

    return(
        <div className="pagina-clientes">
            <BarraLateral />

            <main>
                <Cabecalho />   

                <section className="sec-main">
                    <h1>Área Administrativa</h1>
                    <h2>Controle de Clientes</h2>

                    <Form inputs={inputsForm} titulo="Novo Cliente"/> 
                    
                    <div className="lista-clientes">
                        <h2>Lista de Clientes</h2>

                        <div className="input">
                            <label>Nome</label>
                            <input type="text" />
                            <img src="/assets/images/icons/search.svg" alt="" />
                        </div>

                        <table>
                            <thead>
                                <tr key="">
                                    <th>Nome</th>
                                    <th>CPF</th>
                                    <th>Telefone</th>
                                    <th>E-mail</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key="">
                                    <td>asdasd</td>
                                    <td>asdasd</td>
                                    <td>asdasd</td>
                                    <td>
                                        asdasd
                                        <div>
                                            <button><img src="/assets/images/icons/edit.svg" alt="" /></button>
                                            <button><img src="/assets/images/icons/trash-2.svg" alt="" /></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    )
}