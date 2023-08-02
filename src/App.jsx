import iconoPersona from '/person-fill.svg'
import montaña from '/mountain.png'
import './App.css'

function App() {
  return (
    <>
      <header>
      <nav>
          <h2>My Tinerary</h2>
          <a href="">Home</a>
          <a href="">Cities</a>
          <a href="" id="login"><img id="icon" src={iconoPersona} />Login</a>
        </nav>
      </header>
      <main>
      <div className="contenedor">
        
        <div className="text">
          <h1>Find the perfect destination</h1>
          <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of
            intinerary options, planning your next trip has never been easier.</p>
          <a href="" id="bmore">View More</a>
        </div>
            <img src={montaña} id="imagen"/>
      </div>
      </main>
      <footer>
        <p>Footer</p>
      </footer> 
    </>
  )
}

export default App
