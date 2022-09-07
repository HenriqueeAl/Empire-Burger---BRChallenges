import './atendimento.scss'

export const Atendimento = ()=>{
    return (
        <section className='atendimento container'>
            <div className='content'>
                <div className='img'>
                    <img src='eat.png'></img>
                </div>
                <div className='text'>
                    <h1>Atendimento <h1 className='bg-text'>personalizado</h1></h1>
                    <p>Todos os nossos clientes são tratados como rei e rainha, com a
                     nossa colunaria artesanal.</p>
                     <button>Cardápio Imperial</button>
                </div>
            </div>
        </section>
    )
}