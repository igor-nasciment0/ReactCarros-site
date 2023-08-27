import './index.scss';

import BarraLateral from "../../components/barraLateral";
import Cabecalho from "../../components/header";

export default function ControleClientes() {
    return(
        <div className="pagina-clientes">
            <BarraLateral />

            <main>
                <Cabecalho />
            </main>
        </div>
    )
}