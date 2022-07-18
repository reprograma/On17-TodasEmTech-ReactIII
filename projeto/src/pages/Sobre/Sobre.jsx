import Header from '../../components/Header/Header'
import './sobre.css'
import eu from '../../assets/eu.jpeg'

function Sobre({image, description}) {
  return(
    <Header 
      image={image} 
      description="minha foto">
      <img src={eu} alt={description}/>
      <h2>Meu nome é Juliana</h2>

      <h3>Sou formada em Biologia e atualmente sou estudante de programação</h3>
    </Header>

  )
 }
 
export default Sobre