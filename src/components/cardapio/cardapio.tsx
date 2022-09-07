import { useEffect, useState } from 'react';
import './cardapio.scss'

const List = ( props: any )=>{
    return(
        <div className='list-cardapio'>
            <div className='titulo-cardapio'>
                <h1>{props.name}</h1>
                <div className='border'></div>
                <p>{props.price}</p>
            </div>
            <p>{props.ingredientes}</p>
        </div>
    )
}

export const Cardapio = ()=>{
    const [cardapio, setCardapio] = useState([{}]);
    async function Getcardapio(){
        const response = await fetch('https://api.brchallenges.com/api/empire-burger/menu');
        const data = await response.json();
        data.map((e: any)=>{
            e.price = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(e.price)
        })
        setCardapio(data)
    }

    useEffect(()=>{
        Getcardapio() 
    }, [])

    return(
        <section className='cardapio' id='cardapio'>
            <div className='bg-img '> 
            </div>
            <div className='bg-bg'>
            </div>
            <div className='container'>
                <div className='w50'>
                    <div className='titulo'>
                            <h1>Escolha o seu combo imperial,<h1 className='bg-text'>peça agora!</h1></h1>
                    </div>
                    <p>Temos vários tipos de pratos para a nossa realeza, fique esperto porque temos sempre  promoção!</p>
                    <button>Ver Cardápio Completo</button>
                </div>
                <div className='w50'>
                    <h1>Cardápio imperial | Burger</h1>
                    {cardapio.map((e) => <List name={e.plate} price={e.price} ingredientes={e.ingredients}/>)
                    }
                </div>
            </div>
            
        </section>
    )
}