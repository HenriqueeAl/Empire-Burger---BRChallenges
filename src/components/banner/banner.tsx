import './banner.scss'

export const Banner = ()=>{
    return (
        <section className="banner" id='home'>
            <div className='content container'>
                <p>Uma nova experiência!</p>
                <div className='row'>
                    <h1 className='king-color'>King</h1>
                    <h1 className='burger-color'>burger</h1>
                </div>
                <div className='row line-3'>
                    <p>Para quem tem um </p>
                    <p className='apetite'>Apetite de um REI!</p>
                </div>
                <button>Comprar Agora</button>
            </div>
        </section>
    )
}