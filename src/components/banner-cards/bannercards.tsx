import './bannercards.scss'

export const Bannercards = ()=>{
    return(
        <section className="bannercards">
            <div className='card'>
                <div className='icon'>
                    <img src='burger-icon.svg'></img>
                </div>
                <div>
                    <h1>Artesanal</h1>
                    <p>Nossas receitas são feitas com todo cuidado</p>
                </div>
            </div>
            <div className='card'>
                <div className='icon'>
                    <img src='atendimento-icon.svg'></img>
                </div>
                <div>
                    <h1>Atendimento</h1>
                    <p>Totalmente personalizado</p>
                </div>
            </div>
            <div className='card'>
                <div className='icon'>
                    <img src='delivery-icon.svg'></img>
                </div>
                <div>
                    <h1>DELIVERY Speed</h1>
                    <p>Entregamos menos de 45 minutos</p>
                </div>
            </div>
        </section>
    )
}