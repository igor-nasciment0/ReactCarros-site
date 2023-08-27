import BarraLateral from "../../components/barraLateral";
import Cabecalho from "../../components/cabecalho";

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