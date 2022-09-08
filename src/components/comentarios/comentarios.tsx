import { useEffect, useState } from 'react'
import './comentarios.scss'

const Testimonials = (props: any)=>{
    return(
        <div className='box'>
            <p>{props.testimonial}</p>
            <div className='flex'>
                <div className='perfil-img' style={{backgroundImage: `url('${props.img}')`}}></div>
                <div>
                    <h1>{props.name}</h1>
                    <p>{props.age} Anos</p>
                </div>
            </div>
        </div>
    )
}

export const Comentarios = ()=>{
    const [comments, setComments] = useState([{}])
    const Getcomentarios = async ()=>{
        const response = await fetch('https://api.brchallenges.com/api/empire-burger/testimonials')
        const data = await response.json();
        setComments(data)
    }


    useEffect(()=>{
        Getcomentarios()
    }, [])

    const documet: any = 'aa'
    const carousel: any = document.getElementById('carousel');

    return(
        <section className='comentarios container' id='comentarios'>
            <h1>Nossa realeza</h1>
            <p>A satisfação de nossos clientes em primeiro lugar!</p>
            <div className='row' id='carousel'>
                {comments.map((e: any)=> <Testimonials name={e.name} age={e.age} img={e.image} testimonial={e.testimonial}/>)}
            </div>
            <div className='aling-gradient'>
                <div className='gradiente' id='gradiente'></div>
            </div>
            <div className='carousel'>
                    <div className='bar select' id='1' onClick={()=>{
                        carousel.scrollTo(0,0)
                        document.querySelector('.select')?.classList.remove('select')
                        document.getElementById('1')?.classList.add('select')
                        }}></div>
                    <div className='bar' id='2' onClick={()=>{
                        carousel.scrollTo(1120,0)
                        document.querySelector('.select')?.classList.remove('select')
                        document.getElementById('2')?.classList.add('select')
                        }
                        }></div>
                    <div className='bar' id='3' onClick={()=>{
                        carousel.scrollTo(2240,0)
                        document.querySelector('.select')?.classList.remove('select')
                        document.getElementById('3')?.classList.add('select')
                    }}></div>
                    <div className='bar' id='4' onClick={()=>{
                        carousel.scrollTo(3600,0)
                        document.querySelector('.select')?.classList.remove('select')
                        document.getElementById('4')?.classList.add('select')
                        }}></div>
            </div>
        </section>
    )
}