import './index.scss';

import BarraLateral from "../../components/barraLateral";
import Cabecalho from "../../components/header";
import Form from '../../components/form';

export default function ControleVeiculos() {

    const inputsForm = [
        {nome: "Tipo", tipo: "select"},
        {nome: "Modelo", tipo: "text"},
        {nome: "Marca", tipo: "text"},
        {nome: "Ano", tipo: "number"},
        {nome: "Placa", tipo: "text"}
    ]

    return(
        <div className="pagina-clientes">
            <BarraLateral />

            <main>
                <Cabecalho />   

                <section className="sec-main">
                    <h1>Área Administrativa</h1>
                    <h2>Controle de Veículos</h2>

                    <Form inputs={inputsForm} titulo="Novo Veículo" /> 
                    
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
                                    <th>Modelo</th>
                                    <th>Marca</th>
                                    <th>Ano</th>
                                    <th>Tipo</th>
                                    <th>Placa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr key="">
                                    <td>asdasd</td>
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