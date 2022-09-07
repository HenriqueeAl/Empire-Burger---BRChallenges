import './footer.scss'

export const Footer = ()=>{
    return(
        <footer className='container'>
            <div className='logo'>
                <img src='logo-footer.png'></img>
            </div>
            <nav>
                <ul>
                    <li><a className='home' href='#home'>Home</a></li>
                    <li><a>Localização</a></li>
                    <li><a href='#cardapio'>Cardapio</a></li>
                    <li><a>Sobre</a></li>
                </ul>
            </nav>
            <div className='redes'>
                <img src='ifood-yellow.svg'></img>
                <img src='insta-yellow.svg'></img>
            </div>

            <div className='direitos'>
                <p><strong>2022 © EmpireBurger.</strong> Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}