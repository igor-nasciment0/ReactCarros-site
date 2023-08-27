import './index.scss';

export default function BarraLateral() {
    return(
        <section className="barra-lateral">
            <img src="/assets/images/logoRodas.png" alt="" />
            <h1>Elite<span>Wheelz</span></h1>

            <nav>
                <li>
                    <Link to="" >
                        <img src="/assets/images/icons/casa.svg" alt="" />
                        <h2>Home</h2>
                    </Link>
                </li>

                <li>
                    <Link to="" >
                        <img src="/assets/images/icons/user.svg" alt="" />
                        <h2>Clientes</h2>
                    </Link>
                </li>

                <li>
                    <Link to="" >
                        <img src="/assets/images/icons/carro.svg" alt="" />
                        <h2>Veículos</h2>
                    </Link>
                </li>

                <li>
                    <Link to="" >
                        <img src="/assets/images/icons/chave.svg" alt="" />
                        <h2>Locação</h2>
                    </Link>
                </li>
            </nav>
        </section>
    )
}