import './index.scss';

import BarraLateral from "../../components/barraLateral";
import Cabecalho from "../../components/header";
import Form from '../../components/form';
import { useState } from 'react';
import axios from 'axios';

export default function ControleVeiculos() {

    const [tipoSelecionado, setTipoSelecionado] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [ano, setAno] = useState('');
    const [placa, setPlaca] = useState('');

    const [listaCarros, setListaCarros] = useState([]);
    const [idAlteracao, setIDAlteracao] = useState();
    const [textPesquisa, setTextPesquisa] = useState('');

    const inputsForm = [
        {nome: "Tipo", tipo: "select", var: tipoSelecionado, change: setTipoSelecionado},
        {nome: "Modelo", tipo: "text", var: modelo, change: setModelo},
        {nome: "Marca", tipo: "text", var: marca, change: setMarca},
        {nome: "Ano", tipo: "number", var: ano, change: setAno},
        {nome: "Placa", tipo: "text", var: placa, change: setPlaca}
    ]

    async function inserirVeiculo() {
        try {
            let newCarro = 
            {
                idTipo: Number(tipoSelecionado),
                modelo: modelo,
                marca: marca,
                ano: ano,
                placa: placa
            }
    
            await axios.post('http://localhost:5000/veiculo', newCarro);

        } catch (error) {
            console.log(error.message);
        }
    }

    async function listarVeiculos() {
        let url = `http://localhost:5000/veiculo?descricao=${textPesquisa}`;

        let dados = await axios.get(url);

        setListaCarros(dados.data);
    }

    async function deletarVeiculo(id) {
        let url = `http://localhost:5000/veiculo/${id}`;

        await axios.delete(url);
    }

    async function atualizarVeiculo() {
        let newCarro = 
        {
            idTipo: tipoSelecionado,
            modelo: modelo,
            marca: marca,
            ano: ano,
            placa: placa
        }

        await axios.put(`http://localhost:5000/veiculo/${idAlteracao}`, newCarro);
    }

    function atualizarVariaveis(veiculo) {
        setModelo(veiculo.modelo);
        setMarca(veiculo.marca);
        setAno(veiculo.ano);
        setTipoSelecionado(veiculo.tipo);
        setPlaca(veiculo.placa);

        setIDAlteracao(veiculo.id);
    }

/*     useState(() => {
        listarVeiculos()
    }, [textPesquisa]); */

    return(
        <div className="pagina-clientes">
            <BarraLateral />

            <main>
                <Cabecalho />   

                <section className="sec-main">
                    <h1>Área Administrativa</h1>
                    <h2>Controle de Veículos</h2>

                    <Form inputs={inputsForm} titulo="Novo Veículo" id={idAlteracao} salvar={inserirVeiculo} alterar={atualizarVeiculo}/> 
                    
                    <div className="lista-clientes">
                        <h2>Lista de Clientes</h2>

                        <div className="input">
                            <label>Nome</label>
                            <input type="text" value={textPesquisa} onChange={e => setTextPesquisa(e.target.value)}/>
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
                                {
                                    listaCarros.map(item =>
                                        <tr key="">
                                            <td>{item.modelo}</td>
                                            <td>{item.marca}</td>
                                            <td>{item.ano}</td>
                                            <td>{item.tipo}</td>
                                            <td>
                                                {item.placa}
                                                <div>
                                                    <button><img src="/assets/images/icons/edit.svg" alt="" onClick={() => atualizarVariaveis(item)}/></button>
                                                    <button><img src="/assets/images/icons/trash-2.svg" alt="" onClick={() => deletarVeiculo(item.id)}/></button>
                                                </div>
                                            </td>
                                        </tr>    
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    )
}