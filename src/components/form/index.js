import { useState } from 'react';
import axios from 'axios';
import './index.scss';

export default function Form(props) {

    let [tiposVeiculo, setTiposVeiculo] = useState([]);

    setTiposVeiculo(axios.get())

    return(
        <div className="formulario-insercao">
            <h3>{props.titulo}</h3>
            <form>
                {props.inputs.map(
                    input => 
                    (
                        <div>
                            <label htmlFor={input.nome}>{input.nome}</label>
                            {
                                input.tipo != "select" ?  
                                
                                <input name={input.nome} type={input.tipo} value={input.var} onChange={e => input.change(e.target.value)}/> :

                                <select>
                                    {tiposVeiculo.map(tipo => 
                                        <option value={tipo.id}>{tipo.descricao}</option>    
                                    )}
                                </select>
                            }
                        </div>
                    )
                )}

                <button onClick={() => {
                    !props.id ? props.salvar() : props.alterar()
                }}>Salvar</button>
            </form>
        </div>
    )
}