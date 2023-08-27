import './index.scss';

export default function Form(props) {
    return(
        <div className="formulario-insercao">
            <h3>{props.titulo}</h3>
            <form>
                {props.inputs.map(
                    input => 
                    (
                        <div>
                            <label htmlFor={input.nome}>{input.nome}</label>
                            <input name={input.nome} type={input.tipo} />
                        </div>
                    )
                )}

                <button>Salvar</button>
            </form>
        </div>
    )
}