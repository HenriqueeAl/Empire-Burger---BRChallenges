import './footer.scss'

export const Footer = ()=>{
    return(
        <footer className='container'>
            <img src='coroa-vermelha.svg'></img>
            <h1>Empire burger</h1>
            <nav>
                <ul>
                    <li><a className='home' href='#home'>Home</a></li>
                    <li><a>Localização</a></li>
                    <li><a href='#cardapio'>Cardapio</a></li>
                    <li><a>Sobre</a></li>
                </ul>
            </nav>
            <img src='ifood-yellow.svg'></img>
            <img src='insta-yellow.svg'></img>

            <div className='direitos'>
                <p><strong>2022 © EmpireBurger.</strong> Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}