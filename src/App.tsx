import './app.scss'
import { Atendimento } from './components/atendimento/atendimento'
import { Bannercards } from './components/banner-cards/bannercards'
import { Banner } from './components/banner/banner'
import { Cardapio } from './components/cardapio/cardapio'
import { Comentarios } from './components/comentarios/comentarios'
import { Contato } from './components/contato/contato'
import { Footer } from './components/footer/footer'
import { Mapa } from './components/mapa/mapa'
import { Menu } from './components/menu/menu'
import { Promocao } from './components/promocao/promocao'
import { Publicacoes } from './components/publicacoes/publicacoes'

function App() {

  return (
    <div className="App">
      <Menu />
      <Banner />
      <Bannercards />
      <Promocao />
      <Cardapio />
      <Atendimento />
      <Comentarios />
      <Publicacoes />
      <Contato />
      <Mapa />
      <Footer />
    </div>
  )
}

export default App
