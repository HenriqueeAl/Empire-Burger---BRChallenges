import { useEffect, useState } from 'react';
import './promocao.scss'

const data = new Date;
const hours: any = data.getHours();
const day = data.getDay();

export const Promocao = ()=>{
    const [estado, setEstado] = useState('')
    const data = new Date;
    const hours: number = data.getHours();
    const day: number = data.getDay();

    useEffect(()=>{
        if (day == 0 || day == 6){
            if(hours >= 18 && hours < 23){
                setEstado('aberto')
            }else{
                setEstado('fechado')
            }
        }else{
            if(hours >= 17 && hours < 23){
                setEstado('aberto')
            }else{
                setEstado('fechado')
            }
        }
    })
    return(
        <section className="promocao" id='promocao'>
            <div className='container'>
                <h1>Ofertas especiais</h1>
                <p>Aproveite todas as nossas ofertas, fiquem de olhos abertos,
                porque sempre estamos mudando o nosso cardapio.</p>
                <div className='ofertas'>
                    <div className='oferta-burger'>
                        <h1>Burger imperial+batata</h1>
                        <p>250kg</p>
                        <h2>Apenas</h2>
                        <strong>Hoje</strong>
                    </div>
                    <div className='oferta-batata'>
                        <h1>batata</h1>
                        <p>150kg</p>
                    </div>
                    <div className='oferta-sorvete'>
                        <h1>Sorvete</h1>
                        <p>50kg</p>
                    </div>
                </div>
                <div className='row'>
                    {estado == 'fechado' &&
                    <div className='horario fechado'>
                        <div className='icon'>
                            <img src='relogio.svg'></img>
                        </div>
                        <div className='text'>
                            <h2>Horário de funcionamento <strong> - fechado</strong></h2>
                            <p>Segunda-feira a sexta-feira: 17h00 - 23h00</p>
                            <p>Sabado a Domíngo: 18h00 - 23h00</p>
                        </div>
                    </div>
                    }
                    {estado == 'aberto' &&
                    <div className='horario aberto'>
                        <div className='icon'>
                            <img src='relogio.svg'></img>
                        </div>
                        <div className='text'>
                            <h2>Horário de funcionamento <strong> - aberto</strong></h2>
                            <p>Segunda-feira a sexta-feira: 17h00 - 23h00</p>
                            <p>Sabado a Domíngo: 18h00 - 23h00</p>
                        </div>
                    </div>
                    }
                    <div className='insta'>
                    <p>Não esqueça de marcar a gente no Instagram:</p>
                    <h3>#empireburger</h3>  
                    </div>
                </div>
            </div>
        </section>
    )
}