import { useEffect, useState } from 'react'
import './comentarios.scss'

const Testimonials = (props: any)=>{
    return(
        <div className='box'>
            <p>{props.testimonial}</p>
            <div className='row'>
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

    return(
        <section className='comentarios container' id='comentarios'>
            <h1>Nossa realeza</h1>
            <p>A satisfação de nossos clientes em primeiro lugar!</p>
            <div className='row'>
                {comments.map((e)=> <Testimonials name={e.name} age={e.age} img={e.image} testimonial={e.testimonial}/>)}
            </div>
        </section>
    )
}