import './header.css'

function Header(props) {
function Header({image, description, children}) {
  return(
    <div className="header">
      <h1>{props.children}</h1>
      <img src={props.image} alt={props.description} />
      <h1>{children}</h1>
      <img src={image} alt={description} />
    </div>
  )
}
}