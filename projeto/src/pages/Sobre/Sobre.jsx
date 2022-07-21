function Sobre() {
  import Header from '../../components/Header/Header'
  import './sobre.css'
  import eu from '../../assets/Perfil.jpg'
  
  function Sobre({image, description}) {
    return(
     <h1>Sobre</h1>
      <Header 
        image={image} 
        description="minha foto">
        <img src={eu} alt={description}/>
        <h2>Meu nome é Nana</h2>
      </Header>
    )
   } 
  }