import './header.css'

function Header({image, description, children}) {
    return(
      <div className="header">
              <h1>{children}</h1>
      <img src={image} alt={description} />
    </div>
  )
}