import './mapa.scss'

export const Mapa = ()=>{
    return(
        <section className='mapa'>
            <h1>Onde ficar a nosso castelo</h1>
            <p>Estaremos de portas abertas para a nossa realeza.</p>
            <iframe width="100%" height="208" src="https://maps.google.com/maps?width=100%25&amp;height=208&amp;hl=en&amp;q=S%C3%A3o%20Paulo%20Av%20paulista+()&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </section>
    )
}