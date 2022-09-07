import './menu.scss'

export const Menu = ()=>{
    return (
        <section className="menu">
            <div className='container'>
                <div className='flex titulo'>
                    <img src='logo.png'></img>
                </div>
                <nav className='desktop'>
                    <ul>
                        <li><a className='home' href='#home'>Home</a></li>
                        <li><a href='#promocao'>Promoçâo</a></li>
                        <li><a href='#cardapio'>Cardapio</a></li>
                        <li><a href='#comentarios'>Comentario</a></li>
                        <li><a href='#contato'>Contato</a></li>
                    </ul>
                </nav>
                <div className='contact'>
                    <img src='ifood.png'></img>
                    <img src='insta.png'></img>
                    <div className='line-head'></div>
                    <button>
                        <img src='wpp.png'></img>
                        <p>Contato</p>
                    </button>
                </div>
                <div className='mobile'>
                    <img src='menu.svg'></img>
                </div>
            </div>
        </section>
    )
}