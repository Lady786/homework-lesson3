import Navbar from "./Navbar/Navbar.jsx"
import Header from "./Header/Header.jsx";
import Center from "./Center/Center.jsx";
import Footer from "./Footer/Footer.jsx";
import './App.css'
const App = () => {
  return (
    <div  className="container">

      <div className="site">
        <Navbar />
        <Header />
        <Center />
        <Footer />
      </div>
    </div>
  )
}

export default App