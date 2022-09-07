import './contato.scss'

export const Contato = ()=>{
    return (
        <section className='contato container' id='contato'>
            <div className='img-bg'>
                <img src='celular.png'></img>
            </div>
            <div className='nossas-entregas'>
                <h1>Nossas entregas</h1>
                <div className='box'>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                        <h2>Whatsapp</h2>
                        <p>Vamos direto ao ponto, sem perder tempo!</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                        <h2>Entrega</h2>
                        <p>Entregamos menos de 45 minutos na porta da sua casa!</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                        <h2>Sobremesa</h2>
                        <p>Pedidos assima de 100 reais, ganham brindes.</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon'>

                    </div>
                    <div className='text'>
                        <h2>iFood</h2>
                        <p>Nossa loja é Top 1 da região!</p>
                    </div>
                </div>
            </div>
            <div className='pedir'>
                <div className='icon'>

                </div>
                <div className='text'>
                    <h1>faça o seu pedido agora mesmo!</h1>
                    <p>Venha saborear a melhor experiência de hamburguenses artesanal
                    do <strong>Empires Burger</strong>, com temática medieval!</p>
                    <button>Solicitar Pedido</button>
                </div>
            </div>
        </section>
    )
}