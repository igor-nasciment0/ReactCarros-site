import './index.scss';

import BarraLateral from "../../components/barraLateral";
import Cabecalho from "../../components/header";
import Form from '../../components/form';
import { useEffect, useState } from 'react';
import axios from 'axios';


export default function ControleClientes() {

    const [listaClientes, setListaClientes] = useState([]);
    const [nomePesquisa, setNomePesquisa] = useState('');

    const [idAlteracao, setIDAlteracao] = useState();

    const [nomeCliente, setNomeCliente] = useState('');
    const [emailCliente, setEmailCliente] = useState('');
    const [telefoneCliente, setTelefoneCliente] = useState('');
    const [cpfCliente, setCpfCliente] = useState('');
    const [cnhCliente, setCnhCliente] = useState('');

    const inputsForm = [
        {nome: "Nome", tipo: "text", var:nomeCliente, change: setNomeCliente},
        {nome: "Email", tipo: "text", var:emailCliente, change: setEmailCliente},
        {nome: "Telefone", tipo: "text", var:telefoneCliente, change: setTelefoneCliente},
        {nome: "CPF", tipo: "text", var:cpfCliente, change: setCpfCliente},
        {nome: "CNH", tipo: "text", var:cnhCliente, change: setCnhCliente}
    ];

    async function inserirCliente() {
        let newCliente = 
        {
            nome: nomeCliente,
            email: emailCliente,
            telefone: telefoneCliente,
            cpf: cpfCliente,
            cnh: cnhCliente
        }

        let url = 'http://localhost:5000/cliente';

        await axios.post(url, newCliente);
    }

    async function listarClientes()
    {
        let resposta = await axios.get(`http://localhost:5000/cliente?nome=${nomePesquisa}`);
        let clientes = resposta.data;

        setListaClientes([...clientes]);
    }

    async function deletarCliente(id)
    {
        let url = `http://localhost:5000/cliente/${id}`;

        await axios.delete(url);
    }

    async function alterarCliente()
    {
        let url = `http://localhost:5000/cliente/${idAlteracao}`;
        
        let newCliente = 
        {
            nome: nomeCliente,
            email: emailCliente,
            telefone: telefoneCliente,
            cpf: cpfCliente,
            cnh: cnhCliente
        };

       await axios.put(url, newCliente);
    }

    function atualizarVariaveis(cliente) {
        setNomeCliente(cliente.nome);
        setEmailCliente(cliente.email);
        setTelefoneCliente(cliente.telefone);
        setCpfCliente(cliente.cpf);
        setCnhCliente(cliente.cnh);

        setIDAlteracao(cliente.id);
    }

    useEffect(() => {
        listarClientes()
    }, []);

    return(
        <div className="pagina-clientes">
            <BarraLateral />

            <main>
                <Cabecalho />   

                <section className="sec-main">
                    <h1>Área Administrativa</h1>
                    <h2>Controle de Clientes</h2>

                    <Form inputs={inputsForm} titulo="Novo Cliente" id={idAlteracao} salvar={inserirCliente} alterar={alterarCliente}/> 
                    
                    <div className="lista-clientes">
                        <h2>Lista de Clientes</h2>

                        <div className="input">
                            <label>Nome</label>
                            <input type="text" onChange={e => setNomePesquisa(e.target.value)}/>
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
                                {
                                    listaClientes.map(item =>
                                        <tr key="">
                                            <td>{item.nome}</td>
                                            <td>{item.cpf}</td>
                                            <td>{item.telefone}</td>
                                            <td>
                                                {item.email}
                                                <div>
                                                    <button><img src="/assets/images/icons/edit.svg" alt="" onClick={() => atualizarVariaveis(item)}/></button>
                                                    <button><img src="/assets/images/icons/trash-2.svg" alt="" onClick={() => deletarCliente(item.id)}/></button>
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