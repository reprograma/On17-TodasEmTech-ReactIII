import Header from '../../components/Header/Header'
import './sobre.css'
import eu from '../../assets/eu.jpeg'

function Sobre({ image, description }) {
    return (
<h1>Sobre</h1>
<Header 
image={image} 
description="minha foto">
<img src={eu} alt={description}/>
<h2>Oie! Meu nome é Danielle</h2>
    
 <h3>Eu tenho 21 anos, curso bacharelado em Design Digital e estou aprendendo desenvolvimento front-end através da {reprograma}.</h3>
 </Header>

    )
}